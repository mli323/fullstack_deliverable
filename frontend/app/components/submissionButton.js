import styles from "./buttonStyles.module.css"

export default function submissionButton() {
    return <a href = "http://localhost:3000/imagesubmission">
        <button className={styles.submitButton}>
            <img src = "https://media.discordapp.net/attachments/1278830213802885193/1418421087196414052/Addbutton.png?ex=68ce0f14&is=68ccbd94&hm=37912d4d72b408e5aff094b934faf76151bc5d85cbc778f5d81e61f92b75266c&=&format=webp&quality=lossless&width=116&height=116"/>
            
        </button>
        </a>
}