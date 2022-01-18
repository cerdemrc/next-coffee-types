import Link from 'next/link';
import styles from './header.module.scss';
import { Box } from '@chakra-ui/react';

export default function header() {
	return (
		<div className={styles.header}>
			<Box
				as='a'
				href='/'
				bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
				bgClip='text'
				fontSize={{ base: 'md', md: '2xl' }}
				wordBreak='break-word'
				fontWeight='extrabold'>
				Types of Coffee
			</Box>
			<div className={styles.links}>
				<li>
					<Link href='/coffee'>
						<a>coffees</a>
					</Link>
				</li>
				<li>
					{' '}
					<Link href='/benefit'>
						<a>benefits</a>
					</Link>
				</li>
				<li>
					{' '}
					<Link href='/about'>
						<a>about</a>
					</Link>
				</li>
			</div>
		</div>
	);
}
