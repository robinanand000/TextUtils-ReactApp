import React from 'react'

export default function About(props) {
    let myStyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#212529':'white',
        // border:'1px solid',
        // borderColor:props.mode==='dark'?'white':'grey'
    }

  return (
    <>
    <div className="container my-3">
        <div className="list-group" style={{backgroundColor: props.mode==='dark'?' #282c30':'white',color: props.mode==='light'?'black':'white'}} >
            <a href="/" className="list-group-item list-group-item-action " style={myStyle} aria-current="true">The current link item</a>
            <a href="/" className="list-group-item list-group-item-action" style={myStyle}>A second link item</a>
            <a href="/" className="list-group-item list-group-item-action" style={myStyle}>A third link item</a>
            <a href="/" className="list-group-item list-group-item-action" style={myStyle}>A fourth link item</a>
            <a href='/' className="list-group-item list-group-item-action disabled" style={myStyle}>A disabled link item</a>
        </div>
    </div>
    </>
  )
}
