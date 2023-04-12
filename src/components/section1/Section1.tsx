import React from 'react'
import Section1_tile from './Section1_tile'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section1 = () => {

    const datas = ['test1','test2','test3']

    const tiles = datas.map((item,index)=>(
        <Section1_tile key={index} data={item} />
    ))

    return (
        <div className='section1'>
            <h1>Rencontrez l'un de nos coachs</h1>
            
            <div className="carousel">
                <Carousel>
                    {tiles.length > 0 ? tiles : [<Section1_tile key={0} data={null}/>]}
                </Carousel>
            </div>
            
        </div>
    )
}

export default Section1