import React from 'react'
import Section1_tile from './Section1_tile'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Professor } from '../../interfaces/interface'

interface Section1Props {
    professors: Professor[]
    selectedCategoryFromSection1: string
    onCategoryChangeFromSection1: (category: string) => void
    onScrollToSection2: () => void
}

const Section1: React.FC<Section1Props> = ({ professors, onCategoryChangeFromSection1, onScrollToSection2 }) => {

    // defining the path for images
    // const categoryImagePath = 'https://amazon.koa.qualif.dev/media/microsites/amazon/react_coach/assets'
    const categoryImagePath = 'https://amazon.koa.qualif.dev/media/microsites/amazon/react_coach/assets'

    // object that define all the categories/themes that will be used to name the tiles in the carousel and such
    const categories = [
        { category: 'Stratégie', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[], categoryImage: `${categoryImagePath}/images/category1.png` },
        { category: 'Marketing', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[], categoryImage: `${categoryImagePath}/images/category5.png` },
        { category: "Gestion d'entreprise", countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[], categoryImage: `${categoryImagePath}/images/category4.png` },
        { category: 'Gestion des opérations', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[], categoryImage: `${categoryImagePath}/images/category3.png` },
        { category: 'Ventes', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[], categoryImage: `${categoryImagePath}/images/category7.png` },
        { category: 'Tech', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[], categoryImage: `${categoryImagePath}/images/category2.png` },
        { category: 'Marketplace', countOfProfessorsInCategory: 0, professorsInCategory: [] as Professor[], categoryImage: `${categoryImagePath}/images/category6.png` },
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
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={100}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1100: {
                          slidesPerView: 3,
                          spaceBetween: 80,
                        },
                        750: {
                          slidesPerView: 2,
                          spaceBetween: 70,
                        },
                        1: {
                          slidesPerView: 1,
                        },
                    }}
                >
                    {categories.map(category => (
                        <SwiperSlide>
                            <Section1_tile
                                key={category.category}
                                categoryName={category.category}
                                countOfProfessorsInCategory={category.countOfProfessorsInCategory}
                                professors={category.professorsInCategory}
                                categoryImage={category.categoryImage}
                                onCategoryChangeFromSection1={onCategoryChangeFromSection1}
                                onScrollToSection2={onScrollToSection2}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Section1