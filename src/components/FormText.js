import React,{useState} from 'react'

export default function FormText(props) {
    const[text,setText]=useState('');
    
    const handleOnChnage=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared!","success")
    }
    const handleCopy=()=>{
        let text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!","success")

    }
    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Deleted spaces!","success")
    }
    return (
    <>    
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChnage} style={{backgroundColor: props.mode==='dark'?' #282c30':'white',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <hr/>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the box'}</p>
    </div>
    </>
  )
}
