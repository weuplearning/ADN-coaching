import React from 'react'
import Section1_tile from './Section1_tile'

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-multi-carousel'
// import "react-multi-carousel/lib/styles.css"
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Professor } from '../../interfaces/interface'

interface Section1Props {
    professors: Professor[]
}

const Section1: React.FC<Section1Props> = ({ professors }) => {

    // defining all the categories
    const categories = [
        { category: 'category1', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[] },
        { category: 'category2', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[] },
        { category: 'category3', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[] },
        { category: 'category4', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[] },
    ]

    // determining how many professors are there in each categories
    professors.forEach(professor => {

        // here we are itering over all objects in professors variable, and then comparing with categories variable to find out how many professor to have each categores in there properties
        const category = categories.find(categoryElement => categoryElement.category === professor.category)

        // increasing category count when category is matching with category in professors variable + adding professor that match a categorie to an array categoryProfessor
        if (category) {
            // if there is a category that match, we add a +1 on the count of this category in categories variable
            category.countOfProfessorsInCategory++
            category.professorsInCategory.push(professor)
        }
    })

    return (
        <div className='section1'>
            <div className="carousel">
                {/* <Slider {...sliderSettings}>
                    {categories.map(category => (
                        <Section1_tile
                            key={category.category}
                            categoryName={category.category}
                            countOfProfessorsInCategory={category.countOfProfessorsInCategory}
                            professors={category.professorsInCategory}
                        />
                    ))}
                </Slider> */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {categories.map(category => (
                        <SwiperSlide>
                            <Section1_tile
                                key={category.category}
                                categoryName={category.category}
                                countOfProfessorsInCategory={category.countOfProfessorsInCategory}
                                professors={category.professorsInCategory}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Section1