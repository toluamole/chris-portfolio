import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

export const CtaButton = () => {
	return (
		<Button 
			alignSelf={'flex-end'}
			float={'right'}
			size={'lg'}
			h={'40px'} px={'28px'}
			color={'#F4F0EB'} 
			fontSize={'14px'} 
			bg={'#CA4F29'}
			fontWeight={'400'}
			borderRadius={'16px'}
			lineHeight={'150%'}
			mb={'10rem'} mr={4}
			_after={{
				bg:'#fff',
				color:'#CA4F29',
				borderLeftWidth: '10px',
				borderRightWidth:'2px',
				borderLeftColor: '#fff',
				// transform: 'scaleX(1)',
				transition: '0.2s all ease-in',
			}}
			p={6}
		>
            Reach out 
			<ArrowForwardIcon 
				ml={4}
				h={'16px'} w={'16px'}
			/>
		</Button>
	);
};