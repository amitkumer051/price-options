
import './App.css'
import Chart from './components/Chart/Chart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
      <Phones></Phones>
    </>
  )
}

export default App
