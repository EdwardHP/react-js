import style from './Element.module.css'

function Element(props) {

    return (
        <section className={style.element}>
            <h2>{props.name}-{props.symbol}</h2>
            <div className={style.mainDescriptions}>
                <span>Standard state: {props.state}</span>
                <span>Atomic number: {props.number}</span>
                <span>Atomic mass: {props.mass}</span>
                <span>Atomic radius: {props.radius}</span>
                <span>Year discovered: {props.discovered}</span>
                <span>Density: {props.density}</span>
                <span>Group block: {props.groupBlock}</span>
            </div>
        </section>
    )
}

export default Element