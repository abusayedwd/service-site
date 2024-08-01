"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};

const variants = {
  fill: {
    foundation_maastricht_blue_maastricht_blue_50_1:
      "bg-foundation-maastricht_blue-maastricht_blue_50-1",
  },
  outline: {
    foundation_black_black_500_0:
      "border-foundation-black-black_500-0 border border-solid text-foundation-black-black_400-0",
  },
};

const sizes = {
  xs: "h-[40px] pl-3 pr-[34px] text-[16px]",
  sm: "h-[54px] px-4 text-[16px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "sm",
      color = "foundation_black_black_500_0",
      onSuffixClick,
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text text-[16px] ${
          (shape && shapes[shape]) || ""
        } ${variants[variant]?.[color] || variants[variant] || ""} ${
          sizes[size] || ""
        }`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && (
          <div onClick={onSuffixClick} className="cursor-pointer">
            {suffix}
          </div>
        )}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "foundation_maastricht_blue_maastricht_blue_50_1",
    "foundation_black_black_500_0",
  ]),
  onSuffixClick: PropTypes.func,
};

export { Input };
