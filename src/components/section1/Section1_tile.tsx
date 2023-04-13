import React from 'react'

interface Section1_tileProps {
    professor: Professor;
}

const Section1_tile: React.FC<Section1_tileProps> = ({ professor }) => (
    <div>
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

export default Section1_tile