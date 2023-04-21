import style from './Element.module.css'

function Element(props) {

    return (
        <section className={style.element}>
            <h2>Hydrogen-H</h2>
            <div className={style.mainDescriptions}>
                <span>Standard state: gas</span>
                <span>Atomic number: 1</span>
                <span>Atomic mass: 1.00794(4)</span>
                <span>Atomic radius: 37</span>
                <span>Year discovered: 1766</span>
                <span>Density: 8.99e-05</span>
                <span>Group block: nonmetal</span>
            </div>
        </section>
    )
}

export default Element