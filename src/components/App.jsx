import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import Loading from './Loading'
import Series from './Series'

const urlBase = 'https://api.tvmaze.com/search/shows?q='

function App () {
  const searchShow = useRef(null)
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)

  const getShows = async (query = 'batman') => {
    return await axios.get(`${urlBase}${query}`)
  }

  const getData = async () => {
    const { data } = await getShows()
    console.log(data)
    setSeries(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getShows(searchShow.current.value)
    setSeries(data)
  }

  return (
    <section className='container py-4'>
      <h4 className='text-center'>Buscador de series</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            type='search' className='form-control'
            placeholder='Buscar show' ref={searchShow}
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      <section className='py-4'>
        {loading ? <Loading /> : <Series data={series} />}
      </section>
    </section>
  )
}

export default App
