function Hello(){
    let name = "Ranajit Sahoo1"
    let fullname = () =>{
        return name;
    }
    let age = 27;
    return <h3>
        Hello, This is something we have added. I am {fullname()} and my age is {age}
    </h3>
}
export default Hello;