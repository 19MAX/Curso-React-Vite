import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error("Error al obtener los datos ")
      }
      const jsonData = await response.json()

      setData(jsonData)
    } catch (e) {
      setError(e as string)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()

  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {

    return <div>Hay un error {error}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
