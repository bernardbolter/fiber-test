import {Html,  useProgress } from '@react-three/drei'

const ARloading = () => {
    const { active, progress, errors, item, loaded, total } = useProgress()
    console.log(active, progress, errors, item, loaded, total)
    console.log("loading")
    return (
        <Html center>{progress} % loaded</Html>
    )
}

export default ARloading