import DefaultLayout from '@layouts/default'
import Home from '@layouts/home'
import 'cirrus-ui'

export default function Blog(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <Home />
        </DefaultLayout>
    )
}
