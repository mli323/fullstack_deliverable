'use client'
import { useState } from "react"
import styles from "./newImageStyles.module.css"

function newImage() {
    async function onSubmit() {
        const newImageBody = {
            caption,
            favorite,
            imageAddress
        }

        const res = await fetch("http://localhost:8080/images", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newImageBody)
        })
    }

    const [caption, setCaption] = useState("")
    const [favorite, setFavorite] = useState("")
    const [imageAddress, setAddress] = useState("")

    return (
        <div className = {styles.form}>
            <div>
                <div>
                    <label htmlFor="caption">Caption: </label>
                    <input
                        name="caption"
                        value={caption}
                        onChange={(event) => setCaption(event.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="favorite">Favorite: </label>
                    <input
                        type="checkbox"
                        onChange={(event) => setFavorite(true)}
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="imageAddress">Image Address: </label>
                    <input
                        value={imageAddress}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
            </div>
            <br/>
            <a href="http://localhost:3000">
                <button onClick={onSubmit}>Add Image</button>
            </a>
        </div>
    )
}
export default newImage