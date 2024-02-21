type Blog = {
    id: string;
    description: string;
    publishedAt: string;
    slug: string;
    title: string;
    thumbnail:{
        url: string;
    }
    content: {
        html: string
    }
    categories:Category[],
    contentType:{
        contentName:string
    }
   
}



type Category = {
    name: string
}

type ContainerProps = {
    children: React.ReactNode
    meta: MetaTags
    maxWidth: string
}

type MetaTags = {
    title: string;
    description?:string;
    image?:string;
    date?:string
}