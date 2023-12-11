import React from 'react'
import './Cards.css'
import CustomModal from './CustomModal'

export default function Cards(props) {

  return (
    <>
     
        <div id={props.id} className="main-card shadow-lg ">
          <div className="image-bar">
            <img className="image" src={props.image} alt="image" />
          </div>
          <div className="custom-btn text-center">
            <CustomModal pdfUrl={props.pdfUrl} />
          </div>
        </div>
      
    </>
  );
}

