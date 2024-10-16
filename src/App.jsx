import { useEffect, useState } from "react"
import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import artista from "../server/Models/Artista"

function App() {
  const[artistas, setArtistas] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizou a requisição'))
  },[])
 
  return (
    <>
    <Header/>
    <Container>
      <Sidebar>
        <CardSidebar/>
        <CardSidebar/>
        <CardSidebar/>
      </Sidebar>
      <ConteudoPrincipal> 
        <>
        <h1>Pop</h1>
       {
        artistas
        .filter( artista => artista.genero === "Pop")
        .map(artista => (
          <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
          <h1>{artista.name}</h1>
          </div>
        ))
       }
        </>

        <>
        <h1>Jazz</h1>
       {
        artistas
        .filter( artista => artista.genero === "Jazz")
        .map(artista => (
          <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
          <h1>{artista.name}</h1>
          </div>
        ))
       }
        </>

        <>
        <h1>Rap</h1>
       {
        artistas
        .filter( artista => artista.genero === "Rap")
        .map(artista => (
          <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
          <h1>{artista.name}</h1>
          </div>
        ))
       }
        </>
      

      </ConteudoPrincipal>
    </Container>
    </>

  )
}

export default App
