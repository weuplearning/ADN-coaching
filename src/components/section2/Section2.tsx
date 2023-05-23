import React, { useState } from 'react'
import { Professor } from '../../interfaces/interface';
import Section2_tile from './Section2_tile'

interface Section2Props {
    professors: Professor[]
}

const Section2: React.FC<Section2Props> = ({ professors }) => {

    const [selectedCategories, setselectedCategories] = useState<string[]>([])
    const [menuOpen, setMenuOpen] = useState(false)

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const category = (event.target.value)

        if (event.target.checked) {
            setselectedCategories(prevSelectedCategories => [...prevSelectedCategories, category])
        }
        else {
            setselectedCategories(prevSelectedCategories => prevSelectedCategories.filter(element => element !== category))
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
                            // Add checkboxes for each unique course category
                            [...new Set(professors.map(professor => professor.category))].map(category => (
                                <label key={category}>
                                    <input type="checkbox" value={category} onChange={handleCategoryChange} />
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