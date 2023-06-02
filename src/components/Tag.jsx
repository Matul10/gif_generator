import React ,{ useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  const[tag,settag]=useState('');
  const[gif,setgif]=useState('');
  const[load,setload]=useState(false);
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchdata(){

    setload(true);
    const {data} = await axios.get(url);
    const imgsrc= data.data.images.downsized_large.url;
    setgif(imgsrc);
    setload(false);

  }

  
  useEffect(()=>{
    fetchdata();
  },[])

  function genHandler(){
    fetchdata();
  } 

  return (
    <div className="w-1/2 mx-auto bg-blue-500 h-[550px] mt-[30px] rounded-md border border-black flex flex-col items-center" >
      <h1 className="py-5 font-bold text-2xl  underline underline-offset-2" >RANDOM  GIF</h1>


      {
        load?(<Spinner/>):(<img src={gif} alt=""  className="w-1/2 h-[300px] mb-8"/>)
      }
      <input className="w-11/12 mb-8 py-3" placeholder="enter the tag" onChange={(e)=> settag(e.target.value)} />
      <button className="w-11/12 bg-white/70 py-2 font-bold text-2xl rounded-lg " onClick={genHandler} >Generate</button>
    </div>
  );
}
