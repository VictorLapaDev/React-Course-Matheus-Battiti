interface car{
    brand: string,
    km: number,
    color: string
}

const CarDetails = ({brand, km, color} : car) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails