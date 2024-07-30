"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

interface WorkSliderBtnsProps {
  containerStyles: string
  btnStyles: string
  iconsStyles: string
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper()

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()} aria-label="Previous slide" type="button">
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()} aria-label="Next slide" type="button">
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtns
