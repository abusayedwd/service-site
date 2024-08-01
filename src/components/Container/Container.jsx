import React from "react";

const Container = ({ children, className }) => {
    return <div className={`w-full max-w-[1240px] mx-auto ${className}`}>{children}</div>;
};

export default Container;
