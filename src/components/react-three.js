import { Suspense, useContext } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { ViewContext } from '../providers/viewProvider'

const ReactThree = () => {

    const [ar, setAR ] = useContext(ViewContext)
    console.log(ar)

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                        <Image />
                    <OrbitControls />
                </Suspense>
            </Canvas>
            <div
            style={{
                position: 'fixed',
                top: 10,
                left: 10,
                zIndex: 1001,
                fontSize: 30
            }}
                onClick={() => setAR(state => ({ ...state, image: !state.image }))}
            >change</div>
        </>
    )
}

const Image = () => {
    const [ar, setAR ] = useContext(ViewContext)
    // const imageTextures = useTexture({
    //     germany: '/a1-deutsche-stadt.jpg',
    //     america: '/a1-america-city.jpg'
    // })
    const america = useLoader(TextureLoader, '/a1-america-city.jpg')
    const germany = useLoader(TextureLoader, '/a1-deutsche-stadt.jpg')

    // console/log(imageTextures)

    return (
        <mesh>
            <planeGeometry args={[1,1.5]}/>
            <meshStandardMaterial map={ar.image ? america : germany} transparent />
        </mesh>
    )
}

export default ReactThree