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

    const cacheImage = async (srcArray) => {
        const promises = await srcArray.map(src => {
            return new Promise(function (resolve, reject) {
                const img = new Image()
    
                img.src = src
                img.onload = resolve()
                img.onerror = reject()
            })
        })

        console.log(imgs)
    
        await Promise.all(promises)
    
        setIsLoading(false)
        console.log("loaded")
        return promises
    }

    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <directionalLight color="white" position={[0, 0, 5]} />
                        <ImageMap isLoading={isLoading} oneImg={oneImg} />
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

const ImageMap = ({ isLoading, oneImg }) => {
    console.log("in Imap: ", isLoading)
    console.log("one img: ", oneImg)
    const [ar, setAR ] = useContext(ViewContext)
    const data = [
        {
        name: 'america',
        url: '/a1-america-city.jpg'
        },
        {
        name: 'germany',
        url: '/a1-deutsche-stadt.jpg'
        }
    ]
    // const texture = useLoader(TextureLoader, oneImg)
    // console.log(texture)
    const Darray = ['/a1-america-city.jpg','/a1-deutsche-stadt.jpg']

    const texture = useTexture(Barray)
    console.log(texture)


    // const Barray = ["https://digitalcityseries.com/art/megacities/deutsche-stadt/dortmund/dortmund_sm.gif", "https://digitalcityseries.com/art/megacities/deutsche-stadt/essen/essen_sm.gif" ]
    // const [textures, setTextures] = useState([])

    // useEffect(() => {
    //     const Newtextures = useTexture(Darray)
    //     console.log(Newtextures)
    // }, [])
    // const textures = []

//     useEffect(() => {
//         data.map(async c => {
//             var newObj = { [c.name] :  loadit(c.url) }
//             console.log(newObj)
//             setTextures(textures => ([...textures, newObj ]))
//         })
//         console.log(textures)
//     }, [])

//   const loadit = async (url) => {
//     const loaded = await useLoader(TextureLoader, url)
//     return loaded
//   }
    
    // const imageTextures = useTexture({
    //     germany: '/a1-deutsche-stadt.jpg',
    //     america: '/a1-america-city.jpg'
    // })
    // const america = useLoader(TextureLoader, '/a1-america-city.jpg')
    // const germany = useLoader(TextureLoader, '/a1-deutsche-stadt.jpg')

    // const makeTextures = useCallback(async() => {
    //     console.log('callback')
    //     const Newtextures = useTexture(Darray)
    //     // setTextures(Newtextures)
    //     console.log(Newtextures)
    //     // return Newtextures
    // })

    // useEffect(() => {
    //     makeTextures()
    // }, [makeTextures])
    // console.log(ar.cityTextures)
    // const textures = useLoader(TextureLoader, Barray)

    
    // console.log(textures)
    // console.log(makeTextures)
    // const [texts, setTexts] = useState()

    // useEffect(() => {
    //     var cityArray = [] 
    //    if (ar.currentCity.lenth !== 0) {
    //         // cityArray.push(`/megacities/${ar.currentCity.slug}/${ar.currentCity.slug}_sm.gif`)
    //         ar.currentCity.cities.map(city => {
    //             cityArray.push(`/megacities/${ar.currentCity.slug}/${city.slug}/${city.slug}_sm.gif`)
    //         })
    //         console.log(cityArray)
    //         // const [one,two,three,four,five,six,seven,eight,nine] = useLoader(TextureLoader, [
    //         const tempText = useLoader(TextureLoader, [
    //             '/a1-america-city.jpg',
    //             '/a1-deutsche-stadt.jpg'
    //         ])
    //         console.log(tempText)
    //         // const texts = useLoader(TextureLoader, cityArray)
    //         // // setTextures(texts)
    //         // console.log(texts)
    //     }
    // }, [ar.currentCity])

    // console/log(imageTextures)

    return (
            <Suspense fallback={null}>
                <mesh>
                    <planeGeometry args={[1,1.5]}/>
                    <meshStandardMaterial map={texture} transparent />
                </mesh>
            </Suspense>
        )
        
}

export default ReactThree