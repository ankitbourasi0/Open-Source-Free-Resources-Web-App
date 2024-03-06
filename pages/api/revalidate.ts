// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from "path"
//http://localhost:3000/api/revalidate?path=/&secret=h9qujql20j9oplpvt7kg7mvu77gxjnkr

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    // checking for the secret
    if(req.query.secret !== process.env.SECRET){
        return res.status(401).json({message: `Invalid Token`})
    }

    const path = req.query.path as string
    const  path2 = req.body.data.content.slug as string 
    try {
        

        await res.revalidate(path)
        await res.revalidate(`/blog/${path2}`)

        return res.json({revalidated: true})

    } catch (error) {
        return res.status(500).send({
            error: 'Error'
        })
    }

}
