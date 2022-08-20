import React from 'react'
import styles from '../css/ProductItem.module.css'
import { Link } from "react-router-dom"

const ProductItem = (props) => {

    return (
        <div className={styles.Item} >
            <Link className={styles.Link} to={`/product/${props.seq}`} />
            <div className={styles.Img} >
                <img src={props.이미지} alt="product-img" />
            </div>

            <div className={styles.Contents} >

                <div className={styles.Contents1} >
                    <div>{props.이름}</div>
                    <div>{props.내용}</div>
                    <div>{props.주소}</div>                    
                </div>

                <div className={styles.Contents2} >
                    <div>시간</div>
                    <div className={styles.Contents3} >
                        <div className={styles.IconBox} >
                            <img src={`${process.env.PUBLIC_URL}/assets/like.png`} alt="like" />
                            <p>{props.관심}</p>
                        </div>
                        <div className={styles.IconBox} >
                            <img src={`${process.env.PUBLIC_URL}/assets/chat.png`} alt="chat" />
                            <p>{props.채팅}</p>
                        </div>
                        <div className={styles.IconBox} >
                            <img src={`${process.env.PUBLIC_URL}/assets/price.png`} alt="price" />
                            <p>{props.가격.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductItem