'use client'
import { useEffect, useState } from "react"
import classes from "./galleryStyles.module.css"

//This component would ideally show you just the images in the database where favorite == true.
function favImageGallery() {
    const [images, setImages] = useState([])
    async function getImages() {
        const res = await fetch("http://localhost:8080/images", {
            method: "GET",
        })

        const resJSON = await res.json();
        setImages(resJSON);
    }

    useEffect(() => {
        getImages();
    }, [])

    return (
        <div>
            <div className={classes.container}>
                {
                    images.map((image) =>
                        <div>
                                <img src={image.imageAddress} className={classes.sizing}/>
                                <p className={classes.blurb}>{image.caption}</p>
                        </div>
                    )   
                }
            </div>
        </div>
    )
}

export default favImageGallery;