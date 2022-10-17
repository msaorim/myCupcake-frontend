/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img className={styles.imagem} src={props.image} alt="imagem" />
            </div>
            <div className={styles.card_name}>
                {props.name}
            </div>
            <div className={styles.card_description}>
                {props.description}
            </div>
            <div className={styles.card_price}>
                R$ {props.price}
            </div>
        </div>)
}