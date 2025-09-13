import Profile from './Profile.jsx'
import ProductCard from './ProductCard.jsx'
import UserAvathar from './UserAvathar.jsx'
import './App.css'

function App() {
 // const name = "Santhosh"
  //const age = 20
 // let isStudent = true
 const product1={
    name : "bike",
    price : 20000,
    isAvailable : true
 }
  const product2={
    name : "car",
    price : 50000,
    isAvailable : false
 }
 
  return (
    <div className = "maincontainer" >

    <ProductCard  name={product1.name} price={product1.price} isAvailable ={product1.isAvailable}/>
      <ProductCard  name={product2.name} price={product2.price} isAvailable ={product2.isAvailable}/>
    </div>
  )
}

export default App
