import { Link } from 'react-router-dom'

const MenuMobile = ({ menu, closeMenu }) => {
  return (
    <ul className={`menu-mobile ${menu ? 'active' : ''}`}>
        <li><Link to='/populares' onClick={closeMenu}>Populares</Link></li>
        <li><Link to='/topvinte' onClick={closeMenu}>Top 20</Link></li>
        <li><Link to='acao' onClick={closeMenu}>Ação</Link></li>
        <li><Link to='comedia' onClick={closeMenu}>Comédia</Link></li>
        <li><Link to='drama' onClick={closeMenu}>Drama</Link></li>
        <li><Link to='thriller' onClick={closeMenu}>Thriller</Link></li>
        <li><Link to='romance' onClick={closeMenu}>Romance</Link></li>
    </ul>
  )
}

export default MenuMobile