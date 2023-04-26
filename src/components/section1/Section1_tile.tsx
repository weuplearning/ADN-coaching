import React from 'react'
import { Professor } from '../../interfaces/interface';

interface Section1_tileProps{
    categoryName: string;
    countOfProfessorsInCategory: number;
    professors: Professor[]
}

const Section1_tile: React.FC<Section1_tileProps> = ({ categoryName, countOfProfessorsInCategory, professors }) => (
    <div className='section1_tile'>
        <h2 className='section1_tile-categoryText'>{categoryName}</h2>
        <div className='section1_tile-bottomSection'>
            <div className='section1_tile-professorPhotos'>
                {professors.map(professor => (
                    <li key={professor.id}>
                        <img src={professor.imagePath} alt={professor.firstName+' '+professor.lastName} />
                    </li>
                ))}
            </div>
            <p className='section1_tile-professorsAmountText'>{countOfProfessorsInCategory+' formateurs'}</p>
        </div>
    </div>
)

export default Section1_tile