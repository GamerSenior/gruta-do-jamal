import Head from 'next/head'
import Header from '@includes/header'

export default function DefaultLayout(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.description} />

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    |           <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge;" />

                /* Fonts */
                <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />

                /* Fonts Awesome */
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />
            </Head>

            <Header />
            <div className='bg-indigo-600' style={{width: '100vw', height: '100vh'}}>
                {props.children}                
            </div>
        </main>
    )
}
