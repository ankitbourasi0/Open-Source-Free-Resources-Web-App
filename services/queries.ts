import { gql } from "@apollo/client";

// query for fetching multiple blogs
export const BlogsQuery = gql`
  query Blogs {
    blogs {
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
