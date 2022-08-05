import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
      <div className='container-fluid'>
        <a className='navbar-brand' href=''>
          Show shows
        </a>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/home'>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
