import { getConfig, getAllPosts } from '@api'
import DefaultLayout from '@layouts/default'
import Link from 'next/link'

export default function Posts(props) {
    return (
        <DefaultLayout>
            <div className='px-4 text-light'>
                <div className='u-center'>
                    <h2>Postagens</h2>  
                </div>

                <div className='grid grid-gap-3 grid-cols-3 '>
                    {props.posts.map(function (post, idx) {
                        return (
                            <Link href={'/posts/' + post.slug} key={idx}>
                                <div className='card bg-gray-700' style={{ width: '350px', justifySelf: 'center' }}>
                                    <div className='card-container'>
                                        <div className='card-image' style={{backgroundImage: `url(${post.image})`}}></div>
                                        <div className='title-container'>
                                            <p className='title'>{post.title}</p>
                                        </div>
                                    </div>
                                    <div className='content text-light u-text-justify'>
                                        <p>{post.description}</p>
                                    </div>

                                </div>
                            </Link>
                        )
                    })}
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