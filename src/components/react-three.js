import { Suspense, useContext, useEffect, useState, useCallback, useLayoutEffect, useMemo } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
// import Image from 'next/image'
import dynamic from 'next/dynamic'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { ViewContext } from '../providers/viewProvider'

import cities from '../data/cities'


const Barray = ["https://digitalcityseries.com/art/megacities/deutsche-stadt/dortmund/dortmund_sm.gif" ]

const ReactThree = ({ setScreen }) => {
    var slug = 'deutsche-stadt'

    const [ar, setAR ] = useContext(ViewContext)
    const [isLoading, setIsLoading] = useState(true)
    const [city, setCity] = useState(cities.filter(city => city.slug === slug))
    const [imgs, setImgs] = useState([])
    const [textus, setTextus] = useState([])
    const [oneImg, setOneImg] = useState()

    // console.log(city)

    // useEffect(() => {
    //         const img = new Image()
    //         img.src = Barray
    //         console.log(img)
    //         img.onload = () => {
    //             console.log('img loaded')
    //             console.log(img)
    //             setOneImg(img)
    //             console.log(oneImg)
    //             setIsLoading(false)
    //         }
    //         setOneImg(img)
    //         console.log(oneImg)
    //     },[])

    // console.log(oneImg)

    useEffect(() => {
        const newCity = cities.find(city => city.slug === slug)
        const newTextures = []
        newCity.cities.map(city => {
            newTextures.push(`https://digitalcityseries.com/art/megacities/${newCity.slug}/${city.slug}/${city.slug}_sm.gif`)
        })
        // console.log(newTextures)
        
        setAR(state => ({ ...state, currentCity: newCity, cityTextures: newTextures }))
        // const imgs = cacheImage(Barray)
        // console.log(imgs)
    },[])

    


    // console.log(ar.currentCity)

    // const cacheImage = async (srcArray) => {
    //     const promises = await srcArray.map(src => {
    //         return new Promise(function (resolve, reject) {
    //             const img = new Image()
    
    //             img.src = src
    //             img.onload = resolve()
    //             img.onerror = reject()
    //         })
    //     })

    //     console.log(imgs)
    
    //     await Promise.all(promises)
    
    //     setIsLoading(false)
    //     console.log("loaded")
    //     return promises
    // }

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                        <ImageMap isLoading={isLoading} />
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
            >
                <p>change</p>
                <p onClick={() => setScreen('none')}>Stop</p>
                {/* <Image
                    src="https://digitalcityseries.com/art/megacities/deutsche-stadt/berlin/berlin_sm.gif"
                    width={200}
                    height={300}
                /> */}
            </div>
        </>
    )
}

const ARNav = () => {
    const [ar, setAR ] = useContext(ViewContext)
    return (
        <div className="ar-nav-container">

        </div>
    )
}

const ImageMap = ({ isLoading, oneImg }) => {
    const [ar, setAR ] = useContext(ViewContext)
    const textures = []
   
    if (ar.cityTextures.length !== 0) {
        console.log("cityText loaded")
        console.log(ar.cityTextures)
        textures = useTexture(ar.cityTextures)
    }

    console.log("in effect: ", textures)

    return (
            <Suspense fallback={null}>
                <mesh>
                    <planeGeometry args={[1,1.5]}/>
                    <meshStandardMaterial map={textures[0]} transparent />
                </mesh>
            </Suspense>
        )
        
}

export default ReactThree