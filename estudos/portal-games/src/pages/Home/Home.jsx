import GameList from '../../components/GameList/GameList'
import React from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'

function Home() {
    return (
        <section style={{ backgroundColor: 'var(--color0)' }} >
            <MainHeader />
            <GameList />
        </section>
    )
}

export default Home
