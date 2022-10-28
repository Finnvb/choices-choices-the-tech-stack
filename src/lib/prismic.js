import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'ilojobarfvb'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: '',
})