import Image from 'next/image'
import Link from 'next/link'

export default function coffeeDetail({ coffee }) {
	return (
		<div className='container'>
			<Link href='/coffee'>
				<Image src='/arrow-left.png' width={20} height={20} />
			</Link>
			<div className='coffee-wrapper'>
				<h1 className='coffee-title'>{coffee.title}</h1>
				<p className='coffee-desc'>{coffee.description}</p>
				<h3 className='coffee-ingredients'>Ingredients</h3>
				<ul>
					{coffee.ingredients.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</div>

			<style jsx>{`
				.coffee-desc {
					margin: 15px 0;
				}

				.coffee-ingredients {
					padding-bottom: 5px;
					margin-bottom: 10px;
					border-bottom: 1px solid #000;
				}

				ul {
					list-style-type: none;
				}
			`}</style>
		</div>
	)
}

export async function getServerSideProps(context) {
	const req = await fetch(
		`https://api.sampleapis.com/coffee/hot/${context.params.id}`
	)
	const res = await req.json()

	return {
		props: {
			coffee: res,
		},
	}
}
