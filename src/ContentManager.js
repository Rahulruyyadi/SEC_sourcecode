import React from 'react'
import Content from './Content'
import './Articles.css'
import { useState } from 'react'
import Articles1 from './Articles1'

export default function ContentManager(props) {
    const Contentdetails=props.Contentdetails;
    const preview=props.preview;
    const hrefi=props.href;
    const [state1,useState1]=useState(true);
    var state2;
    const[state3,useState3]=useState(<></>)
    console.log("hello")
    console.log(state1)
    if(state1)
    {
        
        state2= Contentdetails.map((content) => (
            <Content key={content.id} id={content.id} h1={content.h1} p1={content.p1} imgUrl={content.imgUrl} useState1={useState1} useState3={useState3} preview={preview} hrefi={hrefi}/> 
          ))
         
    }
    else
    {
        
            
            state2=state3;
            console.log("hello2")
    }
  return (
    
            <div id ="wrapper"  className="wrapper">
                {state2}
     </div>
   
  )
}
