import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('')
    // text = "new text"// wrong way to change state
    // setText("new text")//correct way to change state
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () => {
        console.log("lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }


    const handleclrClick = () => {
        console.log("clear text");
        let newText = "";
        setText(newText);
        props.showAlert("All text Erased","warning");
    }

    const handleCopy = () => {
        console.log("clear text");
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied to Clipboard","success");
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces deleted","success");
    }

    const handleOnChange =(event) =>{
        console.log("handle change")
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
           </div>
            <button className="btn btn-primary" onClick={handleUpClick} >convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclrClick} >Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra spaces</button>
        </div>
          <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
             <h1>Your Text summary</h1>
             <p>{text.split(" ").length} words and {text.length} characters</p>
             <p>{0.008*text.split(" ").length} minutes read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Enter Something in the text box above to preview"}</p>
         </div>

        </>
    )
}
