import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
};

const variants = {
  outline: {
    foundation_black_black_500_0:
      "border-foundation-black-black_500-0 border border-solid text-foundation-black-black_500-0",
    default_black:
      "border-default-black border border-solid text-foundation-black-black_500-0",
  },
  fill: {
    foundation_white_white_500_0:
      "bg-foundation-white-white_500-0 text-foundation-black-black_500-0",
    foundation_black_black_500_0:
      "bg-foundation-black-black_500-0 text-foundation-white-white_500-0",
  },
};

const sizes = {
  xl: "h-[50px] px-5 text-[16px]",
  "2xl": "h-[56px] px-4",
  sm: "h-[36px] px-3 text-[16px]",
  "3xl": "h-[56px] px-[34px] text-[16px]",
  lg: "h-[48px] px-3",
  xs: "h-[36px] px-2.5",
  md: "h-[42px] px-1.5 text-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "foundation_black_black_500_0",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xl", "2xl", "sm", "3xl", "lg", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "foundation_black_black_500_0",
    "default_black",
    "foundation_white_white_500_0",
  ]),
};

export { Button };
