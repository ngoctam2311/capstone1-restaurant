import React, { useState,useRef } from 'react'
import "./desrestaurant.css"
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser'

export default function Desrestaurant() {
  const editor = useRef(null)
  const [content,setContent] = useState('')
 
  console.log(HTMLReactParser(content))
  return (
    <div className="des-restaurant">
          <span className='title-des'> MÔ TẢ NHÀ HÀNG</span>
           <div className="text-editor">
             <JoditEditor 
             ref={editor} 
             value={content} 
             onChange={(newContent) => setContent(newContent)}/>
           </div>
    </div>
  )
}