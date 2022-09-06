import React from "react";
import WhiteCheck from "../../images/white-check.webp";

const ContentWithIcon = ({ icon, content, bgGradient }) => {
  return (
    <div className="items-center flex gap-4">
      <div>
        <img src={WhiteCheck} alt="check" style={{ flex: 1 / 6 }} />
      </div>
      <p className="text-white" style={{ flex: 5 / 6 }}>
        {content}
      </p>
    </div>
  );
};

export default ContentWithIcon;
