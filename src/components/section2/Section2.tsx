import React, { useState, useEffect } from 'react'
import { Professor } from '../../interfaces/interface'
import Section2_tile from './Section2_tile'

interface Section2Props {
    professors: Professor[]
    selectedCategoryFromSection1: string
}

const Section2: React.FC<Section2Props> = ({ professors, selectedCategoryFromSection1 }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    useEffect(() => {
        setSelectedCategories(selectedCategoryFromSection1 ? [selectedCategoryFromSection1] : [])
    }, [selectedCategoryFromSection1])

    const [menuOpen, setMenuOpen] = useState(false)

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value

        if (event.target.checked) {
            setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, category])
        } else {
            setSelectedCategories(prevSelectedCategories => prevSelectedCategories.filter(element => element !== category))
        }
    }

    const handleButtonClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='section2'>
            <div className="section2-top">
                <h2>Tous nos formateurs</h2>
                <div className="section2-filter">
                    <div onClick={handleButtonClick} className='section2-filterButton'>filtres</div>
                    <div className={`section2-filterItems ${menuOpen ? 'section2-filterItems-open' : ''}`}>
                        {menuOpen &&
                            // Add checkboxes for each course category found in json
                            [...new Set(professors.map(professor => professor.category))].map(category => (
                                <label key={category} className={`section2-filterSection-labels ${selectedCategories.includes(category) ? 'section2-filterSection-labels-checked' : ''}`}>
                                    <input type="checkbox" value={category} onChange={handleCategoryChange} checked={selectedCategories.includes(category)} />
                                    {category}
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="divider section2-divider"></div>
            <div className="professorList">
                {professors.filter(professor =>
                    selectedCategories.length === 0 || selectedCategories.includes(professor.category)).map(professor => (
                        <Section2_tile key={professor.id} professor={professor} />
                    ))}
            </div>
        </div>
    )
}

export default Section2