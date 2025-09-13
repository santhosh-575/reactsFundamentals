import Profile from './Profile.jsx'
import ProductCard from './ProductCard.jsx'
function App() {
  const name = "Santhosh"
  const age = 20
  let isStudent = true

  return (
    <>
      <Profile/>
    <ProductCard name={name} age={age} student={isStudent}/>

    </>
  )
}

export default App
