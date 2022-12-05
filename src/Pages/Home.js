import React from 'react'

import Header from '../components/Header'
import AllCards from '../components/AllCards'
import Description from '../components/Description'


const Home = () => {
    return (
        <main>
            <Header />
            <Description />
            <AllCards />
        </main>
    )
}

export default Home