import React from 'react'
import { Professor } from '../../interfaces/interface';

interface Section2_tileProps {
    professor: Professor
}

const Section2_tile: React.FC<Section2_tileProps> = ({ professor }) => (
    <div className='section2_tile'>
        <div className="section2_tile-content">
            <div className="section2_tile-topSection">
                <p className='section2_tile-category'>{professor.category}</p>
            </div>
            <div className="section2_tile-middleSection">
                <img className='section2_tile-img' src={professor.imagePath} alt={professor.firstName+' '+professor.lastName} />
                <div className="section2_tile-moreInfos"></div>
                <div className="section2_tile-middleSection-text">
                    <h3 className='section2_tile-name'>{professor.firstName} {professor.lastName}</h3>
                    <p className='section2_tile-jobTitle'>{professor.title}</p>
                </div>
            </div>
            <p className='section2_tile-themes'>Thematiques abordées en coaching :</p>
            <ul>
                {professor.courseThemes.map(theme => (
                    <li key={theme}>{theme}</li>
                ))}
            </ul>
            <div className="spacer"></div>
            <a className='section2_tile-button' target='_blank' href={professor.reservationLink}>reserver un coaching</a>
        </div>
    </div>
)

export default Section2_tile