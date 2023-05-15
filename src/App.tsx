import { useState } from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

import data from './assets/coachsData.json'
import { Professor } from './interfaces/interface';

function App() {

    const professors: Professor[] = data.professors

    return (
        <div className="app">
            <div className="pageTitleSection">
                <h1 className='pageTitle'>Rencontrez l'un de nos coachs</h1>
            </div>
            <Section1 professors={professors}/>
            <Section2 professors={professors}/>
        </div>
    )
}

export default App