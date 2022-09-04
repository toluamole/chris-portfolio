import { Box, BoxProps, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface IAnimatedPages{
    children: React.ReactNode;
}

export const MotionBox = motion<BoxProps>(Box);

export const  AnimatedPages = ({children}: IAnimatedPages) => {
	const animationKeyframes = keyframes`
		0% { opacity: 0};
		100% {opacity: 1};
	`;
	// const animation = {
	// 	initial: {opacity: 0},
	// 	animate: {
	// 		opacity: 1,
	// 		// x: 0,
	// 		transition: {
	// 			duration: 0.01,
	// 			ease: 'linear'
	// 		},
	// 	},
	// 	exit: {
	// 		opacity: 0,
	// 		transition: {
	// 			duration: 0.01,
	// 			ease: 'linear'
	// 		},
	// 	},
	// };
	return (
		<Box
			// variants={animation}
			// initial='initial'
			// animate='animate'
			// exit='exit'
			animation={`${animationKeyframes} 0.5s ease`}
		>
			{children}
		</Box>
	);
};