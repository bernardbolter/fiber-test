
import ReactPlayer from "react-player"
import Close from "@/svg/Close"
import { useWindowSize } from "@/helpers/useWindowSize"

const ARvideo = ({ setVideoOpen, videoInfo }) => {
    const { video, artist, title, start } = videoInfo
    const size = useWindowSize()
    console.log(size)

    return (
        <div className="ar-video-container">
            <ReactPlayer
                url={video}
                height={size.width * .6}
                width={size.width}
                config={{
                    youtube: {
                        playerVars: {
                            autoplay: true,
                            origin: 'https://www.youtube.com',
                            start: start !== undefined ? start : 0
                        }
                    }
                }}
            />
            <div className="mega-video-bottom">
                <h1>{artist}</h1>
                <h2>{title}</h2>
                <div 
                    className="mega-video-close"
                    onClick={() => {setVideoOpen(false)}}
                >
                    <Close />
                    <p>close</p>
                    
                </div>
            </div>
        </div>
    )
}

export default ARvideo