import { Link } from 'react-router-dom'
import style from './Outset.module.css'

function Outset() {

    return (
        <main className={style.outset}>
            <h1 className={style.presentationTitle}>Faça seus experimentos</h1>
            <section className={style.container}>
                <picture>
                    <source media="(max-width: 640px)" srcSet="./images/homePag/content1-s.png" className={style.imageS}/>
                    <img src="./images/homePag/content1-l.png" alt="líquido azul" />
                </picture>
                <article>
                    <h2>Sobre nós:</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, esse neque culpa fugit quod velit vero inventore asperiores, aspernatur illum non sit, quasi molestias id ipsum. Necessitatibus amet sint perspiciatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, sequi laboriosam nam ipsum odit voluptates consequatur repellat hic facere fuga!</p>
                    <Link to="/lab" onClick={() => scrollTop = 0} >Ir para o laboratório</Link>
                </article>
            </section>
        </main>
    )
}

export default Outset