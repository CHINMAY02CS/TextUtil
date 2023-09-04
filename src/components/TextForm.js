import React, {useState} from 'react'



export default function TextForm(props) {
    
    const handleUpClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        let newText = "";
        setText(newText)
    }
    const handleCopyClick = ()=>
    {
        // console.log("Uppercase was clicked"+text)
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        
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
     
    }
    
    const [text,setText] = useState('');
  return (
    <>
    <div className='container'>
      
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Clear extra spaces</button>
     
    </div>
    <div className="container my-2" >
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
