function Profile(){
        const name = "Santhosh"
        const age = 20
        let isStudent = true
    return (
         <>
        <br/>
        {isStudent ? "He is a student" : "he is not a student"}

        <h1>This is profile</h1>

        </>
    )
}
export default Profile