"use client";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-foundation-maastricht_blue-maastricht_blue_500-0 border border-solid checked:border-foundation-maastricht_blue-maastricht_blue_500-0 checked:border-[3px] checked:border-solid checked:focus:border-foundation-maastricht_blue-maastricht_blue_500-0",
};

const sizes = {
  xs: "h-[16px] w-[16px] rounded",
  sm: "h-[20px] w-[20px] rounded",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div
          className={`${className} flex items-center gap-[5px] cursor-pointer`}
        >
          <input
            className={`${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { CheckBox };
