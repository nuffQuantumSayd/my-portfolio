import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from "react-router-dom"

function App () {
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App