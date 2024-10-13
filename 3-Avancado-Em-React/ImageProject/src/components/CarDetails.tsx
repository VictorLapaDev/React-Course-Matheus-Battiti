interface car{
    brand: string,
    km: number,
    color: string,
    novo: boolean,
    id: number
}

const CarDetails = ({brand, km, color, novo, id} : car) => {
  return (
    <div>
        <h2>Detalhes do carro {id}:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
            {novo && <li>Este carro é novo!!</li>}
        </ul>
    </div>
  )
}

export default CarDetails