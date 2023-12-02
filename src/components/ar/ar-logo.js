import Arrow from "@/svg/Arrow"
import Image from "next/image"
import Link from "next/link"

const ARlogo = () => {
    return (
        <Link href="/" className="ar-logo-container">
            <div className="ar-logo-back">
                <Arrow />
            </div>
            <Image
                src="/mega_logo_transparent.png"
                width={100}
                height={25}
                alt="megacities logo"
            />
        </Link>
    )
}

export default ARlogo