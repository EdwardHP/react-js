import React from 'react'
import style from './GameHeader.module.css'

function GameHeader(props) {
    return (
        <header className={style.gameHeader} >
            <img src={props.data?.poster} alt={props.data?.name} />
            <h2>{props.data?.name}</h2>
            <div>
                <span>category: {props.data?.category}</span>
                <span>release date: {props.data?.release_date}</span>
            </div>
            <p><strong>Description:</strong> {props.data?.description}</p>
        </header>
    )
}

export default GameHeader
