import { useState,useEffect } from "react";

//works despite error

function Meme() {

  const [meme,setMeme]=useState({top:"",bot:"",img:"https:\/\/i.imgflip.com\/30b1gx.jpg"})
  const [allMemes,setallMemes]=useState([])

  useEffect(()=> {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res=>res.json())
      .then(x=>setallMemes(x.data.memes))
  }, [])

  function getMemeImg() {
    const x=Math.floor(Math.random()*allMemes.length);
    const url=allMemes[x].url
    setMeme(prevMeme => ({
      ...prevMeme,
      img: url
    }))
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMeme(x=>{
      const {name,value}=event.target
      return {
        ...x,
        [name]: value
      }
    })
  }  

  return (
  <main>
    <div className="form">
      <input 
        className="form--input"
        type="text" 
        placeholder="Input top text"
        name="top"
        onChange={handleChange}
        value={meme.top}
      />
      <input 
        className="form--input"
        type="text" 
        placeholder="Input bottom text"
        name="bot"
        onChange={handleChange}
        value={meme.bot}
      />
      <button className="form--button" onClick={getMemeImg}>Get a new meme image</button>      
    </div>
    <div className="meme">
      <img className="meme--img" src={meme.img} />
      <h2 className="meme--text top">{meme.top}</h2>
      <h2 className="meme--text bottom">{meme.bot}</h2>
    </div>
  </main>
  )
}

export default Meme;