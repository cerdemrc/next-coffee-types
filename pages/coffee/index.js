import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import styles from '../../public/styles/coffee.module.scss';

export default function coffee({ coffeeList }) {
	return (
		<div className='container'>
			<Head>
				<title>Coffee</title>
			</Head>

			<Flex
				justify='center'
				align='center'
				direction='column'
				className={styles.coffee}>
				{coffeeList.map((coffee) => {
					if (coffee.title) {
						return (
							<Box as='a' href={`/coffee/${coffee.id}`} key={coffee.id}>
								{coffee.title}
							</Box>
						);
					}
				})}
			</Flex>
		</div>
	);
}

export async function getStaticProps() {
	const req = await fetch('https://api.sampleapis.com/coffee/hot');
	const res = await req.json();

	return {
		props: {
			coffeeList: res,
		},
	};
}
