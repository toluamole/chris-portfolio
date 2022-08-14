import { VStack, Box, Text, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface IImageBoxProps{
    children: React.ReactNode;
    imageTitle?: string;
	width: string
	content: string
	display?: 'none' | 'block'
}

export const ImageBox = ({children, imageTitle, width,content, display}:IImageBoxProps) => {
	const animationKeyframes = keyframes`
		0% { opacity: 0; transform: scale(5); }
		50% {opacity: 0.7; transform: scale3d(1.5,1.5,1);}
		100% {transform:  opacity: 1, transform: scale(2)};
	`;

	const animation = `${animationKeyframes} .2s ease`;
	return (
		<VStack 
			// border={'1px'}
			borderRadius={'16px'}
			bgColor={'#F4F0EB'}
			p={2} mb={'28px'}
			width={['60%',width]}
		>
			<Box
				as={motion.div}
				position={'relative'}
				// onClick={() => handleNavigate(project.id)}
				_before={{
					content:'" "',
					position:'absolute',
					width:'100%',
					height:'100%',
					top:0, 
					left:0,
					background:'rgba(0,0,0,0.5)',
					opacity:0,
					transition: 'all 0.5s',
					borderRadius: '16px'
				}}
				_after={{
					content: `'${content}'`,
					width:'80px',
					height: '80px',
					color:'#fff',
					ZIndex:'1',
					bottom:'45%',
					left: '45%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					bg:'#CA4F29',
					borderRadius: '50%',
					position:'absolute',
					opacity:0,
					transition: 'all 0.2s cubic-bezier(.17,.67,.83,.67)'
				}}
				_hover={{
					_after: {
						opacity: 1,
						animation: animation
					},
					_before: {
						opacity: 1
					}
				}}
			>
				{children}
			</Box>
			<Text 
				alignSelf={'flex-start'}
				color={'#CA4F29'}
				fontSize={'16px'}
				fontWeight={700}
				py={2}
				display={display}
			>
				{imageTitle}
			</Text>
		</VStack>
	);
};