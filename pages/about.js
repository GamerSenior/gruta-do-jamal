import DefaultLayout from "@layouts/default";

export default function About(props) {
    return (
        <DefaultLayout>
            <div className='w-90 white' style={{ position: 'relative', 'margin-top': '52px', width: '100%'}}>
                <div className='row u-justify-space-evenly' >
                    <div className='col-4'>
                        <img src='/eu.jpg' className="u-center" style={{ 'border-radius': '20px', height: '800px', width: '400px', objectFit: 'none'}}></img>
                    </div>
                    <div className='col-4' style={{'textAlign': 'justify'}}>
                        <h2>Sobre mim</h2>
                        <p>
                            Meu nome é Giovani Garcia, uma pessoa extremamente calma 
                            e sorridente, sou comunicativo, autodidata e escrevo 
                            musicas e poesias nas horas vagas. 
                        </p>
                        <p>
                            Trabalhei na <b>Support - Sistemas de Gestão</b>
                            como <b>Desenvolvedor Fullstack</b> por 3 anos,  
                            atuando ativamente na migração de um monolito
                            escrito em COBOL para uma aplicação SPA, utilizando 
                            uma stack composta por <b>VueJS</b> como framework 
                            Frontend e o <b>Java (Spring/Hibernate)</b> no Backend,
                            também dando manutenção em bancos de dados Oracle e PostgreSQL.
                        </p>
                        <p>
                            Atualmente trabalho na <b>Prevision</b> também com o <b>Desenvolvedor Fullstack</b> porém 
                            agora com o framework Ruby on Rails no backend.
                        </p>
                        <p>
                            Procuro a todo momento me manter atualizado, atualmente 
                            consigo programar nas seguintes linguagens:
                        </p>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>C</li>
                            <li>Lua</li>
                            <li>Python</li>
                            <li>GoLang</li>
                            <li>Rust</li>
                        </ul>
                        <p>Algumas com menos proficiência que outras...</p>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
