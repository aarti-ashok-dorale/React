import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";


export default function Comment(){ 
    let [comments, setComments] = useState([{
        username: "@ad",
        remarks: "great job",
        rating: 4,
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("added nwe comment");
    }

    return(
    <>
        <div>
            <h4>All Comments</h4>
            {comments.map((comment, idx) => (
            <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            &nbsp;
            <p>- {comment.username}</p>
            </div>
            ))}
            
        </div>
        <hr></hr>
         <CommentsForm addNewComment={addNewComment} /> 
    </>
    );
}



//addNewComment pass as a prop