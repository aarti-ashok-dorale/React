
import {useState} from "react";

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value)
    // };
    //  let handleUserName = (event) => {
    //     setUserName(event.target.value)
    // };

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData, [ event.target.name]:  event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password:"",
        });
    };

    return(
        <form onSubmit = {handleSubmit}> 
            <label htmlFor="fullname">Full Name</label>  
            <input placeholder="enter user name" 
            type="text" 
            value={formData.fullName}  
            id="fullname"
            name="fullName"
            onChange={handleInputChange}/>
            <br /><br />


             <label htmlFor="username">User Name</label>
            <input placeholder="enter Username" 
            type="text" 
            value={formData.userName} 
            id="username"
            name="userName"
            onChange={handleInputChange} />
            <br /><br />

            <label htmlFor="password">Password</label>
            <input placeholder="enter password" 
            type="password" 
            value={formData.password} 
            id="password"
            name="password"
            onChange={handleInputChange} />
            <br /><br />
            <button>Submit</button>
        </form>
    );
}

//name attribute should be match to the state variable object   fullName: "", 
//value in this input is same as state variable
// onChange={handleNameChange} //event in input