import React from "react";

import GalleryCard from "../../components/GalleryCard/GalleryCard";
import Button from "../../components/Button/Button";
import Category from "../../components/Category/Category";

import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Category />
                <GalleryCard />
            </div>
            <Button />
        </div>
    );
}
