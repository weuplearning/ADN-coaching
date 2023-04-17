import React from 'react'
import { Professor } from '../../interfaces/interface';

const Section2_tile: React.FC<Section2_tileProps> = ({ professor }) => (
    <div className='section2_tile'>
        <h2>{professor.title} {professor.firstName} {professor.lastName}</h2>
        <p>Department: {professor.department}</p>
        <p>Email: {professor.email}</p>
        <p>Course Themes:</p>
        <ul>
            {professor.courseThemes.map(theme => (
                <li key={theme}>{theme}</li>
            ))}
        </ul>
    </div>
)