"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};

const variants = {
  tarFoundationBlackblack500:
    "!border-foundation-black-black_500-0 border border-solid",
};

const sizes = {
  xs: "h-[244px] p-4 text-[16px]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarFoundationBlackblack500",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shapes[shape] || ""} ${sizes[size] || ""} ${
          variants[variant] || ""
        }`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarFoundationBlackblack500"]),
};

export { TextArea };
