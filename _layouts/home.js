import Image from 'next/image'

export default function Home(props) {
    return (
        <div className='hero fullscreen bg-indigo-600'>
            <div className='hero-body u-center'>
                <div className='w-90' style={{ position: 'relative' }}>
                    <div className='row'>
                        <div className='col-6'>
                            <h2 className='title white'>Seja bem-vindo a Gruta do Jamal</h2>
                            <h5 className='subtitle text-gray-300'>
                                Aqui você encontra meus desabafos e alguns artigos sobre tecnologia
                            </h5>

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