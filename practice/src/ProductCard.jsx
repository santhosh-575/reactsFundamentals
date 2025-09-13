function ProductCard({name,age,student}){
    
    return (

        <>
        Student name : {name}<br/>
        age : {age}<br/>
        {student ?"He is a student" : "he is not a student"}
        
        </>
    )
}
export default ProductCard