// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from "path"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    // checking for the secret
    if(req.query.secret !== process.env.SECRET){
        return res.status(401).json({message: `Invalid Token`})
    }

    const path = req.query.path as string

    try {
        

        await res.revalidate(path)
        // await res.revalidate(`/blog/${req.body.data.content.slug}`)

        return res.json({revalidated: true})

    } catch (error) {
        return res.status(500).send({
            error: 'Error'
        })
    }

}
