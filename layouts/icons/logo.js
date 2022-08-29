import React from 'react'
import Logo from '../../components/Logo'

export default function LogoIcon() {
  return (
    <div style={{
        width:"40px",
        height:"40px",
        marginLeft:"-12px",
        marginRight : "5px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius : "40px",
        color:"var(--color-secondary-light)",
        fontWeight : "bold",
    }}>
        <Logo single={true} style={{fontSize:"2rem"}}/>
    </div>
  )
}
