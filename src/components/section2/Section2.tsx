import React from 'react'
import { Professor } from '../../interfaces/interface';

interface Section2Props {
    professors: Professor[]
}

const Section2: React.FC<Section2Props> = ({ professors }) => {
    return (
        <div className='section2'>
            <div className="section2-top">
                <h2>Tous nos formateurs</h2>
                <div className="filter"></div>
            </div>
            <div className="divider"></div>
            {/* {professors.map()} */}
        </div>
    )
}

export default Section2