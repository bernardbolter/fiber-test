import Image from "next/image"
import { useWindowSize } from "@/helpers/useWindowSize"

const ARstartImage = ({imageSrc}) => {
    const size = useWindowSize()

    return (
        <div className="ar-start-image-container">
            <div 
                className="art-start-image-box"
                style={{ 
                    width: size.width < 600 ? size.width * .6 : size.width * .5, 
                    height: size.width < 600 ? (size.width * .6) * 1.398 : (size.width * .6) * 1.398
                }}    
            >
                <div className="art-start-line" />
                <Image
                    src={imageSrc}
                    alt="target image for AR"
                    objectFit="cover"
                    fill
                />
            </div>
        </div>
    )
}

export default ARstartImage