import { useState, useEffect, useRef } from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

// import data from './assets/coachsData.json'
import { Professor } from './interfaces/interface'

const App = () => {
    // containing the data of the fetch, which is the json file listing professors
    const [professors, setProfessors] = useState<Professor[]>([])

    // dev version is using local assets, prod is using the url link
    useEffect(() => {
        fetch(`${window.location.origin}/media/microsites/amazon/react_coach/assets/coachsData.json`)
        // fetch('src/assets/coachsData.json')
            .then(response => response.json())
            .then(datas => setProfessors(datas.professors))
    }, [])

    // to get the selected category and share it across child components
    const [selectedCategoryFromSection1, setSelectedCategoryFromSection1] = useState('')
    const handleCategoryChangeFromSection1 = (category: string) => {
        setSelectedCategoryFromSection1(category)
    }

    // scrolling feature after clicking in a tile of the section1
    const section2Ref = useRef<HTMLDivElement>(null)
    const handleScrollToSection2 = () => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="app">
            <div className="pageTitleSection">
                <h1 className='pageTitle'>Rencontrez l'un de nos coachs</h1>
            </div>
            <Section1 professors={professors} selectedCategoryFromSection1={selectedCategoryFromSection1} onCategoryChangeFromSection1={handleCategoryChangeFromSection1} onScrollToSection2={handleScrollToSection2} />
            <div ref={section2Ref}>
                <Section2 professors={professors} selectedCategoryFromSection1={selectedCategoryFromSection1} />
            </div>
        </div>
    )
}

export default App