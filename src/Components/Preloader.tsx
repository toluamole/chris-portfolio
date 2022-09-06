import { Flex, Text, VStack, chakra } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import backgroundImage from '../Assets/backgroundImage.svg';
import { Progress } from '@chakra-ui/react';
import { MotionBox } from './AnimatedPages';
import { AnimatePresence } from 'framer-motion';

const firstVariant = {
	initial: {
		transition: {delay: 0.8}
	},
	hidden: {
		opacity:[0, 1, 1, 0],
		y: ['0', '-.5em', '-.5em', '-.5em'],
		translateZ: '10px',
		transition: {
			duration: 2,
			ease: [0.42, 0, 0.58, 1],
			delay: 0.8
		},
		transitionEnd: {y: '-1.5em'}
	},
	exit: {
		y: '-1em'
	}
};

const secondVariant = {
	initial: {
		// y: 10,
		opacity: 0,
	},
	hidden: {
		opacity:[0, 0, 0, 1, 1],
		y:  '-1.5em',
		transition: {
			duration: 3,
			ease: 'anticipate',
			delay: 1
		},
		transitionEnd: {opacity:0}
	}
};

const blinkingText = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			ease: [0.42, 0, 0.58, 1],
			duration: 0.5,
			repeat: Infinity,
			delay: 5
		}
	}
};
const thirdVariant = {
	initial: {
		opacity: 0,
	},
	hidden: {
		opacity: [0, 0, 0, 1, 1],
		// y: '-1em',
		y: '-4em',
		transition: {
			duration: 0.8,
			ease: 'anticipate',
			delay: 4
		},
	}
};

const quoteVariant = {
	initial: {
		opacity: 0,
	},
	hidden: {
		opacity: 1,
		// y: '-1em',
		transition: {
			duration: 0.8,
			ease: [0.42, 0, 0.58, 1],
			delay: 7
		},
	}
};
 
export const Preloader = () => {
	const [width, setWidth] = useState(0);

	useEffect(()=> {
		setTimeout(() => {
			if( width < 100) {
				setInterval(()=> {
					setWidth((width)=>width + 20);
				}, 1000);
				// clearInterval(myInterval);
			}
		}, 5000);
	}, [width]);
	return(
		<AnimatePresence key={'box'}>
			<Flex
				h={'100vh'}
				w={'100vw'}
				bgImage={`url('${backgroundImage}')`}
				bgPosition='center'
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				direction={'column'}
				alignItems={'center'}
				justifyContent={'center'}
				color={' rgba(217, 217, 217, 1)'}
			>
				<VStack
					// spacing={'4px'}
				>
					<MotionBox 
						variants={firstVariant}
						initial={'initial'}
						animate={'hidden'}
						exit={'exit'}
					><Text fontSize={['20px','36px']}>I DESIGNED THIS EXPERINCE FOR YOU</Text></MotionBox>
					<MotionBox
						variants={secondVariant}
						initial={'initial'}
						animate={'hidden'}
					>
						<Text fontSize={['20px','36px']}>AND ME</Text>
					</MotionBox>
				</VStack>
				<VStack
					spacing={4}
				>
					<MotionBox
						variants={thirdVariant}
						initial={'initial'}
						animate={'hidden'}
						display={'flex'}
						flexDirection={'column'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<MotionBox

							variants={blinkingText}
							initial={'initial'}
							animate={'animate'}
							mb={4}
						>
							<Text fontSize={['20px','24px']}>Decrypting messages</Text>
						</MotionBox>
						<Progress 
							value={width} 
							size='xs' 
							width={'380px'}
							variant="primary"
							className='progressBar'
							transitionTimingFunction={'0.42, 0, 0.58, 1'}
							transition={'all'}
							transitionDuration={'0.2'}
							// isIndeterminate
						/>
					</MotionBox>
				</VStack>
				<VStack
					alignSelf={'flex-end'}
					justifyContent={'flex-end'}
					position={'fixed'}
					bottom={10}
					right={10}
				>
					<MotionBox
						variants={quoteVariant}
						initial={'initial'}
						animate={'hidden'}
					>
						<Text 
							textAlign={'right'}
							w={'200px'}
							fontSize={'20px'}
						>
							&quot;Look at usual things with unusual eyes&quot; <br/>
							<chakra.span textAlign={'right'}> -Vico Magistretti</chakra.span>
						</Text>
					</MotionBox>
				</VStack>
			</Flex>
		</AnimatePresence>
	);
};