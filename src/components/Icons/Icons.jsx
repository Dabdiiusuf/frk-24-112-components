import React from 'react';
import X from './Images/X.png';
import O from  './Images/O.png';

const Icons = () => {

	return(
		<div>
			<img src={X} alt="X icon" />
			<img src={O} alt="O icon" />
		</div>
	);
}

export default Icons;
