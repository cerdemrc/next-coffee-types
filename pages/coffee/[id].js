import Image from 'next/image';
import Link from 'next/link';
import { Text, Flex } from '@chakra-ui/react';

export default function coffeeDetail({ coffee }) {
	return (
		<div className='container'>
			<div className='coffee-wrapper'>
				<Flex justify='flex-start' align='center'>
					<Link href='/coffee'>
						<Image src='/arrow-left.png' width={20} height={20} />
					</Link>
					<Text marginLeft='1rem' fontSize='2xl'>
						{coffee.title}
					</Text>
				</Flex>
				<Text marginY='1rem'>{coffee.description}</Text>
				<Text
					marginBottom='10px'
					paddingBottom='5px'
					borderBottom='1px solid'
					fontWeight='bold'>
					Ingredients
				</Text>
				<ul>
					{coffee.ingredients.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</div>

			<style jsx>{`
				ul {
					list-style-type: none;
				}
			`}</style>
		</div>
	);
}

export async function getServerSideProps(context) {
	const req = await fetch(
		`https://api.sampleapis.com/coffee/hot/${context.params.id}`
	);
	const res = await req.json();

	return {
		props: {
			coffee: res,
		},
	};
}
