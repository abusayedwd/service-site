import PropTypes from "prop-types";

const sizes = {
  poppins_r_30:
    "text-[30px] font-normal not-italic lg:text-[25px] md:text-[28px] sm:text-[26px]",
  outfit_r_16: "text-[16px] font-normal not-italic lg:text-[13px]",
  r_16: "text-[16px] font-normal not-italic lg:text-[13px]",
  r_22: "text-[22px] font-normal not-italic lg:text-[18px]",
  r_18: "text-[18px] font-normal not-italic lg:text-[15px]",
  textxs: "text-[14px] font-normal not-italic",
  texts: "text-[15px] font-normal not-italic",
  textmd: "text-[16px] font-normal not-italic lg:text-[13px]",
  textlg: "text-[18px] font-normal not-italic lg:text-[15px]",
};

const Text = ({
  as: Component = "p",
  children,
  className = "",
  size = "r_16",
  ...restProps
}) => {
  return (
    <Component
      className={`text-foundation-maastricht_blue-maastricht_blue_500-0 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export { Text };
