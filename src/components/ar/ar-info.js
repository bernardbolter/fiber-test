import { useContext, useState } from 'react'
import { ARContext } from '@/providers/arProvider'
import { getPopulation } from '@/helpers'
import Video from '@/svg/Video'
import ARvideo from './ar-video'

const ARinfo = () => {
    const [ar, setAR] = useContext(ARContext)
    const [videoOpen, setVideoOpen] = useState(false)

    return (
        <div className="ar-info-container">
            <div className="ar-info-text">
                <h1>{ar.currentCity.cities[ar.currentTexture].name}</h1>
                <p>population:</p>
                <h2>{ar.currentCity.cities[ar.currentTexture].population}</h2>
            </div>
            <div 
                className="ar-info-video"
                onClick={() => setVideoOpen(true)}
            >
                <Video />
            </div>
            {videoOpen && <ARvideo setVideoOpen={setVideoOpen} videoInfo={ar.currentCity.cities[ar.currentTexture]}/>}
        </div>
    )
}

export default ARinfo