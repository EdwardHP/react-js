import GameList from '../../components/GameList/GameList'
import React from 'react'
import style from '../../App.css'

function Home() {
    return (
        <section style={{ backgroundColor: 'var(--color0)' }} >
            <GameList />
        </section>
    )
}

export default Home
