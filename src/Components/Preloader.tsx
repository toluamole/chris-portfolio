import { Flex, Text, VStack, chakra, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import backgroundImage from '../Assets/backgroundImage.svg';
import { MotionBox } from './AnimatedPages';
import { AnimatePresence } from 'framer-motion';
import ProgressBar from './ProgressBar';


const firstVariant = {
	initial: {
		// transition: {delay: 0.8},
		marginTop: '70px'
	},
	
	hidden: {
		marginTop:['70px', '-1px', '-1px', '-92px', '-92px', '-200px', ],
		transition: {
			duration: 3,
			ease: 'easeOut',
			delay: 0.8
		}
	},
	exit: {
		marginTop: '-300px'
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
			duration: 1,
			repeat: Infinity,
			delay: 3
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
		y: '-5em',
		transition: {
			duration: 0.8,
			ease: 'easeOut',
			delay: 3
		},
	}
};

const quoteVariant = {
	initial: {
		opacity: 0,
		y: '1em'
	},
	hidden: {
		opacity: 1,
		y: '-1em',
		transition: {
			duration: 0.8,
			ease: 'easeOut',
			delay: 5
		},
	}
};
 
export const Preloader = () => {
	const [completed, setCompleted] = useState(0);

	useEffect(() => {
		if(completed < 100 ) {
			setInterval(() => setCompleted((completed) => completed + 5), 2000);
		}
	}, [completed]);
	return(
		<AnimatePresence exitBeforeEnter  >
			<MotionBox
				animate={{
					opacity: 1,
				}}
				exit={{
					opacity: 0.5,
					transition: {
						delay: 12,
						ease: 'linear',
						duration: 10
					}
				}}
			>
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
						align={'center'}
						h={['50px','60px']}
						// pb={'15px'}
						overflow={'hidden'}
						// spacing={'4px'}
					>
						<MotionBox 
							fontSize={['18px','30px']} 
							textAlign={'center'}
							textShadow={'0 0 5px #fff'}
							marginBottom={['60px','40px']} 
							boxSizing={'border-box'}
							variants={firstVariant}
							initial={'initial'}
							animate={'hidden'}
							exit={'exit'}
						>
							I DESIGNED THIS EXPERINCE FOR YOU
						</MotionBox>
						<Box 
							fontSize={['18px','30px']}
							// marginBottom={['60px','50px']} 
							boxSizing={'border-box'}
							textShadow={'0 0 5px #fff'}
						>
							AND ME
						</Box>
					</VStack>
					<VStack
						// spacing={4}
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
								mb={2}
							>
								<Text fontSize={['18px','24px']}>Decrypting messages</Text>
							</MotionBox>
							<ProgressBar bgcolor={'#CA4F29'} completed={completed}/>
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
								fontSize={'16px'}
								textShadow={'0 0 5px #fff'}
							>
								&quot;Look at usual things with unusual eyes&quot; <br/>
								<chakra.span textAlign={'right'}> -Vico Magistretti</chakra.span>
							</Text>
						</MotionBox>
					</VStack>
				</Flex>
			</MotionBox>
		</AnimatePresence>
	);
};