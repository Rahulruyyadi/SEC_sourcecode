import React from 'react';
import './Podcast.css';

export default function Podcast() {
    return (
        <>

            <div className="embed-responsive embed-responsive-16by9 embedded">

                <div className='blur-box'>
                    {/* <h1 className="podcast-head">Hi Hello EveryOne Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestiae deleniti architecto, porro animi velit at ullam, fugit placeat enim minima! Illum fugiat incidunt laudantium, similique delectus numquam molestiae maxime? </h1> */}
                </div>
                <div className="embedded-div">
                    {/* <iframe  width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                   
                    <iframe className="embedded-video" width="560" height="315" src="https://www.youtube.com/embed/tCRjz1fyOE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>


        </>
    )
}
