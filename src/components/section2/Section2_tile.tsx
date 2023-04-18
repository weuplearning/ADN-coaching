import React from 'react'
import { Professor } from '../../interfaces/interface';

interface Section2_tileProps {
    professor: Professor
}

const Section2_tile: React.FC<Section2_tileProps> = ({ professor }) => (
    <div className='section2_tile'>
        <div className="section2_tile-topSection">
            <p className='section2_Tile-category'>{professor.category}</p>
            <div className="section2_tile-moreInfos"></div>
            <img src={professor.imagePath} alt={professor.firstName+' '+professor.lastName} />
        </div>
        <h3 className='section2_Tile-name'>{professor.firstName} {professor.lastName}</h3>
        <p className='section2_Tile-jobTitle'>{professor.title}</p>
        <p className='section2_Tile-themes'>Thematiques abordées en coaching :</p>
        <ul>
            {professor.courseThemes.map(theme => (
                <li key={theme}>{theme}</li>
            ))}
        </ul>
        <a className='section2_tile-button' href="">reserver un coaching</a>
    </div>
)

export default Section2_tile