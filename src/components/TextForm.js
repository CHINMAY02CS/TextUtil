import React, {useState} from 'react'



export default function TextForm(props) {
    
    const handleUpClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case",'success')
    }
    const handleLowClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case",'success')
    }
    const handleClearClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared",'success')
    }
    const handleCopyClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied",'success')
        
    }
    const handleOnChange = (event)=>
    {
        console.log("On change")
        setText(event.target.value)
    }

    const handleSpaceClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Spaces removed",'success')
     
    }
    
    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      
        <h5>{props.heading}</h5>
        <div className="mb-3">
          <textarea className="form-control" value={text} /*style={{backgroundColor:props.mode==='dark'?'lightgrey':'white'}}*/ onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>UPPER CASE</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>LOWER CASE</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>CLEAR</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>COPY TEXT</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleSpaceClick}>REMOVE SPACES</button>
     
    </div>
    <div className="container my-4 " style={{color:props.mode==='dark'?'white':'black'}}>
        <h5>YOUR TEXT SUMMARY</h5>
        <p> {text.split(" ").filter((event)=>{return event.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Minutes read</p>
        <h5>PREVIEW</h5>
        <p>{text.length>0?text:"Type something"}</p>
    </div>
    </>
  );
}
