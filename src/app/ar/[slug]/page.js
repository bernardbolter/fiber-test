"use client"

import { useEffect, useContext } from 'react'
import dynamic from 'next/dynamic'

import { ARContext } from '@/providers/arProvider'
import ARlogo from '@/components/ar/ar-logo'
import ARnav from '@/components/ar/ar-nav'
import ARinfo from '@/components/ar/ar-info'

import cities from '../../../data/cities.json'

const ARwindow = dynamic(
    () => import('../../../components/ar/ar-window'),
    { ssr: false}
)

const ARcity = props => {
    const [ar, setAR] = useContext(ARContext)
    
    useEffect(() => {
        const selectMegacity = cities.find(city => city.slug === props.params.slug)
        const selectTextures = []
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