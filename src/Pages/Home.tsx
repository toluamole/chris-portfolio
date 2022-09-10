import React from 'react';
import {  Flex, Text, VStack } from '@chakra-ui/react';
import { HomeLayout } from '../Layouts/HomeLayout';
import { HomeContents } from '../Constants/HomeConstant';
import { useNavigate } from 'react-router-dom';
import { NavigationButton } from '../Components/NavigationButton';
import { AppRoutes } from '../Routes/AppRoutes';

export const Home = () => {
	const navigate = useNavigate();
	return(
		<HomeLayout collapse={false}>
			{/* <Box
				borderWidth={['1px', '2px']}
				borderStyle={'solid'}
				borderColor={'#686875'}
				borderRadius={['16px','24px']}
				h={'auto'}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				p={['8px',4]}
				overflowY={'scroll'}
			> */}
			<Flex
				direction={'column'}
				alignItems={'flex-start'}
				// pb={'48px'}
				borderWidth={['1px', '2px']}
				borderStyle={'solid'}
				borderColor={'#686875'}
				borderRadius={['16px','24px']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				p={['8px',4]}
				h={'100%'}
				overflowY={'scroll'}

			>
				<Flex 
					direction={'column'}
					alignItems={'flex-start'}
					justifyContent={'center'}
					bgColor={'#F4F0EB'}
					w={['285px','510px']}
					// h={['90px','65px']}
					borderRadius={['12px','16px']}
					mb={'8px'} px={['12px','40px']}  py={'16px'}
				>
					<Text 
						fontSize={['14px','16px']} 
						fontWeight={500} 
						color={'#CA4F29'} 
						// px={6}
					>
						Hi! I’m Oladapo, a <b>product designer</b> from Lagos, Nigeria.
					</Text>
					<Text 
						fontSize={['14px','16px']} 
						fontWeight={500} 
						color={'#CA4F29'} 
						// px={6}
					>
						Welcome to my portfolio!
					</Text>
				</Flex>
				<Flex 
					direction={'column'}
					alignItems={'flex-start'}
					justifyContent={'center'}
					bgColor={'#F4F0EB'}
					w={['285px','500px']}
					// h={['100px','70px']}
					borderRadius={['12px','16px']}
					mb={'8px'} px={['12px','40px']}  py={'16px'}
				>
					<Text 
						fontSize={['14px','16px']} 
						fontWeight={500}
						color={'#CA4F29'}
					>
						I design beautiful digital products and create amazing
					</Text>
					<Text 
						fontSize={['14px','16px']} 
						fontWeight={500}
						color={'#CA4F29'}
					>
						experiences for people while driving business impact
					</Text>
				</Flex>
				<Flex 
					alignItems={'flex-start'}
					justifyContent={'center'}
					bgColor={'#F4F0EB'}
					px={['12px','40px']}  py={'16px'}
					borderRadius={['12px','16px']}
				>
					<Text 
						fontSize={['14px','16px']} 
						fontWeight={500} 
						color={'#CA4F29'}
					>
						{HomeContents[2].text}
					</Text>
				</Flex>
				<VStack
					alignSelf={'flex-end'}
					py={['28px','48px']}
				>
					<NavigationButton title={'View Projects'} onClick={() => navigate(AppRoutes.projects)} direction={'right'}  />
					<NavigationButton title={'About'} onClick={() => navigate(AppRoutes.about)} direction={'right'} />
					<NavigationButton title={'Contact'} onClick={() => navigate(AppRoutes.contact)} direction={'right'} />
				</VStack>
			</Flex>
			{/* </Box> */}
		</HomeLayout>
	);
};