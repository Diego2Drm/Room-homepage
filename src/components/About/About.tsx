import React from "react";
import style from './styles.module.css'
import imageAboutDark from '../../assets/images/image-about-dark.jpg'
import imageAboutLight from '../../assets/images/image-about-light.jpg'

const About: React.FC = () => {
  return (
    <section className={style.containerAbout}>
      <img src={imageAboutDark} alt="image-about-dark" />
      <div className={style.content}>
        <h3>About our furniture</h3>
        <p>Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <img src={imageAboutLight} alt="image-about-light" />
    </section>
  )
}

export { About };