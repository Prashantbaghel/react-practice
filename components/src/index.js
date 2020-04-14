import React from "react";
import ReactDOM, { render } from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApporvalCard from "./ApporvalCard";

const App = () => {
  return (
    <div className="UI comment container">
      <ApporvalCard>
        <CommentDetails
          author="Prashant"
          timeAgo="Today at 12 AM"
          comment="Comnment 1"
          avatar={faker.image.avatar()}
        />
      </ApporvalCard>

      <ApporvalCard>
        <CommentDetails
          author="Rito"
          timeAgo="Today at 10 AM"
          comment="Comnment 2"
          avatar={faker.image.avatar()}
        />
      </ApporvalCard>
      <ApporvalCard>
        <CommentDetails
          author="Priyank"
          timeAgo="Today at 8 AM"
          comment="Comnment 3"
          avatar={faker.image.avatar()}
        />
      </ApporvalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
