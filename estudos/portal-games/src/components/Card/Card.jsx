import style from './Card.module.css'

function Card(props) {

    return(
        <section className={style.card} >
            <img src={props.poster} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </section>
    )
}

export default Card