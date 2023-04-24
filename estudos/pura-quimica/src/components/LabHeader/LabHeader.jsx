import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import style from './LabHeader.module.css'

function LabHeader() {

    return (
        <header className={style.labHeader}>
            <section>
                <Link to='/' onClick={() => {
                    scrollTop = 0;
                }} ><AiFillHome /></Link>
                <h2>Pura Química</h2>
            </section>    
        </header>
    )
}

export default LabHeader
