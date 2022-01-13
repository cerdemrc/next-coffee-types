import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='homepage'>
				<Image src='/coffeetypes.jpg' width={500} height={500} />
			</div>

			<style jsc>{`
        .homepage{
          text-align: center;
        }
      `}</style>
		</div>
	);
}
