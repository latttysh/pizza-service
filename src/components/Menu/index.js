import styles from './Menu.module.scss'
import React from 'react';

function Menu(){

  return(
    <div className={styles.menu}>
      {console.log(styles)}
      <div className={styles.menu__logo}><img src="./img/menu.png" alt="menu" /></div>
      <div className={styles.menu__img}><img src="./img/home.png" alt="home" /></div>
      <div className={styles.menu__img}><img src="./img/favorite.png" alt="favorite" /></div>
      <div className={styles.menu__img}><img src="./img/settings.png" alt="settings" /></div>
      <div className={styles.menu__img}><img src="./img/help.png" alt="help" /> </div>
    </div>
  );
}
export default Menu;