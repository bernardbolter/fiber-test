import { useContext , useRef, useState } from 'react'
import { ARContext } from '@/providers/arProvider'
import { useWindowSize } from '@/helpers/useWindowSize'
import Image from 'next/image'
import EyeClosed from '@/svg/EyeClosed'
import EyeOpen from '@/svg/EyeOpen'
import ScrollArrow from '@/svg/ScrollArrow'

const ARnav = () => {
    const [ar, setAR ] = useContext(ARContext)
    const scrollRef = useRef()
    const [viewScrollLeft, setViewScrollLeft] = useState(true)
    const [viewScrollRight, setViewScrollRight] = useState(false)
    const size = useWindowSize()
    
    const ScrollEvent = () => {
        if (scrollRef.current.scrollLeft > 0) {
            setViewScrollRight(true)
        } else {
            setViewScrollRight(false)
        }
        if (scrollRef.current.scrollLeft > size.width) {
            setViewScrollLeft(false)
        } else {
            setViewScrollLeft(true)
        }
    }

    console.log(ar.cityTextures)

    return (
        <div className="ar-nav-container-outer">
            {ar.cityTextures.length !== 0  ? (
                <div 
                    className="ar-nav-inner"
                    onScroll={e => ScrollEvent(e)}
                    ref={scrollRef}
                >
                    {ar.currentCity.cities.map((city, i) => {
                    
                    return (
                        <div 
                            className="ar-button" 
                            key={i}
                            onClick={() => setAR(state => ({ 
                                ...state, 
                                currentTexture: i, 
                                firstClick: true, 
                                viewingOverlay: !state.firstClick 
                                    ? true
                                    : state.currentTexture === i
                                        ? !state.viewingOverlay 
                                        : true
                            }))}
                        >
                            <Image
                                src={`https://digitalcityseries.com/art/megacities/${ar.currentCity.slug}/${city.slug}/${city.slug}_ui.png`}
                                width={50}
                                height={50}
                                alt={`${city.name} flag`}
                                className="ar-circle"
                            />
                            <p>{city.name}</p>
                        </div>
                    )
                })}
                { !ar.firstClick ? null : (
                    <div 
                        className="ar-eye"
                        onClick={() => setAR(state => ({ ...state, viewingOverlay: !state.viewingOverlay }))}
                    >
                        {ar.viewingOverlay ? <EyeOpen /> : <EyeClosed />}
                    </div>
                )}
                {viewScrollLeft && (
                    <div className="ar-nav-left-arrow">
                        <ScrollArrow />
                    </div>
                )}
                {viewScrollRight && (
                    <div className="ar-nav-right-arrow">
                        <ScrollArrow />
                    </div>
                )}
                    
                </div>
            ) : (
                <div />
            )}
        </div>
    )
}

export default ARnav