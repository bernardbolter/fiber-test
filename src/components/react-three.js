import { Suspense, useContext, useEffect } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { ARContext } from '@/providers/arProvider'
import ARlogo from './ar/ar-logo'
import ARnav from './ar/ar-nav'
import ARinfo from './ar/ar-info'

import cities from '../data/cities'
const Barray = ['/a1-america-city.jpg', '/a1-deutsche-stadt.jpg']

const ReactThree = ({ setScreen }) => {
    var slug = 'deutsche-stadt'

    const [ar, setAR ] = useContext(ARContext)

    useEffect(() => {
        const newCity = cities.find(city => city.slug === slug)
        const newTextures = []
        newCity.cities.map(city => {
            newTextures.push(`https://digitalcityseries.com/art/megacities/${newCity.slug}/${city.slug}/${city.slug}_sm.gif`)
        })
        
        setAR(state => ({ ...state, currentCity: newCity, cityTextures: newTextures }))
    },[])

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                        <ImageMap />
                    <OrbitControls />
                </Suspense>
            </Canvas>
            <ARlogo setScreen={setScreen} />
            {ar.firstClick && <ARinfo />}
            <ARnav />
        </>
    )
}


const ImageMap = () => {
    const [ar, setAR ] = useContext(ARContext)
    // console.log(ar.currentTexture)
    let textures = []
   
    if ((ar.cityTextures.length !== 0) && (textures.length === 0))  {
        // console.log("cityText loaded")
        // console.log(ar.cityTextures)
        textures = useTexture(ar.cityTextures)
        // textures = useLoader(TextureLoader, Barray)
    }

    // console.log("in effect: ", textures)

    return (
            <Suspense fallback={null}>
                <mesh>
                    <planeGeometry args={[1,1.5]}/>
                    <meshStandardMaterial map={textures[ar.currentTexture]} transparent />
                </mesh>
            </Suspense>
        )
        
}



export default ReactThree