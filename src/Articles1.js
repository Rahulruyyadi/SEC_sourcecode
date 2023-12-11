import React from 'react'
import './Articles1.css'
import { useState } from 'react'
const Articles1 = [{ id: "1", h1: "Type h1 here", p1: "Type p1 here" },
{id:"2",h1:"Type h1 here",p1:"Type p1 here"}
]

export default function (props) {
    var particle;
    const handleState2 = () => {
        props.useState1(true);
       
    }
    Articles1.map((article) => {
        if (article.id === props.id) {
            console.log("hello")
            particle = <div className='articles-slider'>
                <div className='articles-slider__card'>
                    <h1>{article.h1}</h1>
                    <p>{article.p1}</p>
                    <button onClick={handleState2}>Close</button>
                </div>
            </div>

        }
    })
   
    return (
        <>
            {
                particle
            }
        </>
    )
}
