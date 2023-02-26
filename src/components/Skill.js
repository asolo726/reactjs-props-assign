import React from 'react';

const Skill = ({ image }) => {
  return (
    <div className="col-sm-3">
      <div className="row justify-content-center">
        <img className="w-50 " src={image.img} alt="" />
      </div>
      <div className="row text-center">
        <p>
          List skills technologies here. Aenean commodo ligula eget dolor.
          Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.
        </p>
      </div>
    </div>
  );
};

export default Skill;
