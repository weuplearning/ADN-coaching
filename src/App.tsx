import { useState, useEffect } from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

// import data from './assets/coachsData.json'
import { Professor } from './interfaces/interface';

const App = () => {

    // containing the data of the fetch, which is the json file listing professors
    const [professors, setProfessors] = useState<Professor[]>([])

    // dev version below, to avoid CORS issue. Note that you have to go to the website url in order for it to works ;)
    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://amazon.koa.qualif.dev/media/microsites/amazon/react_coach/assets/coachsData.json')
        // fetch('https://amazon.koa.qualif.dev/media/microsites/amazon/react_coach/assets/coachsData.json')
        // fetch('/media/microsites/amazon/react_coach/assets/coachsData.json')
            .then(response => response.json())
            .then(datas => setProfessors(datas.professors))
    }, [])

    return (
        <div className="app">
            <div className="pageTitleSection">
                <h1 className='pageTitle'>Rencontrez l'un de nos coachs</h1>
            </div>
            <Section1 professors={professors} />
            <Section2 professors={professors} />
        </div>
    )
}

export default App