import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import React from 'react';

interface ICtaButtonProps{
    title: string;
    onClick?: () => void;
    direction: 'left' | 'right'
}

export const NavigationButton = ({title, onClick, direction}:ICtaButtonProps) => {
	return (
		<Button 
			alignSelf={'flex-end'}
			float={'right'}
			size={'xl'}
			height={'56px'}
			px={'40px'} py={'16px'}
			color={'#F4F0EB'} 
			fontSize={'16px'} 
			bg={'#CA4F29'}
			fontWeight={'400'}
			borderRadius={'16px'}
			lineHeight={'150%'}
			onClick={onClick}
			_hover={{
				bg:'#F4F0EB',
				color:'#CA4F29',
				transition: '0.2s all ease-in',
			}}
		>
			<Text
				_hover={{
					marginRight: '10px',
					transition: '0.2s all ease-in'
				}}
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