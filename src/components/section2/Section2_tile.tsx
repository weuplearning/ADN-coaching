import React, { useState, useRef, useEffect } from 'react'
import { Professor } from '../../interfaces/interface'

interface Section2_tileProps {
    professor: Professor
}

const Section2_tile: React.FC<Section2_tileProps> = ({ professor }) => {
    const [showPopup, setShowPopup] = useState(false)
    const [showAllThemes, setShowAllThemes] = useState(false)
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
        <div className={`section2_tile`} style={{ height: showAllThemes ? 'unset' : '' }}>
            <div className={`section2_tile-content`}>
                <div className="section2_tile-topSection">
                    <p className='section2_tile-category'>{professor.category}</p>
                </div>
                <div className="section2_tile-middleSection">
                    <div className="section2_tile-photoAndInfoSection">
                        <img className='section2_tile-img' src={professor.imagePath} alt={professor.firstName + ' ' + professor.lastName} />
                        <div className="section2_tile-moreInfos" onClick={() => setShowPopup(!showPopup)}></div>
                    </div>
                    {showPopup && (
                        <div ref={popupRef} className="section2_tile-moreInfos-popup">
                            <div className="closePopupButton" onClick={() => setShowPopup(false)}>A</div>
                            <div className="section2_tile-moreInfos-popup-text">{professor.biography}</div>
                        </div>
                    )}
                    <div className="section2_tile-middleSection-text">
                        <h3 className='section2_tile-name'>{professor.firstName} {professor.lastName}</h3>
                        <p className='section2_tile-jobTitle'>{professor.title}</p>
                    </div>
                </div>
                <p className='section2_tile-themes'>Thematiques abordées :</p>
                <ul className='section2_tile-themList'>
                    {(showAllThemes ? professor.courseThemes : professor.courseThemes.slice(0, 4)).map(theme => (
                        <li key={theme}>{theme}</li>
                    ))}
                </ul>
                {professor.courseThemes.length > 4 && <div className="section2_tile-buttonShowMore" onClick={() => setShowAllThemes(!showAllThemes)}>Voir plus</div>}
                <div className="spacer"></div>
                <a className='section2_tile-button' target='_blank' href={professor.reservationLink}>reserver un coaching</a>
            </div>
        </div>
    )
}

export default Section2_tile