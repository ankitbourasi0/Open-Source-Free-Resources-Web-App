import { gql } from "@apollo/client";

// query for fetching multiple blogs
export const BlogsQuery = gql`
  query Blogs {
    #change this number cuz it 10 by default and change to 100 get all but try to pagination and or load spinner for optimation
    blogs(first:100,orderBy: publishedAt_DESC) {
      description
      id
      publishedAt
      slug
      title
      thumbnail {
        url(transformation: { image: { resize: { width: 1366, height: 768 } } })
      }
      content {
        html
      }
      categories(first: 2) {
        name
      }
      contentType {
      contentName
    }
    }
  }
`;

// query for fetching single and specific blog
export const BlogQuery = gql`
  query Blog($blogSlug: String!) {
    blog(where: { slug: $blogSlug }) {
      description
      id
      publishedAt
      slug
      title
      thumbnail {
        url(transformation: { image: { resize: { width: 1366, height: 768 } } })
      }
      content {
        html
      }
      categories(first: 2) {
        name
      }
    }
  }
`;

// export const ContentTypeQuery = gql`
//   query Assets {
//     contentTypesConnection {
//       edges {
//         node {
//           contentName
//           blogs {
//             createdAt
//           }
//         }
//       }
//     }
//   }
// `;
