import {useState} from "react";

function init(){
    console.log("init was executed");
    return Math.random();
}
export default function Counter(){
    let [count, setCount] = useState(init);    //initialization 
    console.log("component was re-rendered");
    
    //re-render on screen
    //new state value depend on old state value
    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
       
    
        // new state value - arbitary values
        //  setCount(25); 
    };
    
return(
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </div>
);
}

