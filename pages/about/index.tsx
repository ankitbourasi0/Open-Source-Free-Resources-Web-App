import WebImage from 'components/WebImage'
import React from 'react'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='w-full max-w-3xl  text-center pt-20 flex flex-col space-y-3 items-center mx-auto h-full max-h-[90vh]'>
        <div className='w-full max-w-[300px]'>
        <WebImage src='/SAMOSAIMAGES/PNGS/1.png' alt='about-image' width={42} height={42}/>

        </div>
        <p className='text-bold text-lg'>We are a small passionate team. of Samosa bytes</p>
        <div className=''>

        <p>Samosa Bytes is a community where Everyone can Learn, Discuss, Help, and share knowledge. Cybersecurity, Tutorials, Ethical Hacking, Guides, Software, Useful Methods | Community Forum</p>

        </div>
        <p>
        Copyright © 2024 Samosabytes. All rights reserved.
        </p>
    </div>
  )
}

export default AboutUs