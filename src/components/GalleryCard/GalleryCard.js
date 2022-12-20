import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { getGallery } from "../../api/discover";
import styles from "./GalleryCard.module.css";

export default function GalleryCard() {
    const { categoryName } = useParams();
    let sortByDate;
    let filterByLike;

    const queryParams = new URLSearchParams(window.location.search);
    const queryStringDate = queryParams.get("sortByDate");
    const queryStringLike = queryParams.get("filterByLike");

    if (queryStringDate) sortByDate = queryStringDate;
    else if (queryStringLike) filterByLike = true;

    console.log(queryStringDate, queryStringLike);

    const [galleryList, setGalleryList] = useState([
        {
            url: "https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            isLikes: false,
            name: "Image",
        },
    ]);

    async function fetchGallery(categoryName, sortByLike, sortByDate, shuffle) {
        const galleryDetails = await getGallery(
            categoryName,
            sortByLike,
            sortByDate,
            shuffle
        );

        setGalleryList(galleryDetails);
    }

    useEffect(() => {
        fetchGallery(categoryName, filterByLike, sortByDate);
    }, [categoryName, sortByDate, filterByLike]);

    return (
        <div className={styles.imageGrid}>
            {galleryList.map((image) => (
                <div>
                    <img className={styles.imageCard} src={image.url} alt="" />
                </div>
            ))}
        </div>
    );
}
