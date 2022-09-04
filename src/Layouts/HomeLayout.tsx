import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavBar } from '../Components/NavBar';
import { Profile } from '../Components/Profile';
import {Mobileprofile} from '../Components/Mobileprofile';
import backgroundImage from '../Assets/backgroundImage.svg';
import { MobileNavBar } from '../Components/MobileNavbar';
import { MotionBox } from '../Components/AnimatedPages';

interface IHomeLayoutProps{
    children: React.ReactNode;
	collapse: boolean;
}

export const HomeLayout = ({children, collapse}: IHomeLayoutProps) => {
	const [isLargerThan768] = useMediaQuery('(min-width: 1000px)');
	const [show, setShow] = useState(true);
	// const [collapse, setCollapse] = useState(false);

	const _handleClick =  () => setShow(!show);

	// const _handleCollapse = () => {
	// 	setCollapse(true);
	// }

	return (
		<Flex
			h={'100vh'}
			minW={'100%'}
			bgImage={`url('${backgroundImage}')`}
			bgPosition='center'
			bgSize={'cover'}
			bgRepeat={'no-repeat'}
			p={['8px',null, '10px',null, '30px']}
			overflow={'hidden'}
			wrap='nowrap'
			alignItems={'stretch'}
		> 
			{isLargerThan768 ? <NavBar collapse={collapse} /> : <MobileNavBar show={show}  /> }
			<MotionBox
				w={'100%'}
			>
				<Box mb={['8px','20px']} >
					{isLargerThan768 ? <Profile collapse={collapse} /> : 
						<Mobileprofile handleClick={_handleClick} show={show}/>}
				</Box>
				{children}
			</MotionBox>
		</Flex>
	);
};