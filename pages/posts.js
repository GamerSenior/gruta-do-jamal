import { getConfig, getAllPosts } from '@api'
import DefaultLayout from '@layouts/default'
import Link from 'next/link'

export default function Posts(props) {
    const displayPosts = (posts) => {
        return props.posts.map(function (post, idx) {
            return (
                <Link href={'/posts/' + post.slug} key={idx}>
                    <div className='col-3 card bg-gray-700 p-0' >
                        <div className='card-container'>
                            <div className='card-image' style={{backgroundImage: `url(${post.image})`}}></div>
                            <div className='title-container'>
                                <h3 className='title'>{post.title}</h3>
                            </div>
                        </div>
                        <div className='content text-light u-text-justify'>
                            <p>{post.description}</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    return (
        <DefaultLayout>
            <div className='text-light' style={{width: '100%'}}>
                <div className='u-center'>
                    <h2>Postagens</h2>  
                </div>

                <div className='row u-justify-space-evenly'>
                    {displayPosts(props.posts)}
                </div>
            </div>
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