import Header from '../../components/Header/Header.jsx'
import Outset from '../../components/Outset/Outset.jsx'
import style from './Home.module.css'

function Center() {

    return (
        <section className={style.center}>
            <Header />
            <Outset />
        </section>
    )
}

export default Center