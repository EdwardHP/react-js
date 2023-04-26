import React from 'react'
import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi'
import style from './FetchElements.module.css'
import SearchTab from '../../SearchTab/SearchTab';

function FetchElements(props) {

    const input = useRef(null);
    const elementsList = useRef(null);

    const fetchElementsByLetters = (event) => {
        event.preventDefault();

        const value1 = adjustValues(true, input.current.value);
        const value2 = adjustValues(false, input.current.value);

        input.current.value = '';
        elementsList.current.innerHTML = '';

        props.data.map((element) => {
            if (value1.includes(element.symbol) || value2.includes(element.symbol)) {
                const list = document.createElement('span');
                list.innerText = element.symbol;
                elementsList.current.appendChild(list);
            }
        });
    };

    const adjustValues = (parity, word) => {
        let wordValue = '';
        word = word.toLowerCase();
        if (parity)
            for (let index = 0; index < word.length; index++) {
                if (index % 2 == 0)
                    wordValue += word.charAt(index).toUpperCase();
                else
                    wordValue += word.charAt(index);
            }
        else
            for (let index = 0; index < word.length; index++) {
                if (index % 2 != 0)
                    wordValue += word.charAt(index).toUpperCase();
                else
                    wordValue += word.charAt(index);
            }

        return wordValue;
    };

    return (
        <section>
            <SearchTab reference={input} title='Busque por elementos de uma frase' placeholder='Digite o que quiser' onSubmit={fetchElementsByLetters} />
            <div className={style.elementsArea} >
                <h3>Resultados</h3>
                <div ref={elementsList}>

                </div>
            </div>
        </section>
    )
}

export default FetchElements
