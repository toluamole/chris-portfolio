import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import React from 'react';

interface ICtaButtonProps{
    title: string;
    onClick: () => void;
}

export const CtaButton = ({title, onClick}:ICtaButtonProps) => {

	return (
		<Button 
			alignSelf={'flex-end'}
			float={'right'}
			size={'lg'}
			h={'40px'} px={'28px'}
			color={'#F4F0EB'} 
			fontSize={['14px','16px']} 
			bg={'#CA4F29'}
			fontWeight={'400'}
			borderRadius={['12px','16px']}
			lineHeight={'150%'}
			my={['28px','48px']} mr={4}
			onClick={onClick}
			_hover={{
				bg:{lg:'#F4F0EB'},
				color:{base:'#F4F0EB',lg:'#CA4F29'},
			}}
			p={6}
		>
			<Text
			>{title}</Text>
			<ArrowForwardIcon 
				ml={4}
				h={'16px'} w={'16px'}
			/>
		</Button>
	);
};