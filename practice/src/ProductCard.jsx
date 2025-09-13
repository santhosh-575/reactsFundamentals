import './ProductCard.css'
function ProductCard(variables){
    const color = variables.isAvailable ? "green" : "red";
    const price = {
    color: "rgb(5, 138, 247)",
    fontSize : "18px"
    }
    return (

        <div className = "container">
        <h2 className = "pname"> Product name : {variables.name}</h2><br/>
        <p style = {price}>Price : {variables.price}</p><br/>
       <p style = {{color}}> {variables.isAvailable ?  "AVAILABLE" : " OUT OF STOCK"} </p>
        
        </div>
    )
}
export default ProductCard