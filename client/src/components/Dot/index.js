import React from "react";
import styles from "./style.module.css";
export default ({ position }) => 
    <div 
        className={`${styles.dot} `}
        style={{
            position: "absolute", 
            top: `calc( ${position.y}px - 50px)`,
            left: `calc( ${position.x}px - 10px)`
        }} />
