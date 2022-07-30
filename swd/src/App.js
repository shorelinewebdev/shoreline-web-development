import React from "react"
import Landing from "./components/landing";
import Menu from "./components/menu"

function App() {
  const [menuActive, setMenuActive] = React.useState(false)

  function toggleMenu(){
    setMenuActive(prevState => !prevState)
  }

    return(
        <div className="font-main">
          {menuActive ? <Menu toggle ={toggleMenu} /> : <Landing  toggle ={toggleMenu}/>}
          
        </div>
    )
}

export default App;
