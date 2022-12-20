import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getCategories } from "../../api/discover";
import Filter from "../../components/Filter/Filter";

import styles from "./Category.module.css";

export default function Category() {
    const navigate = useNavigate();
    let { categoryName } = useParams();

    const [categoryList, setCategoryList] = useState([
        { name: "Wildlife" },
        { name: "Landscape" },
        { name: "Cars" },
        { name: "Mountain" },
    ]);

    async function fetchCategories() {
        const result = await getCategories();
        setCategoryList(result);

        // find the find element from result and set the default route to the first category from the result
        if (!categoryName) {
            const defaultCategory = categoryList[0];
            const defaultCategoryName = defaultCategory.name;
            navigate(`/${defaultCategoryName}`);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    function navigateCategory(categoryName) {
        navigate(`/${categoryName}`);
    }

    return (
        <div className={styles.containerWrapper}>
            <>
                {categoryList.map((category) => (
                    <div
                        onClick={() => navigateCategory(category.name)}
                        className={styles.category}
                    >
                        {category.name}
                    </div>
                ))}
            </>

            <div className={styles.filterContainer}>
                <Filter />
            </div>
        </div>
    );
}
