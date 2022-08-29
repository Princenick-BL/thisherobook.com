import React from 'react'
import Image from 'next/image';
import img from './amp-web-stories.png'

export default function WebStory() {
  return (
    <div style={{width:"20px",height:"40px",maxWidth:"25px",marginRight:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Image
            src={img}
            width={20}
            height={20}
            layout='fixed'
            style={{width:"14px",marginRight:"10px"}}
        />
    </div>
  )
}
