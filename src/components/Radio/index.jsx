"use client";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-foundation-black-black_500-0 border border-solid shadow-bs checked:border-foundation-black-black_500-0 checked:border-[3px] checked:border-solid checked:focus:border-foundation-black_500_0",
};

const sizes = {
  xs: "h-[24px] w-[24px]",
};

const Radio = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "radio_id",
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center gap-[5px] cursor-pointer`}
      >
        <input
          className={`${(size && sizes[size]) || ""} ${
            (variant && variants[variant]) || ""
          }`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  }
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
