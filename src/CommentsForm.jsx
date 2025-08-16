import { useState } from "react";

export default function CommentsForm(){
    let[formData, setFormData] = useState({
        username:"",
        remarks: "",
        rating: 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData, [ event.target.name]:  event.target.value};
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        //like refresh functipon on browser
        setFormData({
        username:"",
        remarks: "",
        rating: 5,
        })
    }
    return(
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input placeholder="username" type="text" 
             value={formData.username}
             onChange={handleInputChange}
             id="username"
             name="username"/>
            <br /><br />
            
            <label htmlFor="remarks"></label>
            <textarea value={formData.remarks}
             placeholder="add few remarks" 
             onChange={handleInputChange} 
             id="remarks"
             name="remarks"
             >Remarks</textarea>
            <br /><br />

            <label htmlFor="rating"></label>
            <input placeholder="rating" 
            type="number" 
            min={1} 
            max={5} 
            value={formData.rating} 
            onChange={handleInputChange} 
            id="rating"
            name="rating"
            />
            <br /><br />

            <button>Add Comment</button>
            </form>
        </div>
    );
}