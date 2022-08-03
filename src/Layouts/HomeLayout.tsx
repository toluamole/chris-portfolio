import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from '../Components/NavBar';
import { Profile } from '../Components/Profile';
import {Mobileprofile} from '../Components/Mobileprofile';
import backgroundImage from '../Assets/backgroundImage.svg';

interface IHomeLayoutProps{
    children: React.ReactNode;
}

export const HomeLayout = ({children}: IHomeLayoutProps) => {
	const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
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
			p={[1, 10, 10, 5]}
			overflow={'hidden'}
		>
			<NavBar/>
			<Flex mx={[2, null]} direction={'column'}>
				<Box  mx={2}>
					{isLargerThan768 && <Profile />}
					{!isLargerThan768 && <Mobileprofile/>}
				</Box>
				<Box m={2}>{children}</Box>
			</Flex>
		</Box>
	);
};