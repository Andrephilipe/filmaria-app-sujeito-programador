import React, {useEffect, useState} from 'react';
import './style.css';


export default function App(){

  const [filmes, setFilme] = useState([]);

  useEffect(()=>{

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/';

      fetch(url)
      .then((r)=> r.json())
      .then((json)=>{
        console.log(json);
        setFilme(json);
      })

    }

    loadApi();
  }, []);

  return(
    <div class="container">
      <header>
        <strong>Filmaria</strong>
      </header>
     {filmes.map((item)=>{

      return(

        <article key="item.id" className="filmes">

          <strong className="nome">{item.nome}</strong>

            <img src={item.foto} alt={item.nome} />

            <p className="sinopse">{item.sinopse}</p>

        </article>
        )
     })}
    </div>
    );
}