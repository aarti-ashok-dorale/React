function handleClick(event){
    console.log("Button was clicked!");
    console.log(event);
}

function handleMouseOver(){
    console.log("BYE!!!");
}

function handleDblClick(){
    console.log("you double clicked!");
}

export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>
                 This parah is for event. Lorem ipsum dolor
                 sit ametconsectetur adipisicing elit. Maxime impedit recusandae voluptatibus
                 inventore laboriosam eius iste ea deleniti dolorum, esse, rerum quidem sapiente
                 dolor molestias molestiae explicabo, temporibus non. Qui.
            </p>
            <button onDoubleClick={handleDblClick}>Double Clik Me</button>
        </div>
    );
}


