import Head from "next/head"
import styles from '../../public/styles/coffee.module.scss'

export default function coffee({ coffeeList }) {
    console.log(coffeeList)
    return (
        <div className="container">
            <Head>
                <title>Coffee</title>
            </Head>

            <div className={styles.coffee}>
                {
                    coffeeList.map(coffee => {
                        return <a href={`/coffee/${coffee.id}`} key={coffee.id}>{coffee.title}</a>
                    })
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const req = await fetch('https://api.sampleapis.com/coffee/hot');
    const res = await req.json()

    return {
        props: {
            coffeeList: res
        }
    }
}
