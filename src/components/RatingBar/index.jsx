"use client";
import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
  children,
  className = "",
  starCount = 5,
  color = "grey",
  activeColor = "#FFC403",
  isEditable = false,
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={isEditable}
        className={className}
        count={starCount}
        isHalf={false}
        color={color}
        activeColor={activeColor}
        {...restProps}
      />
      {children}
    </>
  );
};

export { RatingBar };
