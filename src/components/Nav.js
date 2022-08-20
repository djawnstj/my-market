import React from 'react'
import styles from '../css/Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.Nav}>

            <div className={styles.Logo}>
                <p>당근마켓</p>
            </div>

            <div className={styles.SearchBox}>
                <input type="text" />
            </div>

            <div className={styles.Menu}>
                <img src={`${process.env.PUBLIC_URL}/assets/menu.png`} alt="menu" />
            </div>

        </div>
    )
}

export default Nav;