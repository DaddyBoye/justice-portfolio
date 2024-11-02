import React from 'react';

const SkillCard = ({ icon, name, color }) => {
  return (
    <div className='content-card py-[5px] flex space-x-2 items-center justify-center rounded-md'>
      <div className='text-3xl flex items-center' style={{ color, padding: '0px 1px' }}>{icon}</div>
      <p className='text-center text-sm font-bold text-[#eaeaea]'>{name}</p>
    </div>
  );
};

export default SkillCard;
