import Profile from './Profile.jsx'
import ProductCard from './ProductCard.jsx'
import UserAvathar from './UserAvathar.jsx'
import BlogPost from './BlogPost.jsx'
import ButtonClick from './ButtonClick'
import {useState} from 'react'
import './App.css'

function App() {
  // const name = "Santhosh"
  //const age = 20
  // let isStudent = true
  const product = [{
    name: "bike",
    price: 20000,
    isAvailable: true
  },
  {
    name: "car",
    price: 50000,
    isAvailable: false
  },
  {
    name: "iphone",
    price: 1000000,
    isAvailable: true
  },
  {
    name: "BMW",
    price: 2000000,
    isAvailable: false
  }
    /*
        <ProductCard  name={product[0].name} price={product[0].price} isAvailable ={product[0].isAvailable}/>
        <ProductCard  name={product[1].name} price={product[1].price} isAvailable ={product[1].isAvailable}/>
        <ProductCard  name={product[2].name} price={product[2].price} isAvailable ={product[2].isAvailable}/> 
        <ProductCard  name={product[3].name} price={product[3].price} isAvailable ={product[3].isAvailable}/> 
    
   {


        product.map((products) => (
          <ProductCard  
          name={products.name} 
          price={products.price} 
          isAvailable ={products.isAvailable}/> 
        )
        )
      }
  
      */
]
  /* 
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

    <UserAvathar pic = {student1.pic} name = {student1.NAME} roll ={student1.Roll} dob ={student1.DOB} college={student1.college} Address={student1.Address}/>
   <UserAvathar pic = {student2.pic} name = {student2.NAME} roll ={student2.Roll} dob ={student2.DOB} college={student2.college} Address={student2.Address}/>
    <UserAvathar pic = {student3.pic} name = {student3.NAME} roll ={student3.Roll} dob ={student3.DOB} college={student3.college} Address={student3.Address}/>
    */
// const blogPost = [
//   {
//     id:1,
//     Author : "kalyan",
//     title : "Free Fire",
//     Description :"kelega free fire"
//   },
//   {
//     id:2,
//     Author : "kalyan",
//     title : "mini craft",
//     Description :"building blocks"
//   },
//   {
//     id:3,
//     Author : "kalyan",
//     title : "subwaysurfers",
//     Description :"he is bot"
//   },
//   {
//     id:4,
//     Author : "kalyan",
//     title : "bgmi",
//     Description :"he is bot"
//   }
// ]
 const [count,setCount]=useState(0)
   const [email,setemail]=useState("")
  const [password,setPassword]=useState("")
  const [formData,setformData]=useState(
    {
    email:"",
    password:""
    }
  )
 const click =()=>{
        alert("button clicked")
        console.log("happy birthday")
 }
 const style1 = {
    border:"2px solid black"  ,
    borderRadius : "5px",
    margin : "20px",
    padding : "10px",
    color : "blue"
    }
  const handleChange=(event) =>{
    // console.log(event.target.name),
    // console.log(event.target.value)
    setformData({
      ...formData,
      [event.target.name] : event.target.value
    })
    
  }
    const handleEmail = (event) =>{
    setemail(event.target.value)
  }
   const handlePassword = (event) =>{
     setPassword(event.target.value)
  }
  const handleSubmit=(event) =>{
    event.preventDefault();
    alert(`Email : ${email} \n password : ${password}  \n you are logged in`)
    
    
  }
 
  const handleIncrement=() =>{
    setCount((prevCount) => prevCount+1)
  }
  const handleDecrement=() =>{
    setCount((prevCount) => prevCount-1)
  }
 







  return (
    <div className="maincontainer" >
      {/* {
        blogPost.map((vars)=>(
          <BlogPost 
          key ={vars.id}
          author={vars.Author} 
          title={vars.title} 
          description ={vars.Description} /> 
        )
        )
      } */}
      
        <div>
             <p>this is a button </p>
            <button style ={style1} onClick ={click}>Click me</button><br></br>
            <form onSubmit ={handleSubmit}>
            <input type="text" placeholder='enter a name' name = 'myname' onClick={handleChange}></input><br></br><br></br>
            <input type="text" placeholder='enter a mail' name = 'email' onChange={handleEmail}></input><br></br><br></br>
            <input type="password" placeholder='enter a passward' name = 'passward' onChange={handlePassword}></input><br></br><br></br>
            <button >submit</button>
            </form> 
             {/* <p>{count}</p>
            <button style ={style1} onClick={handleIncrement}> increment</button>
            <button style ={style1} onClick={handleDecrement}> decrement</button>  */}
        </div>







    </div>
  )

}

export default App
