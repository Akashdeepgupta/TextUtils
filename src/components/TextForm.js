import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('')
    // text = "new text"// wrong way to change state
    // setText("new text")//correct way to change state
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleclrClick = () => {
        console.log("clear text");
        let newText = "";
        setText(newText);
    }

    const handleCopy = () => {
        console.log("clear text");
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange =(event) =>{
        console.log("handle change")
        setText(event.target.value);
    }
    return (
        <>
          <div className="container"> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclrClick} >Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra spaces</button>         </div>
         <div className="container my-3">
             <h1>Your Text summary</h1>
             <p>{text.split(" ").length} words and {text.length} characters</p>
             <p>{0.008*text.split(" ").length} minutes read</p>
             <h2>Preview</h2>
             <p>{text}</p>
         </div>

        </>
    )
}
