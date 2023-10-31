import React from 'react'
import Navlink from './navlink'
import { link } from 'fs'

interface overLay {
    links:any
}

const MenuOverlay: React.FC<overLay> = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>{links.map((link: { path: string; title: string } , index: any)=>
      (<li key={index}><Navlink href={link.path} title={link.title} /></li> ))}
    </ul>
  )
}

export default MenuOverlay