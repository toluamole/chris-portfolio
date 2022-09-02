import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import useSound from 'use-sound';
import buttonClickSound from '../Assets/buttonClickSound.wav';

interface ICtaButtonProps{
    title: string;
    onClick: () => void;
    direction: 'left' | 'right'
}

export const NavigationButton = ({title, onClick, direction}:ICtaButtonProps) => {
	const [buttonClick] = useSound(buttonClickSound);

	const _handleClick = () => {
		buttonClick();
		onClick();
	};

	return (
		<Button
			display={'flex'} 
			alignSelf={'flex-end'}
			position={'relative'}
			// float={'right'}
			// size={'xl'}
			height={'56px'}
			px={'40px'} py={'16px'}
			color={'#F4F0EB'} 
			fontSize={'16px'} 
			bg={'#CA4F29'}
			fontWeight={'400'}
			borderRadius={'16px'}
			lineHeight={'150%'}
			onClick={_handleClick}
			transition= '0.2'
			_hover={{
				bg:{lg:'#F4F0EB'},
				color:{lg:'#CA4F29'},
				// transition: '0.2s all ease-in',
			}}
		>
			<Text
				// _hover={{
				// 	marginRight: {lg:'10px'},
				// 	transition: '0.2s all ease-in'
				// }}
			>{title}</Text>
			{ direction === 'right' ? <ArrowForwardIcon 
				ml={4}
				h={'16px'} w={'16px'}
				_hover={{
					transform: 'scale(1.2)'
				}}
			/> : <ArrowBackIcon
				ml={4}
				h={'16px'} w={'16px'}
			/>}
		</Button>
	);
};