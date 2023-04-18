import React from 'react'
import './ShoeCard.css'

function ShoeCard(props) {
    return (
        <section className='shoeCard'>
            <img src={props.shoeImage} alt="Tênis" />
            <div className='shoeInfo'>
                <h2>{props.shoeName}</h2>
                <span className='oldPrice'>U$ {props.oldPrice}</span>
                <span className='currentPrice'>U$ {props.currentPrice}</span>
            </div>
        </section>
    )
}

export default ShoeCard