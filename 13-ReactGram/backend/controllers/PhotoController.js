const Photo = require("../models/Photo");

const mongoose = require("mongoose");
const User = require("../models/User");
const { json } = require("express");

// Insert photo, with an user realtioned to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // Create photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  // If photo was created sucessfully, return data
  if (!newPhoto) {
    res
      .status(422)
      .json({ erros: ["Houve um problema, por favor tente mais tarde "] });
  }

  res.status(201).json(newPhoto);
};

// Delete photo
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  try {
    const photo = await Photo.findById(id);

    // check if photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada"] });
      return;
    }

    // check if photo belongs to an user
    if (!photo.userId.equals(reqUser._id)) {
      res
        .status(422)
        .json({ errors: ["Ocorreu algum erro, tente novamente mais tarde"] });
      return;
    }

    await Photo.findByIdAndDelete(photo._id);
    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluida com sucesso" });
  } catch (error) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
  }
};

// Get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// Get photos from an user
const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// Get photo by id
const getPhotoById = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await Photo.findById(id);

    // check if photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada"] });
      return;
    }

    res.status(200).json(photo);
  } catch (error) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
  }
};

// Update a photo
const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const reqUser = req.user;

  const photo = await Photo.findById(id);

  //check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  // check if photo belongs to user
  if (!photo.userId.equals(reqUser._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
    return;
  }

  if (title) {
    photo.title = title;
  }

  await photo.save();
  res.status(200).json({ photo, message: "Foto atualizada com sucesso" });
};

// Like function
const likePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  const photo = await Photo.findById(id);

  //check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  // Check if user already liked
  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: ["Você já curtiu a foto"] });
    return;
  }

  // Put user id in likes array
  photo.likes.push(reqUser._id);
  photo.save();
  res
    .status(200)
    .json({ photoId: id, userId: reqUser._id, message: "A foto foi curtida" });
};

// Comments function
const commentPhoto = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const reqUser = req.user;
  const user = await User.findById(reqUser._id); //usuario que comentou
  const photo = await Photo.findById(id); //usuario dono da foto

  //check if photo exists
  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  //Put comment in the arrays of comment
  const userComment = {
    comment,
    userName: user.name,
    userImage: user.profileImage,
    userId: user._id,
  };

  photo.comments.push(userComment);

  await photo.save();
  res
    .status(200)
    .json({comment: userComment, message: "O comentário foi adicionado com sucesso"});
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentPhoto
};
