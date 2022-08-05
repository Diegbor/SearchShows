import { Link } from 'react-router-dom'
import CardSerie from './CardSerie'

const Series = ({ data }) => {
  return (
    data.length === 0
      ? <p className='text-center'>No se encontraron resultados</p>
      : (
        <ul className='row gx-0 gx-md-5 gy-4'>
          {data.map(item => (
            <li
              className='col-12 col-md-6 col-lg-4'
              key={item.show.id}
            >
              <Link to={`/home/${item.show.id}`}>
                <CardSerie {...item} />
              </Link>
            </li>
          ))}
        </ul>
        )
  )
}

export default Series
