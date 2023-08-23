import React,{ useState } from 'react'
import axios from "axios"

function movieSearch() {
  const [movieName, setmovieName] = useState("");
  const [movie,setMovie] = useState([])

  let imgpath = "https://image.tmdb.org/t/p/original" 

   function handleSubmit(e) {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=4e4f229a5c2b2349a39231b5d3a4dba1 `)
    .then((res)=>{
      setMovie(res.data.results)
      console.log(res.data.results[0])
      // setmovieName("")
    })
   
  }
  return (
    <>
      <form onSubmit={handleSubmit}>

      <input type="text" placeholder='enter move name' value={movieName} onChange={(e)=>{
        setmovieName(e.target.value)
      }} />
        <button type='submit'>search</button>
      </form>
    <div>
      {movie.map((val, index)=>{
       return(
        <img src={imgpath + movie[index].poster_path} alt="hum" />
       )
      })}
    </div>

    </>
  )
}

export default movieSearch