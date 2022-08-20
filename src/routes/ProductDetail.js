import React from 'react'
import { useParams } from "react-router-dom"
import styles from "../css/ProductDetail.module.css"

const ProductDetail = () => {

    const { productId } = useParams();

    const product = {
        seq: 1,
        이름: "아이폰",
        가격: 1000000,
        내용: "거의 새거에요",
        관심: 5,
        채팅: 0,
        주소: "서울특별시 동작구",
        이미지: "https://placedog.net/100/100"
    }

    return (
        <div>
            <div>
                <img className={styles.Img} src={ product.이미지 } alt="product img" />
            </div>
            
            <div className={styles.Contents}>

                <div className={styles.Title}>
                    <div>
                        <h2>상품 이름</h2>
                        <p>주소</p>
                    </div>
                    <div>
                        <p>닉네임</p>
                        <p>시간</p>
                    </div>
                </div>

                <div className={styles.Content}>
                    Ut est tempor incididunt ex. Adipisicing sint ad id velit labore laboris in duis ad enim. Veniam dolor exercitation officia nisi in excepteur ut exercitation cupidatat ex ipsum.

Velit ad labore veniam non laborum cillum ad mollit. Aute occaecat proident eu irure esse laborum laboris id anim laborum laboris qui exercitation ad. Est ullamco est incididunt adipisicing sit. Magna velit velit ut ea amet aliquip. Fugiat laborum quis sit fugiat. Culpa velit ex irure sint fugiat excepteur exercitation ullamco consequat est cupidatat.

Cillum ut minim nisi qui qui dolore pariatur qui tempor proident laborum. Cupidatat velit sint sint excepteur in ad in et. Reprehenderit amet nulla eu reprehenderit voluptate ad mollit occaecat pariatur do nulla cillum sint occaecat. Exercitation enim nulla est consequat qui Lorem labore.

Aute mollit consequat do duis sit laboris proident irure non voluptate velit. Pariatur dolor elit proident adipisicing aute nisi eu labore elit cupidatat. Id in labore fugiat dolore voluptate exercitation consequat amet pariatur Lorem magna. Nulla veniam esse qui eiusmod esse.

Ipsum fugiat magna incididunt aliquip adipisicing proident. Adipisicing in ut aliquip aliqua labore. Fugiat amet excepteur reprehenderit in esse dolor do nostrud nostrud elit commodo laboris velit officia.

Ex minim nostrud pariatur aliquip tempor fugiat sit exercitation eiusmod. Commodo nisi esse fugiat nisi. Reprehenderit enim proident consectetur aliqua eiusmod culpa deserunt occaecat et exercitation. Adipisicing qui dolor cupidatat pariatur deserunt deserunt ea nostrud ad. Ullamco dolor deserunt nulla Lorem ipsum minim minim sit sunt in culpa culpa. Reprehenderit amet eu fugiat pariatur. Ullamco ad aliquip consequat fugiat exercitation aute.

Sunt non dolor eiusmod ad mollit consectetur cupidatat quis esse Lorem et. Pariatur aliqua laboris exercitation cupidatat eiusmod. Ea cupidatat adipisicing ad proident pariatur tempor velit elit.

Nulla mollit in tempor duis sunt aute minim elit exercitation incididunt adipisicing qui et ea. Exercitation aute aliqua sint ea aliqua. Velit aute dolor mollit deserunt incididunt fugiat ea labore. Enim consequat commodo nulla magna ut consectetur laboris ex incididunt.

Mollit pariatur tempor id labore eu sunt nostrud qui deserunt. Velit anim cillum occaecat dolore magna incididunt elit elit. Laboris aliqua enim incididunt aute in minim ad velit excepteur culpa sunt nisi quis. Excepteur fugiat Lorem magna elit ad id elit. Non proident exercitation quis excepteur et laboris id anim consequat velit.

Commodo aute sit sint nulla voluptate. Cupidatat deserunt reprehenderit labore aliqua ad quis. Ipsum in commodo amet excepteur qui commodo aute fugiat.
                </div>

            </div>
            
        </div>
    );
}

export default ProductDetail;