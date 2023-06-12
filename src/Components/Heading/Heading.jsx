import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="popularheading">
      <h2 className="text-3xl dark:text-white md:text-4xl font-semibold mb-5 md:mb-8">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
