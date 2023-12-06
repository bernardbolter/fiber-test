"use client"

import { useEffect, useContext, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'

import { ARContext } from '@/providers/arProvider'
import ARlogo from '@/components/ar/ar-logo'
import ARnav from '@/components/ar/ar-nav'
import ARinfo from '@/components/ar/ar-info'
import ARstartImage from '@/components/ar/ar-start-image'
import ARskateNav from '@/components/ar/ar-skate-nav'

import cities from '../../../data/cities.json'

import '../../../style/ar.scss'

const ARwindow = dynamic(
    () => import('../../../components/ar/ar-window'),
    { ssr: false}
)

const ARcity = props => {
    console.log(props)
    const [ar, setAR] = useContext(ARContext)
    const [startImage, setStartImage] = useState('')
    console.log(ar.currentCity)
    
    useEffect(() => {
        const selectMegacity = cities.find(city => city.slug === props.params.slug)
        // console.log(selectMegacity)
        const selectTextures = []
        setStartImage(`https://digitalcityseries.com/art/megacities/${selectMegacity.slug}/${selectMegacity.slug}_sm.jpg`)

        selectMegacity.cities.map(city => {
            selectTextures.push(`https://digitalcityseries.com/art/megacities/${selectMegacity.slug}/${city.slug}/${city.slug}_sm.gif`)
        })
        
        setAR(state => ({ ...state, currentCity: selectMegacity, cityTextures: selectTextures }))
    }, [])

    return (
        <div className="ar-city-container">
            <ARwindow />
            <ARlogo />
            {ar.firstClick && <ARinfo />}
            <ARnav />
            {ar.currentCity.type === 'skateboarding' && <ARskateNav />}
            {ar.showStartImage && startImage.length !==0 && <ARstartImage imageSrc={startImage}/>}
        </div>
    )
}

export default ARcity

export const getStaticPaths = async () => {
    const paths = megacities.map(megacity => ({
        params: { slug: megacity.slug }
    }))

    return { paths, fallback: false}
}