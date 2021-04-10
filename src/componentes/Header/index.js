import './style.css';
import { Link } from 'react-router-dom';

export default function Header(){
	return(
		<header>
    
        <Link className="logo" to="/">Filmaria</Link>
      
      <nav className="navbar">
         <a href="/Favoritos">Salvar</a>

       
        
      </nav>
    </header>

		)
}