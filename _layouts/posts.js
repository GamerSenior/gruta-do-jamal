import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import 'cirrus-ui'

export function imageStyle(image) {
    return {
        height: '400px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(to bottom, transparent, #5966d9), url(${image})`
    }
}

export default function PostLayout(props) {
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="row">
                <div className='col-12' style={imageStyle(props.image)}>
                </div>
                <div className='col-11 offset-1 py-2'>
                    <article className='white'>
                        <h1>{props.title}</h1>
                        <div dangerouslySetInnerHTML={{__html:props.content}}/>
                    </article>
                </div>
            </div>
        </DefaultLayout>
    )
}
