import React, { useState } from "react";
import styles from './NavBar.module.css'
import logo from '../../assets/images/logo.svg'
import iconMenu from '../../assets/images/icon-hamburger.svg'
import iconClose from '../../assets/images/icon-close.svg'


const NavBar: React.FC = () => {

  const [ open, setOpen ] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <section className={styles.container}>
      <img src={iconMenu} alt="Icon-hamburger" 
      onClick={handleOpen}
      />
      <img src={logo} alt="Logo" />

      <nav className={ open ? styles.navbar : styles.dislabel}>
        <div className={styles.navbarContent}>
          <img src={iconClose} alt="icon-close" 
           onClick={handleOpen}
          />
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </nav>
    </section>
  );

};

export { NavBar };