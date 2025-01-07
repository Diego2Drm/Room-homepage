import React, { useEffect, useRef, useState } from "react";
import { data } from '../../utils/data'
import arrowLeft from '../../assets/images/icon-angle-left.svg'
import arrowRight from '../../assets/images/icon-angle-right.svg'
import style from './styles.module.css'
import arrow from '../../assets/images/icon-arrow.svg'

interface Data {
  id: number,
  imgMobile: string,
  imgDesktop: string,
  title: string,
  info: string
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

    if(listNode){
      const infoNode = listNode.querySelectorAll("li")[currentIndex];

      if(infoNode){
        infoNode.scrollIntoView({ behavior: "smooth"})
      }
    }
    
}, [currentIndex])

  const showSlider = ( direction : string) => {
    if(direction === "prev"){
      setCurrentindex( curr => {
        const firsSlide = currentIndex === 0;
        return firsSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === dataImages.length - 1;
      if(!isLastSlide){
        setCurrentindex( curr => curr + 1)
      }
    }
  }
  return (
    <section className={style.mainContainer}>
      <div className={style.sliderContainer}>
        <figure className={style.arrows}>
          <img src={arrowLeft} alt="icon-arrow-left" 
          onClick={() => showSlider('prev')}
          />
          <img src={arrowRight} alt="icon-arrow-right" 
          onClick={() => showSlider(' ')}
          />
        </figure>
        <article className={style.containerInfo}>
          <ul ref={listRef}>
            {
              dataImages.map(data => (
                <li key={data.id}>
                  <img src={data.imgMobile} alt={data.title} />

                  <div>
                    <h3>{data.title}</h3>
                    <p>{data.info}</p>
                  </div>

                  <a href="#" className={style.iconArrow}>
                    <p>SHOP NOW</p>
                    <img src={arrow} alt="" />
                  </a>
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