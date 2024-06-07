import { gql } from 'graphql-request'

export const authorsQuery = gql`
  query GetAuthors {
    authors {
      name
      intro
      bio
      slug
      picture {
        url
      }
    }
  }
`

export const experiencesQuery = gql`
query GetExperiences {
  experiences {
    intro
    certificates {
      url
    }
    timelineseries{
      html      
      references {... on Asset {url}}
    }
    logo{url}
  }
}
`

const PROJECT_FRAGMENT = gql`
  fragment ProjectDetails on Project {
    name
    slug
    description
    tags
    demo
    sourceCode
    image {
      url
    }
    orderIndex
  }
`
const POST_FRAGMENT = gql`
  fragment PostDetails on Post {
    title
    slug
    date
    content
    tags
    coverImage {
      url
    }
    authors {
      name
    }
    orderIndex
  }
`

const EDUCATION_FRAGMENT = gql`
  fragment EducationDetails on Education {
    levelOfEducation
    academyname
    subHeading
    slug
    about{html}
    tags
    url
    coverImage {
      url
    }
    orderIndex
  }
`

export const educationsQuery = gql`
  ${EDUCATION_FRAGMENT}
  query GetEducations  {
    educations (orderBy: orderIndex_ASC) {
      ...EducationDetails
    }
  }
`

export const educationQuery = gql`
  ${EDUCATION_FRAGMENT}
  query GetEducation($slug: String!) {
    education(where: { slug: $slug }) {
      ...EducationDetails
    }
  }
`

export const projectsQuery = gql`
  ${PROJECT_FRAGMENT}
  query GetProjects {
    projects (orderBy: orderIndex_ASC) {
      ...ProjectDetails
    }
  }
`

export const projectQuery = gql`
  ${PROJECT_FRAGMENT}
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      ...ProjectDetails
    }
  }
`

export const postsQuery = gql`
  ${POST_FRAGMENT}
  query GetPosts {
    posts (orderBy: orderIndex_ASC){
      ...PostDetails
    }
  }
`

export const postQuery = gql`
  ${POST_FRAGMENT}
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      ...PostDetails
    }
  }
`

export const certificationsQuery = gql`
  query {
    certifications(where: {}) {
      certification_file {
        url
      }
      certificationName
      orgName
      content{html}
    }
  }
`;