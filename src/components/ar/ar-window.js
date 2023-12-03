import { useRef, Suspense, useContext } from 'react'
import { ARContext } from '@/providers/arProvider'
import { ARAnchor, ARView } from 'react-three-mind'
import { useTexture, Loader } from '@react-three/drei'

const Barray = ['/a1-america-city.jpg', '/a1-deutsche-stadt.jpg']
  
const ARwindow = () => {
    const arRef = useRef()
    const [ar, setAR] = useContext(ARContext)

    return (
        <>
            <Suspense fallback={null}>
                <ARView
                    ref={arRef}
                    autoplay
                    // imageTargets={`https://digitalcityseries.com/art/megacities/${ar.currentCity.slug}/${ar.currentCity.slug}.mind`}
                    imageTargets={`../../../${ar.currentCity.slug}.mind`}
                    filterMinCF={0.1}
                    filterBeta={1000}
                    missTolerance={0}
                    warmupTolerance={0}
                    flipUserCamera={false}
                >
                    <ambientLight intensity={.1} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <ARAnchor
                        target={0}
                        onAnchorFound={() => setAR(state => ({ ...state, showStartImage: false }))}
                    >
                        <ImageMap />
                    </ARAnchor>
                </ARView>
            </Suspense>
            <Loader />
        </>
    )
}

const ImageMap = () => {
    const [ar, setAR ] = useContext(ARContext)
    const startTexture = useTexture('/ar_start_city.png')
    const transparentTexture = useTexture('/transparent.png')
    let textures = []
   
    if ((ar.cityTextures.length !== 0) && (textures.length === 0))  {
        console.log("cityText loaded")
        // console.log(ar.cityTextures)
        textures = useTexture(ar.cityTextures)
        // textures = useTexture(Barray)
    }

    return (
            <Suspense fallback={null}>
                <mesh>
                    <planeGeometry args={[1,1.4]}/>
                    <meshStandardMaterial 
                        map={!ar.firstClick ? startTexture : ar.viewingOverlay ? textures[ar.currentTexture] : transparentTexture }
                        transparent
                        flatShading
                        color={0xdddddd}
                    />
                </mesh>
            </Suspense>
        )
        
}

export default ARwindow