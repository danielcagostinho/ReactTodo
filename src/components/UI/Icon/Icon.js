import React from 'react';

import check from '../../../assets/icons/Check.png';
import deleteTask from '../../../assets/icons/Delete.png';
import addTask from '../../../assets/icons/AddTask.png';

import './Icon.scss';


const Icon = ({iconType, size = 1}) => {

  let icon = null;
  switch (iconType) {
    case 'add': 
      icon = <img alt="Plus Icon" src={addTask} />
      break;
    case 'complete': 
      icon = <img alt="Check Icon" src={check} />
      break;
    case 'incomplete': 
      icon = <div className="Icon Incomplete"/>
      break;
    case 'delete': 
      icon = <img alt="Plus Icon" src={deleteTask} />
      break;
    default: 
      icon = <img alt="Plus Icon" src={addTask} />
      break;
  }


  return ( 
    <div className="Icon">
      {icon}
    </div>
   );
}
 
export default Icon;