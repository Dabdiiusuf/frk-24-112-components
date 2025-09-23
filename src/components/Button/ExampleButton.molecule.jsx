import React from "react";
import styles from "./ExampleButton.module.css";

const ExampleButton = ({
  onClick,
  children,
  className,
  imageSet,
  width,
  height,
}) => {
  const cssVars = {
    ...(imageSet && {
      "--bg": `url(${imageSet.idle})`,
      "--bg-hover": `url(${imageSet.hover ?? imageSet.idle})`,
      "--bg-active": `url(${
        imageSet.active ?? imageSet.hover ?? imageSet.idle
      })`,
    }),
    ...(width && { "--w": typeof width === "number" ? `${width}px` : width }),
    ...(height && {
      "--h": typeof height === "number" ? `${height}px` : height,
    }),
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={[styles.button, imageSet && styles.skin, className]
        .filter(Boolean)
        .join(" ")}
      style={cssVars}
    >
      {children}
    </button>
  );
};

export default ExampleButton;
