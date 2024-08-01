import React from "react";

const sizes = {
  poppins_s_b_30:
    "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  montserrat_m_24:
    "font-montserrat text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  s_b_56:
    "text-[56px] font-semibold lg:text-[47px] md:text-[48px] sm:text-[42px]",
  m_48: "text-[48px] font-medium lg:text-[40px] md:text-[44px] sm:text-[38px]",
  m_20: "text-[20px] font-medium lg:text-[17px]",
  m_24: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  s_b_44:
    "text-[44px] font-semibold lg:text-[37px] md:text-[40px] sm:text-[34px]",
  s_b_24: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  m_30: "text-[30px] font-medium lg:text-[25px] md:text-[28px] sm:text-[26px]",
  m_56: "text-[56px] font-medium lg:text-[47px] md:text-[48px] sm:text-[42px]",
  m_16: "text-[16px] font-medium lg:text-[13px]",
  m_18: "text-[18px] font-medium lg:text-[15px]",
  textxl:
    "text-[44px] font-medium lg:text-[37px] md:text-[40px] sm:text-[34px]",
  headingxs:
    "text-[25px] font-bold lg:text-[21px] md:text-[23px] sm:text-[21px]",
  headings: "text-[320px] font-extrabold lg:text-[320px] md:text-[48px]",
};

const Heading = ({
  children,
  className = "",
  size = "m_20",
  as: Component = "h6",
  ...restProps
}) => {
  return (
    <Component
      className={`text-foundation-black-black_500-0 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
