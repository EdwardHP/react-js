import { useState } from 'react'
import studyStyle from '../studyStyle.module.css'

function UseState() {

    const [counter, setCounter] = useState(0); //Entre os parênteses é o valor da variável
    //Para acessar o valor da variável usa o counter e para mudar o valor dela usa a função setCounter
    //Um dos motivos para usar useState é que sempre que seu valor muda o react re-renderiza o componentes com as informações mais recentes

    let counterB = 0;

    return (
        <section className={studyStyle.paper}>
            <h1 className={studyStyle.title1}>Contador com useState</h1>
            <h2 style={{ textAlign: 'center', fontSize: '3em', marginBottom: '10px' }} >{counter}</h2>
            <button className={studyStyle.comumButton} onClick={() => setCounter(counter+1)}>+</button>
            <h1 className={studyStyle.title1}>Contador sem useState</h1>
            <h2 style={{ textAlign: 'center', fontSize: '3em', marginBottom: '10px' }} >{counterB}</h2>
            <button className={studyStyle.comumButton} onClick={() => counterB++}>+</button>
        </section>
    )

}

export default UseState