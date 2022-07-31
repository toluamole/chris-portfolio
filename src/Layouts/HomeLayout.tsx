import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../Components/NavBar';
import { Profile } from '../Components/Profile';
import backgroundImage from '../Assets/backgroundImage.svg';

interface IHomeLayoutProps{
    children: React.ReactNode;
}

export const HomeLayout = ({children}: IHomeLayoutProps) => {
	return (
		<Box
			display={'flex'}
			flexDirection={'row'}
			h={'100vh'}
			w={'100vw'}
			// bg={'#0F0E0E'}
			bgImage={`url('${backgroundImage}')`}
			bgPosition='center'
			bgSize={'cover'}
			bgRepeat={'no-repeat'}
			p={[10, 10, 10, 5]}
			overflow={'hidden'}
		>
			<Box  w={['25vw','18vw']} >
				<NavBar/>
			</Box>
			<Flex w={'80vw'} direction={'column'}>
				<Box  w={'80vw'} h={'20vh'} mx={2}>
					<Profile />
				</Box>
				<Box  w={'80vw'} m={2} h={'80vh'}>{children}</Box>
			</Flex>
		</Box>
	);
};