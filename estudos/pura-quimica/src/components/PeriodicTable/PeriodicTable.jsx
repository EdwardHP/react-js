import { useState, useEffect, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import Element from '../Element/Element'
import style from './PeriodicTable.module.css'

function PeriodicTable() {

    const [data, setData] = useState(null);
    const input = useRef(null);
    const elementArea = useRef(null);

    const fetchElement = (event) => {
        event.preventDefault();
        if (data == null || input.current.value.length < 2) return;
        const value = capatalize(input.current.value);
        data.map((element) => {
            if (value == element.name) {
                console.log('achou');
                return;
            }
        });
    }

    const capatalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    useEffect(() => {
        fetch('https://neelpatel05.pythonanywhere.com/')
        .then(response => response.json())
        .then(setData);
    }, []);

    return (
        <section className={style.periodicTable}>
            <main>
                <div className={style.container}>
                    <img src="./images/tool1/periodicTable.png" alt="Tabela Periódica" />
                    <article>
                        <h2>Tabela Periódica</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut eius voluptas et, rem corrupti. Sed nam, sint nemo itaque, inventore aperiam cum laborum, autem doloribus repellat cupiditate earum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo modi praesentium! Recusandae magni ex voluptate reiciendis, repudiandae, enim, mollitia esse quasi doloribus perspiciatis molestias ut delectus libero dignissimos quos!</p>
                    </article>  
                </div>
                <section className={style.search}>
                    <h2>Busque por elementos da tabela periódica</h2>
                    <form className={style.searchContainer} onSubmit={fetchElement}>
                        <input type="search" id={style.searchElements} placeholder='Busque por um elemento' ref={input} />
                        <button><FiSearch /></button>
                    </form>
                    <div className={style.elementArea} ref={elementArea} >
                        <Element />
                    </div>
                </section>
            </main>
        </section>
    )
}

export default PeriodicTable
