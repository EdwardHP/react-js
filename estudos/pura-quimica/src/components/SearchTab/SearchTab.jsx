import { FiSearch } from 'react-icons/fi'
import style from './SearchTab.module.css'

function SearchTab(props) {
    return (
        <section className={style.search}>
            <h2>{props.title}</h2>
            <form className={style.searchContainer} onSubmit={props.onSubmit} >
                <input type="search" id={style.searchElements} placeholder={props.placeholder} autoComplete='off' ref={props.reference} />
                <button><FiSearch /></button>
            </form>
        </section>
    )
}

export default SearchTab