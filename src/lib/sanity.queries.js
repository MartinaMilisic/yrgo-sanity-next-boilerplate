import { groq } from 'next-sanity'
import { client } from './sanity.client'

/* Ooops, there is something missing in this snippet.
Please fix it to get it working. 
Maybe you'll also need to rename it, to better suite your case*/

export const getProducts = async () => {
	return await client.fetch(groq`*[]`)
}
