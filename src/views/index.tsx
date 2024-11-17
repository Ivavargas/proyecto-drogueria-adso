import { Container,Row,Col,InputGroup,InputGroupText,Input } from "reactstrap"
import axios from "axios"
import { useState,useEffect } from "react"
import pokeTarjeta from "../components/pokeTarjeta"

const index  = () => {
    const [pokemones,setpokemones] =useState([]);
    const [offset,setOffset] =useState(0);
    const [limit,setLimit] =useState(20);

    useEffect(()=>{
      getPokemones(offset);
    },[]);

    const getPokemones=async(o)=>{
      const link = "https://pokeapi.co/api/v2/pokemon?limit="+limit+"&offset="+offset; 
      axios.get(link).then(async(response)=>{
        const respuesta=response.data;
        console.log(respuesta.result)

        });
    }


  return (
    <div>INDEX IVAN</div>
  )
}

export default index
