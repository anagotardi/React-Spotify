

import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
    <Header/>
    <Container>
      <Sidebar>
        <CardSidebar/>
        <CardSidebar/>
        <CardSidebar/>
      </Sidebar>
      <ConteudoPrincipal/>
    </Container>
    </>

  )
}

export default App
