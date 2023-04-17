import React from 'react'
import { Professor } from '../../interfaces/interface';

interface Section2_tileProps {
    professor: Professor
}

const Section2_tile: React.FC<Section2_tileProps> = ({ professor }) => (
    <div className='section2_tile'>
        <p>{professor.category}</p>
        <h2>{professor.firstName} {professor.lastName}</h2>
        <p>Department: {professor.department}</p>
        <p>Intitulé du poste : {professor.title}</p>
        <p>Thematiques abordées en coaching :</p>
        <ul>
            {professor.courseThemes.map(theme => (
                <li key={theme}>{theme}</li>
            ))}
        </ul>
        <a href="">reserver un coaching</a>
    </div>
)

export default Section2_tile