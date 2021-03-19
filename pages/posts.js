import { getConfig, getAllPosts } from '@api'
import DefaultLayout from '@layouts/default'
import Link from 'next/link'

export default function Posts(props) {
    const displayPosts = (posts) => {
        return props.posts.map(function (post, idx) {
            return (
                <div style={{ width: '350px', justifySelf: 'center' }}>
                    <Link href={'/posts/' + post.slug} key={idx}>
                        <div className='card bg-gray-700'>
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
                </div>
            )
        })
    }
    return (
        <DefaultLayout>
            <div className='px-4 text-light'>
                <div className='u-center'>
                    <h2>Postagens</h2>  
                </div>

                <div className='grid grid-gap-3 grid-cols-3 u-none-xs'>
                    {displayPosts(props.posts)}
                </div>
                <div className='u-flex-xs u-flex-column u-items-center u-justify-center' style={{width: "100%"}}>
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