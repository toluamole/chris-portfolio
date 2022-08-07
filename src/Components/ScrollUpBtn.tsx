import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

export const ScrollUpBtn = () => {

	const scrollUp = () => {
		window.scroll(0,0);
	};

	return (
		<Box
			position={'fixed'}
			right={10}
			top={['84%','88%']}
			w={'35px'}
			h={'35px'}
			onClick={scrollUp}
		>
			<IconButton
				border={'2px'}
				variant='outline'
				borderColor={'#686875'}
				color='#686875'
				aria-label='Call Sage'
				fontSize='20px'
				icon={<ChevronUpIcon />}
				isRound = {true}
				_hover={{
					color:'#686875'
				}}
				_active={{
					color:'#686875'
				}}
			/>
		</Box>
	);
};