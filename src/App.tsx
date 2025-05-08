import './App.css'
import { useFetch } from '../hooks'

const url = 'https://jsonplaceholder.typicode.com/posts'

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {

  const { data, loading, error } = useFetch<Data>(url)

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>.Error en el llamado {error.message}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
