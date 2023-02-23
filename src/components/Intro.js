import React from 'react';

let keyboardImg = require('./../images/keyboard.jpg');

const Intro = ({}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <img src={keyboardImg} alt="image not found" />
        </div>
        <div className="col-8">
          <p>
            Jim Bob is a dynamic developer, a lifelong learner and an
            experienced public cloud developer. He can bring skills to your team
            to mentor others. Lead other team members to develop their skills.
            culpa voluptatibus quasi sunt facere, dolorem aspernatur impedit
            voluptates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
