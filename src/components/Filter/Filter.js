import React, { useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";

import styles from "./Filter.module.css";

export default function Filter() {
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const [filter, setFilter] = useState({});

    function onFilterChange(event) {
        if (event.target.value == "asc" || event.target.value == "desc") {
            navigate({
                search: createSearchParams({
                    sortByDate: event.target.value,
                }).toString(),
            });
        } else {
            navigate({
                search: createSearchParams({
                    filterByLike: event.target.value,
                }).toString(),
            });
        }
    }

    return (
        <div className={styles.filter}>
            <select onChange={onFilterChange}>
                <option value="" selected disabled style={{ color: "gray" }}>
                    Filter
                </option>
                <option name="sortByDate" value="asc">
                    Sort by Created Date(asc)
                </option>
                <option name="sortByDate" value="desc">
                    Sort by Created Date(desc)
                </option>
                <option name="sortByFilter" value="like">
                    Filter by like
                </option>
            </select>
        </div>
    );
}
