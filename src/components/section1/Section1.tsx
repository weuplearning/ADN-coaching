import React from 'react'
import Section1_tile from './Section1_tile'

import { Professor } from '../../interfaces/interface'
import CarouselComponent from './CarouselComponent'

interface Section1Props {
    professors: Professor[]
}

const Section1: React.FC<Section1Props> = ({ professors }) => {

    return (
        <div className='section1'>
            <CarouselComponent professors={ professors }/>
        </div>
    )
}

export default Section1