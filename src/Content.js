import React from 'react'
import './Articles.css'
import Articles1 from './Articles1'
import { useState } from 'react'
import './Content.css'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
export default function Content(props) {
    const [show, setShow] = useState(true)



    const handleclick1 = () => {
        setShow(!show);
        console.log(show);
        if (show) {


            props.useState1(false);
            console.log(props.id)
            props.useState3(<Articles1 id={props.id} useState1={props.useState1} />); //we are changing the state of the parent component here and passing it to the parent component
        }

    }
    let preview1;
    if (props.preview == 1) {
        preview1 =
            <>
                <div id={props.id} className="card"><img src={props.imgUrl} />
                    <div className="info">
                        <h1>{props.h1}</h1>
                        <p>{props.p1}</p>
                        <button onClick={handleclick1}>Read More</button>

                    </div>
                </div>
            </>
    }
    if (props.preview == 2) {
        preview1 =
            <> <div id={props.id} className="card-preview2">
                <img src={props.imgUrl} />
                <div className="info">
                    <h2>{props.h1}</h2>
                    <p>{props.p1}</p>
                    <div className='icon-styles'>
                    <a className="icon" href={props.hrefi} rel=' noreferer' target="_blank"><FaEnvelope /></a>
                    <a className="icon" href={props.hrefi} rel='noreferer' target="_blank"><FaGithub /></a>
                    <a className="icon"  href={props.hrefi} rel='noreferer' target="_blank"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            </>
    }
    return (
        <>

            {preview1}

        </>


    )
}
