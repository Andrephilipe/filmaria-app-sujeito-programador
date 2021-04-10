import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Filme from './pages/Filme';
import Erro from './pages/Erro';

const Routes = ()=>{
	return(
		<BrowserRouter>
		<Header/>
		<Switch>

			<Route exact path="/" component={Home}/>
			<Route exact path="/favoritos" component={Favoritos}/>
			<Route exact path="/filme/:id" component={Filme}/>
			<Route path="*" component={Erro} />
		
		</Switch>
		<Footer/>
		</BrowserRouter>
		)
}

export default Routes;