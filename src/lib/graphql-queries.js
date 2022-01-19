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
    timeline {
      html
    }
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
    coverImage {
      url
    }
  }
`

export const educationsQuery = gql`
  ${EDUCATION_FRAGMENT}
  query GetEducations {
    educations {
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
    projects {
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
    posts {
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