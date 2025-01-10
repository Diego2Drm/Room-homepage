import React, { useEffect, useRef, useState } from "react";
import { data, ImageKeys } from '../../utils/data'
import arrowLeft from '../../assets/images/icon-angle-left.svg'
import arrowRight from '../../assets/images/icon-angle-right.svg'
import style from './styles.module.css'
import arrow from '../../assets/images/icon-arrow.svg'
import mHero1 from '../../assets/images/mobile-image-hero-1.jpg'
import dHero1 from '../../assets/images/desktop-image-hero-1.jpg'
import mHero2 from '../../assets/images/mobile-image-hero-2.jpg'
import dHero2 from '../../assets/images/desktop-image-hero-2.jpg'
import mHero3 from '../../assets/images/mobile-image-hero-3.jpg'
import dHero3 from '../../assets/images/desktop-image-hero-3.jpg'


export interface Data {
  id: number,
  imgMobile: ImageKeys,
  imgDesktop: ImageKeys,
  title: string,
  info: string,
}

const Slider: React.FC = () => {

  const [dataImages, setDataImages] = useState<Data[]>([])

  useEffect(() => {
    setDataImages(data)
  }, []);

  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentindex] = useState<number>(0);

  useEffect(() => {
    const listNode = listRef.current;

    if (listNode) {
      const infoNode = listNode.querySelectorAll("li")[currentIndex];

      if (infoNode) {
        infoNode.scrollIntoView({ behavior: "smooth" })
      }
    }

  }, [currentIndex])

  const showSlider = (direction: string) => {
    if (direction === "prev") {
      setCurrentindex(curr => {
        const firsSlide = currentIndex === 0;
        return firsSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === dataImages.length - 1;
      if (!isLastSlide) {
        setCurrentindex(curr => curr + 1)
      }
    }
  }


  const imageMap: Record<ImageKeys, string> = {
    'src/assets/images/mobile-image-hero-1.jpg': mHero1,
    'src/assets/images/desktop-image-hero-1.jpg': dHero1,
    'src/assets/images/mobile-image-hero-2.jpg': mHero2,
    'src/assets/images/desktop-image-hero-2.jpg': dHero2,
    'src/assets/images/mobile-image-hero-3.jpg': mHero3,
    'src/assets/images/desktop-image-hero-3.jpg': dHero3,
  }


  return (
    <section className={style.mainContainer}>
      <div className={style.sliderContainer}>
        <div className={style.arrows}>
          <button onClick={() => showSlider('prev')}>
            <img src={arrowLeft} alt="icon-arrow-left" />
          </button>
          <button onClick={() => showSlider('next')}>
            <img src={arrowRight} alt="icon-arrow-right"
            />
          </button>
        </div>
        <article className={style.containerInfo}>
          <ul ref={listRef}>
            {
              dataImages.map(data => (
                <li key={data.id}>
                  <figure className={style.contentImg}>
                    <img src={imageMap[data.imgMobile]} alt={data.title} />
                    <img src={imageMap[data.imgDesktop]} alt={data.title} />
                  </figure>

                  <div>
                    <h3>{data.title}</h3>
                    <p>{data.info}</p>
                    <a href="#" className={style.iconArrow}>
                      <p>SHOP NOW</p>
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </li>
              ))
            }
          </ul>

        </article>
      </div>
    </section>
  );
};

export { Slider }; 