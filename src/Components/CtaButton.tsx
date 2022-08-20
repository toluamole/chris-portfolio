import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

interface ICtaButtonProps{
    title: string;
    onClick?: () => void;
}

export const CtaButton = ({title, onClick}:ICtaButtonProps) => {
	return (
		<Button 
			alignSelf={'flex-end'}
			float={'right'}
			size={'lg'}
			h={'40px'} px={'28px'}
			color={'#F4F0EB'} 
			fontSize={'16px'} 
			bg={'#CA4F29'}
			fontWeight={'400'}
			borderRadius={'16px'}
			lineHeight={'150%'}
			my={'48px'} mr={4}
			onClick={onClick}
			_hover={{
				bg:'#F4F0EB',
				color:'#CA4F29',
				borderLeftWidth: '10px',
				borderRightWidth:'2px',
				borderLeftColor: '#fff',
				// transform: 'scaleX(1)',
				transition: '0.2s all ease-in',
			}}
			p={6}
		>
			{title}
			<ArrowForwardIcon 
				ml={4}
				h={'16px'} w={'16px'}
			/>
		</Button>
	);
};