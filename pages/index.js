import DefaultLayout from '@layouts/default'
import Home from '@layouts/home'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'
import 'cirrus-ui'

export default function Blog(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <Home />    
            {/* 
            <div class='grid-c-9 grid-r-6'>
                <p>Lista de posts:</p>
                <ul>
                    {props.posts.map(function (post, idx) {
                        return (
                            <li key={idx}>
                                <Link href={'/posts/' + post.slug}>
                                    <a>{post.title}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            */}

        </DefaultLayout>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}
