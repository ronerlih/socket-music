import React from "react";
import styles from "./style.module.css";
export default ({ dot }) => 
    <div 
        className={`${styles.dot} `}
        style={{
            position: "absolute",
            backgroundColor: dot.color,
            top: `calc( ${dot.position.y}px - 40px)`,
            left: dot.position.x
        }} ></div>
