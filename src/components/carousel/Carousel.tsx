import React from 'react'
import styles from './Carousel.module.css'
import { Carousel as AntCarousel, Image } from 'antd';
import carouselImage1 from "../../assets/images/carousel_1.jpg"
import carouselImage2 from "../../assets/images/carousel_2.jpg"
import carouselImage3 from "../../assets/images/carousel_3.jpg"

export const Carousel1: React.FC = () => {
  return <div>
    <AntCarousel autoplay className={styles.slider} >
      <Image src={carouselImage1} preview={false}></Image>
      <Image src={carouselImage2} preview={false}></Image>
      <Image src={carouselImage3} preview={false}></Image>

    </AntCarousel>
  </div>

}