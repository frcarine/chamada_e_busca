import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let titulo = "Curso de FrontEnd React";
  let [txtAluno, setTxtAluno] = useState("");
  let [txtFiltro, setTxtFiltro] = useState("");
  let [alunos, setAlunos] = useState<string[]>([])
  let [alunosFilter, SetAlunosFilter] = useState<string[]>([])

  function salvar(){
    console.log("salvar");
    let resultado = alunos.find(e=> e.toLowerCase() ==txtAluno.toLowerCase());
    if(resultado==undefined){
    let novaList =[...alunos, txtAluno];
    setAlunos(novaList);
    setTxtAluno("");
  }else{
    alert("Já existe :" + txtAluno);
  }
}

function buscar(filtro:string){

  let novaList =[...alunos];
  let resultado = novaList.filter(e => e.includes(filtro));
  SetAlunosFilter(resultado);

}

  function onEnter(event:any){
    if (event.key === `Enter`){
    salvar();
    
    }
  }
  function removerByindex(index:number){
    let novaList =[...alunos];
    novaList.splice(index,1)
    setAlunos(novaList);

  }






  return (
    <div className="App">
      <h1>{titulo}</h1>
      <h2>Presentes</h2>
      <h5>Alunos: {txtAluno}</h5>
      <input type="text"  onKeyDown= {onEnter} value={txtAluno} onChange={e => setTxtAluno(e.target.value)}></input>
      <button type="button" onClick={e => salvar()}>add</button>
     
      <br>
      </br>
      <h2>Buscar</h2>
      <input type="text"onChange={e => buscar(e.target.value)}></input>

      {
        alunosFilter.length > 0 ?
        alunosFilter.map((item, index) => {

          return (
            <div>
            <span key={index}>{index} - {item}</span>
            <button type="button" onClick={e => removerByindex(index)}>Remover</button>
           </div>
          )
        }
        )

        :

        alunos.map((item,index)=>{
          
          return(
           <div>
            <span key={index}>{index} - {item}</span>
            <button type="button" onClick={e => removerByindex(index)}>Remover</button>
           </div>
        )})}
     
    </div>
  );
}

export default App;
