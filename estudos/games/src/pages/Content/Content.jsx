import { useEffect, useState } from 'react';
import dataBase from '../../../public/json/games.json'
import React from 'react'
import style from './Content.module.css'

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
            <header>
                <img src={data?.poster} alt={data?.name} />
                <h2>{data?.name}</h2>
                <div>
                    <span>category: {data?.category}</span>
                    <span>release date: {data?.release_date}</span>
                </div>
                <p><strong>Description:</strong> {data?.description}</p>
            </header>

            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi optio eos adipisci ipsa earum corrupti amet, officiis possimus ex esse quo reiciendis animi. Doloremque eius odio omnis facilis recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo nam rerum veritatis tenetur mollitia repudiandae consequuntur neque eligendi iste debitis voluptatum, deleniti cumque quis ipsum. Suscipit amet blanditiis veritatis?</p>
            </main>
        </section>
    )
}

export default Content
