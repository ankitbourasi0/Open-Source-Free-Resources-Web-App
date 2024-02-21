import graphqlFetcher from "./ApolloClient";
import * as queries from './queries'

export class Services{
    constructor(){}

    async queryBlogs(): Promise<Blog[]>{
        const data = await graphqlFetcher(queries.BlogsQuery)

        const blogs: Blog[] = data.blogs;

        return blogs
    }

    async queryBlog(slug: string): Promise<Blog>{
        const data = await graphqlFetcher(queries.BlogQuery, {
            blogSlug: slug
        })

        const blog: Blog = data.blog;

        return blog
    }
    // async queryContentType(){
    //     const data = await graphqlFetcher(queries.ContentTypeQuery);
    //     const contentTypes:ContentType[] = data.contentTypesConnection.edges.node
    //     console.log("\n \n content::: \n\ \n nnnn "+ data["contentTypesConnection"]["edges"])
    //     return contentTypes
    // }

}

// instance of [Services]
const services = new Services()

export default services;