import { useEffect, useState} from 'react';
import './filmes-info.css';
import { toast } from 'react-toastify';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';


export default function Filme(){
	const { id }= useParams();
	const history = useHistory();

	const [filme, setFilme] = useState([]);
	const [loadind, setLoading] = useState(true);

	useEffect(()=>{

		async function loadFilme(){
			const response = await api.get(`r-api/?api=filmes/${id}`);
			
			if (response.data.length === 0) {
				history.replace('/');
				return;
			}

			setFilme(response.data);
			setLoading(false);
		};

		loadFilme();

	}, [history, id]);

	function salvaFilme(){

		const minhaLista = localStorage.getItem('filmes');

		let filmesSalvos = JSON.parse(minhaLista) || [];
		//se tiver algum filme salvo com o mesmo id ignorara
		const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id )

		if(hasFilme){
			toast.error('Filme já está salvo!');
			return;
		}

		filmesSalvos.push(filme);
		localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
		toast.info('Filme foi salvo com sucesso');
	}


if (loadind) {
	return(
		<div>Carregando seu filme</div>
		)
}
	return(
		<div className="filme-info">

			<h1>{filme.nome}</h1>
			<img src={filme.foto} alt={filme.nome}/>
			<h3>Sinopse</h3>
			{filme.sinopse}

			<div className="botoes">
				<button onClick={ salvaFilme }>Salvar</button>
				<button>
					<a target="black" href={`http://youtube.com/results?search_query=${filme.nome} Trailer`} >
						Traller
					</a>
				</button> 
			</div>
		</div>
		)
}