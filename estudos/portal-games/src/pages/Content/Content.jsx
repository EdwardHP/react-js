import { useEffect, useState } from 'react'
import dataBase from '../../../public/json/games.json'
import React from 'react'
import style from './Content.module.css'
import GameHeader from '../../components/GameHeader/GameHeader'
import AboutGame from '../../components/AboutGame/AboutGame'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

function Content() {

    const [data, setData] = useState(null);

    //Acessa o id que está na url do site e referencia a const data ao elemento que tem o mesmo id da url
    useEffect(() => {
        const queryString = location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');

        setData(() => dataBase.games.find((element) => element.id == id));
    }, []);

    return (
        <section className={style.content} >
            <GameHeader data={data} />
            <AboutGame />

            <Link to='/' ><MdArrowBack /></Link>
        </section>
    )
}

export default Content
