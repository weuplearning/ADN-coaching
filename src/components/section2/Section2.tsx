import React, { useState } from 'react'
import { Professor } from '../../interfaces/interface';
import Section2_tile from './Section2_tile'

interface Section2Props {
    professors: Professor[]
}

const Section2: React.FC<Section2Props> = ({ professors }) => {

    const [selectedCategory, setselectedCategory] = useState<string | null>(null)

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setselectedCategory(event.target.value)
    }
    
    return (
        <div className='section2'>
            <div className="section2-top">
                <h2>Tous nos formateurs</h2>
                <div className="filter">
                    <select onChange={handleCategoryChange}>
                        <option value="">All categories</option>
                        {/* Add options for each unique course category */}
                        {[...new Set(professors.flatMap(professor => professor.category))].map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="divider"></div>
            {professors.filter(professor =>
                !selectedCategory || professor.category === selectedCategory).map(professor =>(
                    <Section2_tile key={professor.id} professor={professor}/>
            ))}
        </div>
    )
}

export default Section2