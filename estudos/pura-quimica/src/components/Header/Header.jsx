import style from './Header.module.css'

function Header() {

    return (
        <header>
            <h1 className={style.mainTitle}>PURA QUÍMICA</h1>
            <section className={style.background}></section>
        </header>
    )
}

export default Header