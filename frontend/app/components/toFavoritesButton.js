import styles from "./buttonStyles.module.css"

export default function submissionButton() {
    return <a href = "http://localhost:3000/favimages">
        <button className={styles.favButton}>
            <img src = "https://media.discordapp.net/attachments/1278830213802885193/1418426546141659217/like.png?ex=68ce1429&is=68ccc2a9&hm=96c0a7bf6fe0504d44b253834da019e835538daa845ad2ddef54c24f2b95c10c&=&format=webp&quality=lossless&width=96&height=95"/>
        </button>
        </a>
}