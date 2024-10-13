
interface prop{
    children: React.ReactNode
}

const Container = ({children}: prop) => {
  return (
    <div>
            <h1>Container</h1>
            {children}
    </div>
  )
}

export default Container