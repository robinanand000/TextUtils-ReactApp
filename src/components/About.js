import React,{useState} from 'react'

export default function About() {

    const [myStyle,setMyStyle]= useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const [btnText,setbtnText]= useState("Enable Dark Mode")

    const toggleMode=()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setbtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white',
            })
            setbtnText("Enable Dark Mode")
        }
    }

  return (
    <>
    <div className="container my-3" style={myStyle}>
        <div className="list-group" style={myStyle} >
            <a href="/" className="list-group-item list-group-item-action " style={myStyle} aria-current="true">The current link item</a>
            <a href="/" className="list-group-item list-group-item-action" style={myStyle}>A second link item</a>
            <a href="/" className="list-group-item list-group-item-action" style={myStyle}>A third link item</a>
            <a href="/" className="list-group-item list-group-item-action" style={myStyle}>A fourth link item</a>
            <a href='/' className="list-group-item list-group-item-action disabled" style={myStyle}>A disabled link item</a>
        </div>
        <button type="button" onClick={toggleMode} className="btn btn-primary my-4">{btnText}</button>
    </div>
    </>
  )
}
