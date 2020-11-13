import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'
import 'cirrus-ui'

export default function PostLayout(props) {
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div class="row">
                <div class='col-11 offset-1'>
                    <article>
                        <h1>{props.title}</h1>
                        <div dangerouslySetInnerHTML={{__html:props.content}}/>
                    </article>
                </div>
            </div>
        </DefaultLayout>
    )
}
