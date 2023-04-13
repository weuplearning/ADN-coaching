import React from 'react'
import data from '../../assets/coachsData.json'

interface Professor {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    department: string;
    email: string;
    courseThemes: string[];
  }

const Section1_tile = ({ data }) => {

    return (
        <div className='section1_tile'>

        </div>
    )
}

export default Section1_tile