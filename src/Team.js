import React from 'react'
import './Team.css'
import ContentManager from './ContentManager'
import { useState } from 'react';


export default function Team() {
   const [year,setYear]=useState("2024");
    const handleChange=(event)=>{
      setYear(event.target.value);
    }
   var years=[];
   years.push(<option value="2023">2023</option>)
   years.push(<option value="2024">2024</option>)
   if(year==="2023")
   {
    var Teamdetails = [
      { id: '1', h1: 'Pavan Kumar Dubasi', p1: 'President', imgUrl: "https://res.cloudinary.com/di1jyuoqd/image/upload/v1683484927/PAVAN_mhzfjd.jpg",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
      { id: '2', h1: 'Joshi Korada', p1: 'Vice-President', imgUrl: "https://res.cloudinary.com/di1jyuoqd/image/upload/v1683492512/joshi_vrgcww.jpg",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"}},
    
    ]
    var Teamdetails2 = [
      { id:'3',h1:'Sipun Mohanty',p1:'Treasurer',imgUrl:"https://res.cloudinary.com/di1jyuoqd/image/upload/v1683484803/sipun_yqfhif.png",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"}},
      { id: '5', h1: 'Sasida N', p1: 'Secretary', imgUrl: "https://res.cloudinary.com/di1jyuoqd/image/upload/v1683484927/sasida_vpac3j.jpg",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
      { id: '6', h1: 'Sneha Das', p1: ' Event coordinator', imgUrl: "https://res.cloudinary.com/di1jyuoqd/image/upload/v1683484929/SNEHA_sgigcb.jpg",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
      { id: '7', h1: 'Bandana Yadav', p1: 'Activity coordinator', imgUrl: "https://res.cloudinary.com/di1jyuoqd/image/upload/v1683484904/bandana_1_ksea4w.jpg",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"}},
    
    ]
    var Teamdetails3 = [
      { id: '9', h1: 'Anurag Sahay', p1: 'Professor-Incharge', imgUrl: "https://res.cloudinary.com/di1jyuoqd/image/upload/v1683484899/anurag_ljbnx8.jpg",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} }
    ]
   }
   else if(year==="2024")
   {
    var Teamdetails = [
      { id: '1', h1: 'Tanushri', p1: 'President', imgUrl: "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
      { id: '2', h1: 'Virkam Patil', p1: 'Vice-President', imgUrl: "https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
    
    ]
    var Teamdetails2 = [
      { id:'3',h1: 'Hemanth Naidu', p1: 'Treasurer', imgUrl: 'https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxh',href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"}},
      { id: '5', h1: 'project k', p1: 'Secretary', imgUrl: "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
      { id: '6', h1: 'Preety Rani', p1: ' Event coordinator', imgUrl: "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
      { id: '7', h1: 'Bandana Yadav', p1: 'Activity coordinator', imgUrl: "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"} },
    
    ]
    var Teamdetails3 = [
      { id: '9', h1: 'Anurag Sahay', p1: 'Professor-Incharge',  imgUrl: "https://res.cloudinary.com/di1jyuoqd/image/upload/v1683484899/anurag_ljbnx8.jpg",href:{facebook:"https://www.facebook.com/pavan.dubasi.5",instagram:"https://www.instagram.com/pavan_dubasi/",twitter:"https://twitter.com/PavanDubasi?s=09"}}
    ]
   }
  return (
    <>

      <div className='Team'>
        <div className='Team-des'>
          <br>
          </br>
          <h1>Our Team Year <select value={year} onChange={handleChange} >{years}</select></h1>
          <br>
          </br>
         
            <h6>

              Science and Environment is a highly interdisciplinary field that thrives well with the perfect amalgamation
              of individuals possessing knowledge of various domains. We believe that great work stems from
              the will to grow as a team and the passion to create something that leaves a mark.
              We are driven by our mindset to stand out and inspire while staying on our feet to be
              <br>
              </br>
              open to learn.
              Our team comprises students across all departments of NIT Patna who work and collaborate to bring innovative thoughts to life.

            </h6>
          
        </div>
        <br>
        </br>
        <br>
        </br>
        <ContentManager Contentdetails={Teamdetails3} preview={2} />
        <ContentManager Contentdetails={Teamdetails} preview={2} />
        <ContentManager Contentdetails={Teamdetails2} preview={2} />
      </div>

    </>
  )
}
