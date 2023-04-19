import { useState, useEffect, useRef } from 'react'
import studyStyle from '../studyStyle.module.css'

function UseEffect() {
    //É importante ter em mente que quando um dado é atualizado na página tem se uma releitura do código ou seja, se eu simplemente criar uma variável comum (ex: var numero = 2) essa variável vai ser re-renderizada e vai voltar para o seu valor original
    //O useEffect é para controlar o que eu quero que seja re-renderizado, uma api por exemplo não deve ser colocada fora de um useEffect para não ficar se re-renderizando sempre

    //Para exemplo
    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(0);
    const p1 = useRef(null);
    const p2 = useRef(null);
    const p3 = useRef(null);
    if (p1.current != null) {
        p1.current.style.display = 'none';
        p2.current.style.display = 'none';
        p3.current.style.display = 'none';
    }

    //Tipos de useEffect


    useEffect(() => {
        console.log('Vou aparecer sempre que renderizar');
        p1.current.style.display = 'block';
    });

    useEffect(() => {
        console.log('Só apareço quando a página é renderizada');
        p2.current.style.display = 'block';
    }, []);

    useEffect(() => {
        console.log('Apenas quando a variável count ser renderizada que eu apareço');
        p3.current.style.display = 'block';
    }, [count]);

    return (
        <section className={studyStyle.paper}>
            <h1 className={studyStyle.title1} >Entendendo useEffect</h1>
            <article className={studyStyle.commomArticle} >
                <h2 style={{ marginBottom: '10px' }}>Sobre:</h2>
                <p>
                    É importante ter em mente que quando um dado é atualizado na página tem se uma releitura do código ou seja, se eu simplemente criar uma variável comum (ex: var numero = 2) no escopo da função do componente essa variável vai ser re-renderizada e vai voltar para o seu valor original.
                </p>
                <p>
                    Ao usar o useEffect você pode delimitar o que vai ser re-renderizado, uma API por exemplo não tem a necessecidade de ser re-renderizada varias vezes só por causa de um click em um botão.
                </p>
            </article>

            <div className={studyStyle.exampleBox} style={{ marginBottom: '0px' }}>
                <h2 style={{ marginBottom: '10px' }} >Exemplo:</h2>
                <p>Nesse exemplo usamos 3 useEffect:
                    <ul style={{ marginLeft: '18px' }} >
                        <li style={{ padding: '5px', backgroundColor: '#ff8b1f', borderRadius: '6px', maxWidth: '350px', margin: '10px 0px', color: 'white', fontWeight: 'bold', boxShadow: '2px 2px 3px #00000045'}} >
                            p1: sem segundo pârametro;
                        </li>
                        <li style={{ padding: '5px', backgroundColor: '#df02fc', borderRadius: '6px', maxWidth: '350px', marginBottom: '10px', color: 'white', fontWeight: 'bold', boxShadow: '2px 2px 3px #00000045'}}>
                            p2: com segundo pârametro vázio;
                        </li>
                        <li style={{ padding: '5px', backgroundColor: '#fc0262', borderRadius: '6px', maxWidth: '350px', marginBottom: '10px', color: 'white', fontWeight: 'bold', boxShadow: '2px 2px 3px #00000045'}}>
                            p3: segundo pârametro com a variável count.
                        </li>
                    </ul>
                </p>

                <h2 className={studyStyle.title2}>Com a variável count</h2>
                <span style={{ display: 'block', textAlign: 'center', fontSize: '3em', marginBottom: '10px' }} >{count}</span>
                <button className={studyStyle.commomButton} onClick={() => setCount(count + 1)}>interagir</button>
                <h2 className={studyStyle.title2}>Sem a variável count</h2>
                <span style={{ display: 'block', textAlign: 'center', fontSize: '3em', marginBottom: '10px' }} >{countB}</span>
                <button className={studyStyle.commomButton} onClick={() => setCountB(countB + 1)}>interagir</button>
                <div>
                    <h3 style={{ marginBottom: '10px' }}>Resultados:</h3>
                    <p style={{ display: 'none', padding: '5px', backgroundColor: '#ff8b1f', borderRadius: '6px', maxWidth: '150px', textAlign: 'center', marginBottom: '10px', color: 'white', fontWeight: 'bold', boxShadow: '2px 2px 3px #00000045'}} ref={p1}>
                        p1: renderizado
                    </p>
                    <p style={{ display: 'none', padding: '5px', backgroundColor: '#df02fc', borderRadius: '6px', maxWidth: '150px', textAlign: 'center', marginBottom: '10px', color: 'white', fontWeight: 'bold', boxShadow: '2px 2px 3px #00000045'}} ref={p2}>
                        p2: renderizado
                    </p>
                    <p style={{ display: 'none', padding: '5px', backgroundColor: '#fc0262', borderRadius: '6px', maxWidth: '150px', textAlign: 'center', marginBottom: '10px', color: 'white', fontWeight: 'bold', boxShadow: '2px 2px 3px #00000045'}} ref={p3}>
                        p3: renderizado
                    </p>
                </div>
            </div>
        </section>
    )

}

export default UseEffect