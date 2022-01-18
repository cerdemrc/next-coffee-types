import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';

export default function about() {
	return (
		<div className='container'>
			<Head>
				<title>About</title>
			</Head>

			<Flex justify='center' align='center'>
				Developed by
				<Box
					as='a'
					href='https://github.com/cerdemrc'
					target='_blank'
					color='rgb(102, 78, 78)'
					fontWeight='bold'>
					&nbsp;Ceren&nbsp;
				</Box>
				with 🧡
			</Flex>
		</div>
	);
}
