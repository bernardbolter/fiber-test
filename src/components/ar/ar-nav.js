import {useContext} from 'react'
import { ARContext } from '@/providers/arProvider'
import Image from 'next/image'
import '../../style/ar.scss'

const ARnav = () => {
    const [ar, setAR ] = useContext(ARContext)

    return (
        <div className="ar-nav-container-outer">
            {ar.cityTextures.length !== 0  ? (
                <div className="ar-nav-inner">
                    {ar.currentCity.cities.map((city, i) => {
                    
                    return (
                        <div 
                            className="ar-button" 
                            key={i}
                            onClick={() => setAR(state => ({ ...state, currentTexture: i, firstClick: true }))}
                        >
                            <Image
                                src={`https://digitalcityseries.com/art/megacities/${ar.currentCity.slug}/${city.slug}/${city.slug}_ui.png`}
                                width={30}
                                height={30}
                                alt={`${city.name} flag`}
                            />
                            <p>{city.name}</p>
                        </div>
                    )
                })}
                </div>
            ) : (
                <div />
            )}
        </div>
    )
}

export default ARnav