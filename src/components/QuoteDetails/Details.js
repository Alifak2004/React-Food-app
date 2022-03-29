import React, { useEffect, useState } from 'react';
import classes from './Details.module.css';

const Details = ({ detail }) => {
	return (
		<div className={classes.container}>
			<div className={classes.box}>
				<div className={classes.quote}>{detail.title}</div>
				<div className={classes.author}>{detail.author}</div>
			</div>
		</div>
	);
};

export default Details;
