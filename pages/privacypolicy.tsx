import WebImage from 'components/WebImage'
import Link from 'next/link';
import React from 'react'

type Props = {}

const PrivacyPolicy = (props: Props) => {
    const data = [{
        heading: "What personal information do we collect from the people that visit our blog, website?",
        description: "We do not collect personal information from visitors to our site. They can browse without providing any sensitive data."
    },
    {
        heading: "What Information do we collect from the Users?",
        description: "Your Mail Address and device IP address"
    },
    {
        heading: "When do we collect information?",
        description: "We collect information from you and when you enter information on our site."
    }, {
        heading: "How do we use your information?",
        description: "We may use the information we collect from you when you register/sign up, write a comment, surf the website, or use certain other site features to provide the information you are interested in."
    },
    {
        heading: "How do we protect your information?",
        description: "We only provide articles and information. We never ask for credit card numbers.\nWe use regular Malware Scanning.\nWe use SSL Encryption."
    },
    {
        heading: "Do we use ‘cookies?",
        description: "Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.\nWe use cookies to:\nKeep track of advertisements. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser’s Help Menu to learn the correct way to modify your cookies. If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. It won’t affect the user’s experience that makes your site experience more efficient and may not function properly. "
    },
    {
        heading: "Third-party disclosure",
        description: "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information."
    },
    {
        heading: "Third-party links",
        description: "Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.\n Does our site allow third-party behavioral tracking?    \nIt’s also important to note that we do not allow third-party behavioral tracking.\nIf at any time you would like to unsubscribe from receiving future emails, you can email us at \n• Follow the instructions at the bottom of each email.    "
    },
    {
        heading: "Some More Info -",
        description: "You will be notified of any Privacy Policy Changes \nOn our Privacy Policy Page\nCan change your personal information:\nYes, we can"
    }, {
        heading: "Contact Us",
        description: "If there are any questions regarding this privacy policy, you may contact us using the information below."

    }];
    return (
        <div className='w-full max-w-4xl px-6 mb-16  pt-20 space-y-3 texte-left  mx-auto h-full '>
            <div className='w-full max-w-[300px]'>
                <WebImage src='/SAMOSAIMAGES/PNGS/2.png' alt='about-image' width={42} height={42} />

            </div>
            <h1 className='font-semibold text-xl'>Privacy Policy</h1>

            <div className='text-sm'>
                <p>Our website address is: <Link href={"/"}>https://www.samosabyte.tech/</Link> <br /> <br />

                    We respect your privacy and permit you to control the treatment of your personal information. A complete statement of our current privacy policy can be found on our website. Our privacy policy is expressly incorporated into this Agreement by this reference.</p>
                {data.map(e => <div className='my-6'>
                    <h3 className='font-bold text-lg mb-1'>{e.heading}</h3>
                    <p className='mb-1 text-gray-600'>{e.description}</p>
                </div>)}


                <p className='font-semibold p-2 bg-gray-200'>Email: samosabytesco@gmail.com</p>
            </div>
           
        </div>
    )
}

export default PrivacyPolicy
