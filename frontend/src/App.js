import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import ListaDatos from './components/ListaDatos';
import ListaArchivos from './components/ListaArchivos';

let initialData=[]
let initialList=[]
let initialName=""
let initialNameList=[]

const App = () => {

  const [data, setData] = useState(initialData);
  const [list, setList] = useState(initialList);
  const [name, setName]= useState(initialName)
  const [nameList, setNameList]= useState(initialNameList)

  let i=0;
  let options={
    headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
            },
    timeout: 10000,
    withCredentials: false,
    mode: "cors"
  }


  let callData = async (fileName) => 
    {
      try{
        let arr = await axios.get(`http://localhost:5000/files/data?fileName=${fileName}`,options)
        
        setData(arr.data)
        if(nameList.length===0){
          let names = arr.data.map((el)=> el.file)
          setNameList(names)
        }
        
      }
      
      catch(e){
        console.log('cant approach resource: ',e)
        setData([false,e])
      }
     
    }

  let callList = async () => 
    {
      try{
        let arr = await axios.get('http://localhost:5000/files/list',options)
        
        setList(arr.data)
      }
      
      catch(e){
        console.log('cant approach resource: ',e)
        setList([false,e])
      }
     
    }
  
  let handleChange= (e) => {
    setName(e.target.value)
  }
  

//Los datos cargan despues de que se monta el componente, apenas carga la pagina

  useEffect(() => {
    callData("")
    callList()
  }, [])

//Este useEffect permite filtrar por queryparams los datos de los archivos que existen

  useEffect(()=>{
    callData(name)
  },[name])


   return (
    <> 
      <ListaDatos data={data} i={i} name={name} handleChange={handleChange} nameList={nameList}/>
      <ListaArchivos list={list}/>
    </>
  
)};

export default App;
