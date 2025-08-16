import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username cannot be empty!';
   }
 
   return errors;
 };

export default function CommentsForm({addNewComment}){
    // let[formData, setFormData] = useState({
    //     username:"",
    //     remarks: "",
    //     rating: 5,
    // });
    // let [isValid, SetIsValid] = useState(true);

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return{...currData, [ event.target.name]:  event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
        //validation from scratch
        // if(!formData.username){
        //     console.log("username is null");
        //     SetIsValid(false);
        //     event.preventDefault();
        //     return;
        // }

    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     //like refresh function on browser
    //     setFormData({
    //     username:"",
    //     remarks: "",
    //     rating: 5,
    //     })
    // }
    return(
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username"></label>
            <input placeholder="username" type="text" 
             value={formik.values.username}
             onChange={formik.handleChange}
             id="username"
             name="username"/>
             {/* {!isValid && <p style={{color: "red"}}>Username cannot be empty</p>} */}
              {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null}
            <br /><br />
            
            <label htmlFor="remarks"></label>
            <textarea value={formik.values.remarks}
             placeholder="add few remarks" 
             onChange={formik.handleChange}
             id="remarks"
             name="remarks"
             >Remarks</textarea>
            <br /><br />

            <label htmlFor="rating"></label>
            <input placeholder="rating" 
            type="number" 
            min={1} 
            max={5} 
            value={formik.values.rating}
            onChange={formik.handleChange}
            id="rating"
            name="rating"
            />
            <br /><br />

            <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

