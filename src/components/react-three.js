import { Suspense, useContext, useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { ARContext } from '@/providers/arProvider'
import ARlogo from './ar/ar-logo'
import ARnav from './ar/ar-nav'
import ARinfo from './ar/ar-info'

import cities from '../data/cities'
const Barray = ['/a1-america-city.jpg', '/a1-deutsche-stadt.jpg']
const Larray = [ "https://digitalcityseries.com/art/megacities/deutsche-stadt/berlin/berlin_sm.gif", "https://digitalcityseries.com/art/megacities/deutsche-stadt/hamburg/hamburg_sm.gif"]

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
                    <ambientLight intensity={.2} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                        <ImageMap />
                    <OrbitControls />
                </Suspense>
            </Canvas>
            {/* <ARlogo setScreen={setScreen} />
            {ar.firstClick && <ARinfo />}
            <ARnav /> */}
        </>
    )
}


const ImageMap = () => {
    const [ar, setAR ] = useContext(ARContext)
    const [texturesLoaded, setTexturesLoaded] = useState(false)
    // console.log(ar.cityTextures)
    let textures = []
    let ber
    let ham
    let col
    console.log(" t load: ", texturesLoaded)
    if ((ar.cityTextures.length !== 0) && (texturesLoaded === false)) {
        console.log("cityText loaded")
        // console.log(Larray)
        // textures = useTexture(Larray)


        // col = useLoader(TextureLoader, Larray)
        ber = useLoader(TextureLoader, './megacities/deutsche-stadt/hamburg/hamburg_sm.gif')
        console.log(ber)
        // ham = useLoader(TextureLoader, 'https://digitalcityseries.com/art/megacities/deutsche-stadt/hamburg/hamburg_sm.gif')
        // // textures = useLoader(TextureLoader, Larray)
        // console.log(text)
        // console.log(textures)
        // textures = useLoader(TextureLoader, Barray)
    }

    // const testText = useLoader(TextureLoader, 'https://digitalcityseries.com/art/megacities/deutsche-stadt/berlin/berlin_sm.gif')

    useEffect(() => {
        console.log("out t")
        if (ar.cityTextures.length !== 0) {
            console.log("https://digitalcityseries.com/art/megacities/deutsche-stadt/berlin/berlin_sm.gif")
            setTexturesLoaded(true)
        }
    }, [ar.cityTextures])

    // console.log("in effect: ", textures)

    return (
            <Suspense fallback={null}>
                <mesh>
                    <planeGeometry args={[1,1.5]}/>
                    <meshStandardMaterial 
                        map={ber} 
                        transparent
                        flatShading
                        color={0xdddddd}
                    />
                </mesh>
            </Suspense>
        )
        
}



export default ReactThree