import React from 'react'
import './Articles.css'
import Articles1 from './Articles1'
import Content from './Content'
import { useState } from 'react'
import ContentManager from './ContentManager'

var Contentdetails = [
    {id:'1',h1:'Content 1',p1:'Content 1',imgUrl:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {id:'2',h1:'Content 2',p1:'Content 2',imgUrl:"https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {id:'3',h1:'Content 3',p1:'Content 3',imgUrl:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {id:'4',h1:'Content 4',p1:'Content 4',imgUrl:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {id:'5',h1:'Content 5',p1:'Content 5',imgUrl:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {id:'6',h1:'Content 6',p1:'Content 6',imgUrl:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {id:'7',h1:'Content 7',p1:'Content 7',imgUrl:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {id:'8',h1:'Content 8',p1:'Content 8',imgUrl:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
]
export default function Articles() {


    return (
        <>
        <div className='articles'>
          <ContentManager Contentdetails={Contentdetails} preview={1}/>
          </div>
        </>
    )
}
