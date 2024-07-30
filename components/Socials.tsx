import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

interface Social {
  icon: JSX.Element
  path: string
}

const socials: Social[] = [
  { icon: <FaGithub />, path: "https://github.com/nhjeweli" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/nhjeweli" },
  { icon: <FaYoutube />, path: "https://youtube.com/nhjeweli" },
  { icon: <FaTwitter />, path: "https://twitter.com/nhjeweli" }
]

interface SocialsProps {
  containerStyles?: string
  iconStyles?: string
}

const Socials: React.FC<SocialsProps> = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
