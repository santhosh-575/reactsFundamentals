import './UserAvathar.css'

function UserAvathar(student){
    return (
        <div className = " container">
          <div className = " picture" > <img src = {student.pic} ></img> </div>
            <p className = " p1" >NAME : {student.name}</p>
            <p>Roll.NO : {student.roll}</p>
            <p>DOB :{student.dob}</p>
            <p>college : {student.college}</p>
            <p>Address :{student.Address}</p>
        </div>
    )
}
export default UserAvathar
