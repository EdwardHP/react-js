import data from '../../../public/json/games.json'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import style from './GameList.module.css'

function GameList() {

    return (
        <section className={style.gameList}>
            {data.games.map((element) => {
                return <Link to={`/Content?id=${element.id}`} key={element.id} >
                    <Card poster={element.poster} name={element.name} description={element.description} />
                </Link>
            })}
        </section>
    )
}

export default GameList