import { useEffect } from "react"
import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
  const[artistas, setArtistas] = useState([]);
  const[isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
  })
 
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
        {
          artistas.map(artista => (
            <div className="bg-rose-200 w-28 h-28 flex flex-col justify-around items-center">
            <div className="bg-rose-300 w-3/4 h-7"></div>
            <div className="bg-rose-300 w-3/4 h-7"></div>
          </div>
          )) 
        }

      

      </ConteudoPrincipal>
    </Container>
    </>

  )
}

export default App
