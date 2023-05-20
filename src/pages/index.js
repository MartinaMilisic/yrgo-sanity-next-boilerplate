import Head from 'next/head'

export default function Home({ products }) {
	/* Use the products data to show all your products */

	return (
		<>
			<Head>
				<title>YRGO Next.js/Sanity Boilerplate</title>
			</Head>

			<main
				className={`flex min-h-screen flex-col items-center justify-center p-24`}
			>
				<h1 className="text-4xl font-bold text-center">
					YRGO Next.js/Sanity Boilerplate
				</h1>
			</main>
		</>
	)
}

export async function getStaticProps() {
	/* Look for the getProducts function in src/lib/sanity.queries.js 
  and add the last piece to the function to get it working.
  Then uncomment the code below, and add the products to your props */

	//const products = await getProducts();

	return {
		props: {
			products: { title: 'Dummy product' }
		}
	}
}
