import React from 'react';
import LeftScreen from './LeftScreen';
import RightScreen from './RightScreen';

const Screen = () => {
  return (
    <div class="h-full w-full flex bg-red-100">
      <LeftScreen />
      <RightScreen />
    </div>
  );
};

export default Screen;
