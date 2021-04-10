import axios from 'axios';
 //let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/';

const api = axios.create({
	baseURL:'https://sujeitoprogramador.com'
});
export default api;