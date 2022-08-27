import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface IAnimatedPages{
    children: React.ReactNode;
}


export const MotionBox = motion<BoxProps>(Box);

export const  AnimatedPages = ({children}: IAnimatedPages) => {
	const animation = {
		initial: {opacity: 0},
		animate: {
			opacity: 1,
			// x: 0,
			// transition: {
			// 	duration: .5,
			// 	ease: 'easeIn'
			// },
		},
		exit: {opacity: 0},
	};
	return (
		<MotionBox
			variants={animation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{children}
		</MotionBox>
	);
};