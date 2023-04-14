import React from 'react'
import { Professor } from '../../interfaces/interface';

interface Section1_tileProps{
    categoryName: string;
    countOfProfessorsInCategory: number;
    professors: Professor[]
}

const Section1_tile: React.FC<Section1_tileProps> = ({ categoryName, countOfProfessorsInCategory, professors }) => (
    <div>
        <h2>{categoryName}</h2>
        <div>
            <div>
                {professors.map(professor => (
                    <li key={professor.id}>
                        <img src={professor.imagePath} alt={professor.firstName+' '+professor.lastName} />
                    </li>
                ))}
            </div>
            <p>{countOfProfessorsInCategory+' formateurs'}</p>
        </div>
    </div>
)

export default Section1_tile