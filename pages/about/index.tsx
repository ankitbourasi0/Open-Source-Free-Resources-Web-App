import WebImage from 'components/WebImage'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='w-full max-w-3xl px-6  text-center pt-20 flex flex-col space-y-3 items-center mx-auto h-full max-h-[90vh]'>
      <div className='w-full max-w-[300px]'>
        <WebImage src='/SAMOSAIMAGES/PNGS/1.png' alt='about-image' width={42} height={42} />

      </div>
      <p className='font-semibold text-lg'>We are a small passionate team. of Samosa bytes</p>
      <div className=''>

        <p>Samosa Bytes is a community where Everyone can Learn, Discuss, Help, and share knowledge. Cybersecurity, Tutorials, Ethical Hacking, Guides, Software, Useful Methods | Community Forum</p>

      </div>
      <div className='max-w-xl w-full mx-auto flex space-x-4 justify-center'>
        <p className='text-blue-800 hover:text-blue-600 focus-within:text-blue-900'><Link href="/privacypolicy">Privacy Policy</Link></p>
        <p className='text-blue-800 hover:text-blue-600 focus-within:text-blue-900'><Link href="/copyrightpolicy">Copyright Policy</Link></p>
      </div>
    
    </div>
  )
}

export default AboutUs