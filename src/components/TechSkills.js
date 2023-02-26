import React from 'react';
import Skill from './Skill.js';

const TechSkills = ({ imageList }) => {
  return (
    <div className="container">
      <div className="row">
        {imageList.map((imageList) => (
          <Skill key={imageList.name} image={imageList} />
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
