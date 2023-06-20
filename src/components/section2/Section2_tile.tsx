import React, { useState, useRef, useEffect } from 'react'
import { Professor } from '../../interfaces/interface'

interface Section2_tileProps {
    professor: Professor
}

const Section2_tile: React.FC<Section2_tileProps> = ({ professor }) => {
    const [showPopup, setShowPopup] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className={`section2_tile ${showPopup ? 'blur-element' : ''}`}>
            <div className={`section2_tile-content`}>
                <div className="section2_tile-topSection">
                    <p className='section2_tile-category'>{professor.category}</p>
                </div>
                <div className="section2_tile-middleSection">
                    <img className='section2_tile-img' src={professor.imagePath} alt={professor.firstName + ' ' + professor.lastName} />
                    <div className="section2_tile-moreInfos" onClick={() => setShowPopup(!showPopup)}></div>
                    {showPopup && (
                        <div ref={popupRef} className="section2_tile-moreInfos-popup">{professor.biography}</div>
                    )}
                    <div className="section2_tile-middleSection-text">
                        <h3 className='section2_tile-name'>{professor.firstName} {professor.lastName}</h3>
                        <p className='section2_tile-jobTitle'>{professor.title}</p>
                    </div>
                </div>
                <p className='section2_tile-themes'>Thematiques abordées :</p>
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
}

export default Section2_tile