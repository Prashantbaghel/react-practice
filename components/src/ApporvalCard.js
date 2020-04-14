import React from "react";

const ApporvalCard = (props) => {
  return (
    <div className="ui card">
      <div className="Content">{props.children} </div>
      <div className="extra content">
        <div className="two ui buttons">
          <div className="basic ui green button">Approve</div>
          <div className="basic ui red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApporvalCard;
