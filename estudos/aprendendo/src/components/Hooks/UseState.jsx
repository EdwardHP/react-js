import { useState } from 'react'
import studyStyle from '../studyStyle.module.css'

function UseState() {

    const [counter, setCounter] = useState(0); //Entre os parênteses é o valor da variável
    //Para acessar o valor da variável usa o counter e para mudar o valor dela usa a função setCounter
    //Um dos motivos para usar useState é que sempre que seu valor muda o react re-renderiza o componentes com as informações mais recentes

    let counterB = 0;

    return (
        <section className={studyStyle.paper}>
            <div className={studyStyle.exampleBox}>
                <h2 className={studyStyle.title2}>Contador com useState</h2>
                <span style={{ display: 'block', textAlign: 'center', fontSize: '3em', marginBottom: '10px' }} >{counter}</span>
                <button className={studyStyle.commomButton} onClick={() => setCounter(counter + 1)}>+</button>
                <h2 className={studyStyle.title2}>Contador sem useState</h2>
                <span style={{ display: 'block', textAlign: 'center', fontSize: '3em', marginBottom: '10px' }} >{counterB}</span>
                <button className={studyStyle.commomButton} onClick={() => counterB++}>+</button>
            </div>
        </section>
    )

}

export default UseState