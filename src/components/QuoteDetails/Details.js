import React, { useEffect, useState } from 'react';
import classes from './Details.module.css';

const Details = ({ detail }) => {
	const dateMod = new Date(detail.date);

	const day = dateMod.getDate();
	const month = dateMod.toLocaleString('Lebanon', { month: 'long' });
	const year = dateMod.getFullYear();
	const hours = dateMod.getHours();
	const minutes = dateMod.getMinutes();
	const seconds = dateMod.getSeconds();

	const dateDiv = (
		<div className={classes.date}>
			{day}/{month}/{year} {hours}-{minutes}-{seconds}
		</div>
	);

	return (
		<div className={classes.container}>
			<div className={classes.box}>
				<div className={classes.quote}>{detail.title}</div>
				<div className={classes.author}>{detail.author}</div>
				{dateDiv}
			</div>
		</div>
	);
};

export default Details;
