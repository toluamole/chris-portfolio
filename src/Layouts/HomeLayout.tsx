import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavBar } from '../Components/NavBar';
import { Profile } from '../Components/Profile';
import {Mobileprofile} from '../Components/Mobileprofile';
import backgroundImage from '../Assets/backgroundImage.svg';
import { MobileNavBar } from '../Components/MobileNavbar';

interface IHomeLayoutProps{
    children: React.ReactNode;
	collapse: boolean;
}

export const HomeLayout = ({children, collapse}: IHomeLayoutProps) => {
	const [isLargerThan768] = useMediaQuery('(min-width: 1000px)');
	const [show, setShow] = useState(true);

	const _handleClick =  () => setShow(!show);

	return (
		<Flex
			minH={'100vh'}
			w={'100vw'}
			position={'absolute'}
			bgImage={`url('${backgroundImage}')`}
			// bgPosition='center'
			bgSize={'cover'}
			bgRepeat={'no-repeat'}
			p={['8px',null, '10px',null, '30px']}
			overflow={'hidden'}
			wrap='nowrap'
			alignItems={'stretch'}
		> 
			{isLargerThan768 ? <NavBar collapse={collapse} /> : <MobileNavBar show={show}  /> }
			<Box 
				w={'100%'} 	
				h={'100%'}
			>
				<Box
					opacity= {!show ? '0.5' : 1}
				>
					<Box mb={['8px','20px']} >
						{isLargerThan768 ? <Profile collapse={collapse} /> : 
							<Mobileprofile handleClick={_handleClick} show={show}/>}
					</Box>
					<Box h={collapse ? '90vh' : {base:'77vh', lg: '77vh', '2xl':'80vh', xl:'77vh'}}>{children}</Box>
				</Box>
			</Box>
		</Flex>
	);
};