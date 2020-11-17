import React from 'react';

import './Button.scss';

const Button = ({clickHandler}) => {
  return ( 
    <div className="button" onClick={clickHandler}>
      <p>Save</p>
    </div>
   );
}
 
export default Button;