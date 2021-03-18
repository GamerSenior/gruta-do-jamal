import Image from 'next/image'

export default function Home(props) {
    return (
        <div className='hero fullscreen bg-dark'>
            <div className='hero-body u-center'>
                <div className='w-90' style={{ position: 'relative' }}>
                    <div className='row'>
                        <div className='col-6 u-flex u-flex-column u-align-center u-justify-center'>
                            <h2 className='title white'>Seja bem-vindo a minha gruta</h2>
                            <h6 className='subtitle text-gray-300'>
                                Tecnologia, desabafos, musicas e poemas.
                            </h6>
                            <h7 className='subtitle text-gray-300'>
                                Prossiga com cautela.
                            </h7>
                        </div>
                        <div className='col-6'>
                            <img src="/coding.jpg" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
