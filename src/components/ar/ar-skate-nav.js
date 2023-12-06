import { useContext } from "react"
import { ARContext } from "@/providers/arProvider"

const ARskateNav = () => {
    const [ar, setAR] = useContext(ARContext)

    return (
        <div className="ar-skate-nav-container">
            <h1>Skate Nav</h1>
        </div>
    )
}

export default ARskateNav