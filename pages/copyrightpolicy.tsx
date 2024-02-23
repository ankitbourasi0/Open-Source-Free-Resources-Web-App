import WebImage from 'components/WebImage'
import React from 'react'

type Props = {}

const CopyrightPolicy = (props: Props) => {
    return (
        <div className='w-full max-w-5xl px-6   pt-20 space-y-3 texte-left  mx-auto h-full max-h-[90vh]'>
            <div className='w-full max-w-[300px]'>
                <WebImage src='/SAMOSAIMAGES/PNGS/2.png' alt='about-image' width={42} height={42} />

            </div>
            <p className='font-semibold text-lg '>Disclaimer</p>
            <div className='text-sm'>
                <p>
                    All parts of Samosabyte.tech are for Private use only & None of the files are hosted on our servers, They are indexed in a similar way to how Google works. The ISP and/or Administrator cannot be held responsible for the contents of any linked sites or any link contained in a Linked Site, or changes/updates to such sites.
                    <br/>  <br/>

                    We honor complaints sent through emails if we deem that enough proof has been provided or if we’re interested in getting the copyright holder’s take regarding the complaint. we will take the action in 2-5 days.
                    <br/>  <br/>
                    The posts/articles you read are considered for Educational and Non-Profit Purposes Only, and the owners and administrators cannot be liable for what a person decides to do with this knowledge.
                    <br/>  <br/>
                    If you want to send a DMCA take-down request then please report to the third party server with the infringing links/URLs using their Contact Us form.
                    Once again - No Copyright infringement files are hosted on our Server, they are Indexed in a similar way to how Google works.
                    <br/>  <br/>
                    


                </p>
                <p className='font-semibold p-2 bg-gray-200'>Contact us - samosabytesco@gmail.com</p>
            </div>
            <div className='my-6 rounded-lg bg-yellow-300 text-red-500 p-4 text-center'>
           <p className='my-2 font-bold text-xl text-zinc-800'>Disclaimer</p> 
Some content has been shared for Educational And Non-Profit Purpose ONLY
No Copyright Infringement Intended, All Rights Reserved to the Respected Actual Owner.
Hacksnation.com has no control over the shared content and nature of the external sites.
            </div>
        </div>
    )
}

export default CopyrightPolicy