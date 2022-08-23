import React from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { HomeLayout } from '../Layouts/HomeLayout';
import { HomeContents } from '../Constants/HomeConstant';
import { useNavigate } from 'react-router-dom';
import { AnimatedPages } from '../Components/AnimatedPages';
import { NavigationButton } from '../Components/NavigationButton';
import { AppRoutes } from '../Routes/AppRoutes';

export const Home = () => {
	const navigate = useNavigate();
	return(
		<AnimatedPages>
			<HomeLayout >
				<Box
					border={'2px'}
					borderColor={'#686875'}
					borderRadius={'24px'}
					h={{base:'85%', md: '90%', lg:'87%',  xl: '86%', '2xl': '87%'}}
					boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
					p={4}
					overflowY={'scroll'}
				>
					<Flex
						direction={'column'}
						alignItems={'flex-start'}
						// pb={'48px'}

					>
						<Flex 
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'#F4F0EB'}
							w={['260px','510px']}
							// h={['90px','65px']}
							borderRadius={'16px'}
							mb={'8px'} px={'40px'} py={'16px'}
						>
							<Text 
								fontSize={'16px'} 
								fontWeight={500} 
								color={'#CA4F29'} 
								// px={6}
							>
								Hi! I’m Oladapo, a <b>product designer</b> from Lagos, Nigeria.Welcome to my portfolio!
							</Text>
						</Flex>
						<Flex 
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'#F4F0EB'}
							w={['260px','500px']}
							// h={['100px','70px']}
							borderRadius={'16px'}
							mb={'8px'} px={'40px'} py={'16px'}
						>
							<Text 
								fontSize={'16px'} 
								fontWeight={500}
								color={'#CA4F29'}
							>
								{HomeContents[1].text}
							</Text>
						</Flex>
						<Flex 
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'#F4F0EB'}
							// w={['240px','270px']}
							// h={'50px'}
							px={'40px'} py={'16px'}
							borderRadius={'16px'}
							// p={['10px', null]}
						>
							<Text 
								fontSize={'16px'} 
								fontWeight={500} 
								color={'#CA4F29'}
							>
								{HomeContents[2].text}
							</Text>
						</Flex>
					</Flex>
					<VStack
						align={'flex-end'}
						py={'48px'}
					>
						<NavigationButton title={'View Projects'} onClick={() => navigate(AppRoutes.projects)} direction={'right'}  />
						<NavigationButton title={'About'} onClick={() => navigate(AppRoutes.about)} direction={'right'} />
						<NavigationButton title={'Contact'} onClick={() => navigate(AppRoutes.contact)} direction={'right'} />
					</VStack>
				</Box>
			</HomeLayout>
		</AnimatedPages>
	);
};