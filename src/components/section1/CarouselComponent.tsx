import React, { useState, useEffect } from 'react'
import Section1_tile from './Section1_tile'

import { Professor } from '../../interfaces/interface'

interface CarouselComponentProps {
    professors: Professor[]
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ professors }) => {

    // position of the tile
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)

    // amount of tile to display at a time
    const [tilesToShow, setTilesToShow] = useState(3)

    // updating the tilesToShow variable depending on the width of the window, and also when the user is resizing the window
    useEffect(() => {
        const updateTilesToShow = () => {
            if (window.innerWidth < 600) {
                setTilesToShow(1)
            } else if (window.innerWidth < 900) {
                setTilesToShow(2)
            } else {
                setTilesToShow(3)
            }
        }

        updateTilesToShow();

        // detecting window resizing and trigger the udpateTileToShow function
        window.addEventListener('resize', updateTilesToShow)

        // cleanup function. It's needed in order to avoid the addeventlistener to run all the time even if the component is not used, which can lead to things such as memory leaks
        return () => {
            window.removeEventListener('resize', updateTilesToShow)
        }
    }, [])

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

    // button to go forward / backward while changing the value of currentCategoryIndex variable
    const nextTile = () => {
        if (currentCategoryIndex === categories.length - tilesToShow) {
            setCurrentCategoryIndex(0);
        } else {
            setCurrentCategoryIndex(currentCategoryIndex + tilesToShow)
        }
    }
    const previousTile = () => {
        if (currentCategoryIndex === 0) {
            setCurrentCategoryIndex(categories.length - tilesToShow)
        } else {
            setCurrentCategoryIndex(currentCategoryIndex - tilesToShow)
        }
    }

    return (
        <div className='carouselComponent'>
            <div className="carouselComponent-carousel">
                {categories.slice(currentCategoryIndex, currentCategoryIndex + tilesToShow).map((category) => (
                    <Section1_tile
                        key={category.category}
                        categoryName={category.category}
                        countOfProfessorsInCategory={category.countOfProfessorsInCategory}
                        professors={category.professorsInCategory}
                        style={{
                            transform: `translateX(-${currentCategoryIndex * (100 / tilesToShow)}%)`,
                            flexBasis: `${100 / tilesToShow}%`,
                        }}
                    />
                ))}
            </div>
            <div className="carouselComponent-buttons">
                <button onClick={previousTile} />
                <button onClick={nextTile} />
            </div>
            <style>
                {`
                    .carouselComponent-carousel {
                    display: flex;
                    overflow: hidden;
                    transition: transform 0.5s ease-in-out;
                    }

                    .carouselComponent-carousel > :global(div) {
                    flex-shrink: 0;
                    transition: flex-basis 0.5s ease-in-out;
                    }
                    
                    .carouselComponent-carousel > :global(div):nth-child(n + ${currentCategoryIndex + tilesToShow + 1}) {
                    position: absolute;
                    visibility:hidden;
                    }
                    
                    .carouselComponent-carousel > :global(div):nth-child(-n + ${currentCategoryIndex}) {
                    position:absolute;
                    visibility:hidden;
                    }
                    
                    .carouselComponent-carousel > :global(div):nth-child(n + ${currentCategoryIndex + 1}):nth-child(-n + ${currentCategoryIndex + tilesToShow}) {
                    position:relative;
                    visibility:visible;
                    }
                `}
            </style>
        </div>
    )
}

export default CarouselComponent