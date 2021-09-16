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
        // console.log("copy text");
        // let newText = document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
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
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
           </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >convert to uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleclrClick} >Clear text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remove Extra spaces</button>
        </div>
          <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
             <h1>Your Text summary</h1>
             <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
             <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Nothing to preview"}</p>
         </div>

        </>
    )
}
