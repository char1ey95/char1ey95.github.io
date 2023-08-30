'use client'

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from './animation.json'

const Animation = () => {
    return (
        <Lottie
            loop={true}
            animationData={lottieJson}
            play={true}
        />
    )
}

export default Animation