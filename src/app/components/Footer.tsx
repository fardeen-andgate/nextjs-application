import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent">
        <div className="container p-12 flex justify-between">
        <Image src={require("../../../public/assets/pictures/Default_a_rounded_neon_blue_logo_like_leonardoai_logo_futurist_1_ca6bb4a5-bd1e-4b5f-9955-3be7641e5a84_0.png")} alt="fardeen" width={50} height={50}/>
        <p className="text-slate-600">All rights reserved to Fardeen</p>
        </div>
        </footer>
  )
}

export default Footer