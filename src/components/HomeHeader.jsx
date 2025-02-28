import React from 'react'
import styles from '../styles/components/homeHeader.module.scss';
import PrimaryButton from './PrimaryButton';
import valouImg from '../assets/imgs/valou.jpg';

const HomeHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerLeft}>
                <h1>Valentin <br></br>Cannarozzo.</h1>
                <p>Mon travail artistique, qu’il s’agisse de dessin, de peinture ou de photographie, est une exploration profonde de
                    mon identité et une manière d’interroger les complexités du monde qui m’entoure.
                    C’est un espace où je me confronte à mes propres questionnements en tant qu’être humain tout en cherchant
                    à aborder des thèmes qui dépassent l’individuel, notamment ceux liés à la santé mentale et à des enjeux
                    sociaux fondamentaux. Ces thématiques, souvent taboues ou ignorées, sont pour moi des piliers essentiels pour
                    comprendre notre époque et ouvrir des dialogues sincères.</p>
                <div className={styles.btnContainer}>
                    <PrimaryButton text="En savoir plus" path="/" />
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.imgWrapper}>
                    <img src={valouImg} alt="photo de Valentin qui peins un tableau" />
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
