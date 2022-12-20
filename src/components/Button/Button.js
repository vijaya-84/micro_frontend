import React from "react";

import styles from "./Button.module.css";

export default function Button() {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.shuffleButton}>Shuffle</button>
        </div>
    );
}
