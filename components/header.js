import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';

export default function header() {
	return (
		<div className={styles.header}>
			<Link href='/'>
				<Image src='/favicon.ico' width={50} height={50} />
			</Link>
			<div className={styles.links}>
				<li>
					<Link href='/coffee'>
						<a>coffee</a>
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
