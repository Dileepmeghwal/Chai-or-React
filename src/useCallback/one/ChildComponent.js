import React from 'react'
import { memo } from 'react';

const ChildComponent = () => {
    console.log('child compomnent');
  return (
    <div>ChildComponent</div>
  )
}

export default memo(ChildComponent) 