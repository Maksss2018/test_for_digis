import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { socials } from './Constants';
const SocialsList = ({ WrapperComponent }) => {
  return (
    <>
      <WrapperComponent className=" d-none d-md-flex align-items-center text-light ">
        You can find me at:{`  `}
      </WrapperComponent>
      {socials.map((icon, ind) => (
        <WrapperComponent className="d-flex align-items-center" key={`${ind}-top-socials-icons`}>
          <SocialIcon {...icon} />
        </WrapperComponent>
      ))}
    </>
  );
};

export default SocialsList;
