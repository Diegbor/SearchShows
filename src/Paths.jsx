import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import App from './components/App'
import { Navbar } from './components/Navbar'
import Show from './components/Show'

const Paths = () => {
  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Outlet />}>
          <Route index element={<App />} />
          <Route path='/home/:showId' element={<Show />} />
        </Route>
        <Route path='/404' element={<p>404</p>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </section>
  )
}

export default Paths
