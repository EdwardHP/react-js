import { Link } from 'react-router-dom'
import style from './Outset.module.css'

function Outset() {

    return (
        <main className={style.Outset}>
            <h1 className={style.presentationTitle}>Faça seus experimentos</h1>
            <section className={style.container}>
                <picture>
                    <source media="(max-width: 640px)" srcSet="./images/homePag/content1-s.png" />
                    <img src="./images/homePag/content1-l.png" alt="líquido azul" />
                </picture>
                <article>
                    <h2>Sobre nós:</h2>
                    <p>Aqui você faz todos os seus experimentos químicos com segurança, com mais de 50 anos colaborando para as melhores experiências dos nossos usuários, somos especialista em tonar sua experiência química inesquecível. Contamos com várias ferramentas para acelerar seus experimentos e garantir sua segurança.</p>
                    <Link to="/lab" >Ir para o laboratório</Link>
                </article>
            </section>
        </main>
    )
}

export default Outset