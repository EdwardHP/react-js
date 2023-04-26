import { useState, useEffect, useRef } from 'react'
import React from 'react'
import FetchElements from './FetchElements/FetchElements'
import Element from '../Element/Element'
import style from './PeriodicTable.module.css'
import SearchTab from '../SearchTab/SearchTab'

function PeriodicTable() {

    const [data, setData] = useState(null);
    const [tableElement, setTableElement] = useState(null);

    const input = useRef(null);
    const elementArea = useRef(null);

    const fetchElement = (event) => {
        event.preventDefault();
        if (data == null) return;
        const value = capatalize(input.current.value);
        input.current.value = '';
        data.map((element) => {
            if (value == element.name || value == element.symbol) {
                setTableElement(<Element name={element.name} symbol={element.symbol} state={element.standardState} number={element.atomicNumber} mass={element.atomicMass} radius={element.atomicRadius} discovered={element.yearDiscovered} density={element.density} groupBlock={element.groupBlock} />);
                return;
            }
        });
    }

    const capatalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    useEffect(() => {
        fetch('https://neelpatel05.pythonanywhere.com/')
            .then(response => response.json())
            .then(data => {
                setData(data);

                setTableElement(<Element name={data[0].name} symbol={data[0].symbol} state={data[0].standardState} number={data[0].atomicNumber} mass={data[0].atomicMass} radius={data[0].atomicRadius} discovered={data[0].yearDiscovered} density={data[0].density} groupBlock={data[0].groupBlock} />);
            });
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

                <SearchTab reference={input} title='Busque por elementos da tabela periódica' placeholder='Digite o que quiser' onSubmit={fetchElement} />

                <div className={style.elementArea} ref={elementArea} >
                    {tableElement}
                </div>

                <FetchElements data={data} />

            </main>
        </section>
    )
}

export default PeriodicTable
