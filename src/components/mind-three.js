import { useContext, Suspense, useState, useRef } from 'react'
import { ARAnchor, ARView } from 'react-three-mind'
import { useLoader } from '@react-three/fiber'
import { ViewContext } from '@/providers/viewProvider'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Plane = props => {
    const [ar,setAR] = useContext(ViewContext)
    console.log(ar.image)
    const america = useLoader(TextureLoader, '/a1-america-city.jpg')
    const germany = useLoader(TextureLoader, '/a1-deutsche-stadt.jpg')
    return (
        <mesh {...props}>
            <planeGeometry args={[1,1.5]}/>
            <meshStandardMaterial map={ar.image ? america : germany} transparent />
        </mesh>
    )
}

const MindThree = ({ setScreen }) => {
    const ref = useRef()
    const [ar,setAR] = useContext(ViewContext)
    const [anchorText, setAnchorText] = useState('starting')
    return (
        <>
            <Suspense fallbakc={null}>
                <ARView
                    ref={ref}
                    autoplay
                    imageTargets="/targets.mind"
                    filterMinCF={1}
                    filterBeta={10000}
                    missTolerance={0}
                    warmupTolerance={0}
                    flipUserCamera={false}
                    onAnchorFound={() => setAnchorText('found')}
                    onAnchorLost={() => setAnchorText('lost')}
                >
                    <ambientLight />
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <ARAnchor 
                        target={0}
                        onAnchorFound={() => setAnchorText('found')}
                        onAnchorLost={() => setAnchorText('lost')}
                    >
                        <Plane />
                    </ARAnchor>
                </ARView>
            </Suspense>
            <div
                style={{
                    position: 'fixed',
                    top: 10,
                    left: 10,
                    zIndex: 1001,
                    fontSize: 30
                }}
                    onClick={() => setAR(state => ({ ...state, image: !state.image }))}
                >
                <p>change</p>
                <p>{anchorText}</p>
                <p onClick={() => setScreen('none')}>Stop</p>
            </div>
        </>
    )
}

export default MindThree