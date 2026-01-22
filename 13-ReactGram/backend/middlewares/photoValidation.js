const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O titulo é obrigatório")
      .isString(0)
      .withMessage("O titulo é obrigatório")
      .isByteLength({ min: 3 }).withMessage("O titulo deve ter mais de 3 caracteres"),
    body("image").custom((value, {req}) => {
        if(!req.file){
            throw new Error("A imagem é obrigatória")
        }

    return true;
    })
  ];
};


module.exports = photoInsertValidation