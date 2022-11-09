import React, {useState} from 'react'

export default function TextForm(props) {
    const handleuppercase = () =>{
        
        let newTextuppercase = text.toUpperCase();
        settext(newTextuppercase)
    }
    const handlelowercase = () =>{
        
        let newTextlowercase = text.toLowerCase();
        settext(newTextlowercase)
        
    }

    const handlecountchar = () =>{
        
        let countchar = text.replace(/\s+/g,"");
        let newcountchar = countchar.length;
        let newcountwords = text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length;
       document.getElementById("char").innerHTML=("Total character and words in this textarea  =  " + newcountchar + " character " + newcountwords + " words" )
        
    }

    const handleCopyText = () =>{
       
      
       navigator.clipboard.writeText(text)
    }

    const handleSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
    }


    const handledelete = () =>{
        console.log("click on lowercase", + text);
        let delete_text = " ";
        settext(delete_text)
        
    }

    
    const handleonchange = (event) =>{
            console.log("onChange")
            settext(event.target.value)
    }

    

    
    

    const [text,settext]=useState();
    
    
    return (
        <>
        
        <div className={`container text-${props.mode ==="light"? "dark":"light"}`}>
            <form>
            
                <h1 className="text-center">{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"> TextArea</label>
                    <textarea className="form-control" placeholder='enter text' value={text} onChange={handleonchange} id="mybox" rows="8" style={{backgroundColor : props.mode ==="light"? "white":"gray", color : props.mode ==="light"? "black":"white" }}></textarea>
                    <button type="button" onClick={handleuppercase} className="btn btn-primary my-2 mx-2" >To convert Uppercase</button>
                    <button type="button" onClick={handlelowercase} className="btn btn-primary mx-2">To convert lowercase</button>
                    <button type="button" onClick={handleCopyText} className="btn btn-primary mx-2">Copy Text</button>
                    <button type="button" onClick={handleSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
                    <button type="button" onClick={handledelete} className="btn btn-primary mx-2 fas fa-trash"></button>
                             
                
                </div>
            </form>
            
        
        <div className="container my-3">
            <h1 className="my-3"> Your Text Summary</h1>
            <p id="char"> </p>
            <button type="button"onClick={handlecountchar} className="btn btn-primary mx-2">count chracters and words</button>
           
           <h1 className="my-3">Preview</h1>
            <p>
                <b>{text}</b>
            </p>
         </div>      
  </div>
  
           
        </>
    );
}

