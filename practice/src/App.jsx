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
//<ProductCard  name={product1.name} price={product1.price} isAvailable ={product1.isAvailable}/>
     // <ProductCard  name={product2.name} price={product2.price} isAvailable ={product2.isAvailable}/>
     
      const student1 ={
        pic : "./spidy.jpg",
      NAME : "SANTHOSH",
      Roll : "24VV5A0575",
      DOB : "01-01-2000",
      college : "JNTUGV",
      Address : "guntur,andhra pradesh"
     }
     const student2 ={
      pic : "./batman.jpg",
      NAME : "Kalyan",
      Roll : "24VV5A0567",
      DOB : "01-01-2000",
      college : "JNTUGV",
      Address : "pendurthi,andhra pradesh"
     }
      const student3 ={
      pic : "./ironman.jpg",
      NAME : "chandu",
      Roll : "24VV5A0569",
      DOB : "01-01-2000",
      college : "JNTUGV",
      Address : "kakinada,andhra pradesh"
     }
  return (
    <div className = "maincontainer" >
    <UserAvathar pic = {student1.pic} name = {student1.NAME} roll ={student1.Roll} dob ={student1.DOB} college={student1.college} Address={student1.Address}/>
     <UserAvathar pic = {student2.pic} name = {student2.NAME} roll ={student2.Roll} dob ={student2.DOB} college={student2.college} Address={student2.Address}/>
      <UserAvathar pic = {student3.pic} name = {student3.NAME} roll ={student3.Roll} dob ={student3.DOB} college={student3.college} Address={student3.Address}/>
    </div>
  )
}

export default App
