import React, { useEffect, useState } from 'react'

export default function Main() {
    const[data,setData]=useState({});

    const getPokemenData=async ()=>{
        const responce=await fetch("https://pokeapi.co/api/v2/pokemon/")
        const jsonData=await responce.json();
        console.log(jsonData)
        setData(jsonData);
    }

    useEffect(()=>{
        getPokemenData();
    })
  return (
    <div>
        <h1>Pokeman Names</h1>
        {data.results.map((item)=><li>{item.name}</li>)}
    </div>
  )
}
