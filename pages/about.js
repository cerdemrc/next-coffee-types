import Head from 'next/head'
import styles from '../public/styles/about.module.scss'

export default function about() {
	return (
		<div className='container'>
			<Head>
				<title>About</title>
			</Head>

			<div className={styles.about}>
				Developed by{' '}
				<a href='https://github.com/cerdemrc' target='_blank'>
					Ceren
				</a>{' '}
				with 🤎
			</div>
		</div>
	)
}
