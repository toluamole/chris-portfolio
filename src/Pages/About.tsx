import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import {Bio } from '../Constants/BioConstant';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { BsPinAngleFill } from 'react-icons/bs';
import { AppRoutes } from '../Routes/AppRoutes';
import {  useNavigate } from 'react-router-dom';
import { NavigationButton } from '../Components/NavigationButton';

export const About = () => {
	const navigate = useNavigate();
	return (
		<HomeLayout collapse={false}>
			<Box
				borderWidth={['1px', '2px']}
				borderStyle={'solid'}
				borderColor={'#686875'}
				borderRadius={['16px','24px']}
				h={{base:'78%', md: '90%', lg:'87%',  xl: '86%', '2xl': '87%'}}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				// p={'20px'}
				overflow={'hidden'}
			>
				<HStack
					display={['flex', 'none']}
					border={'none'}
					borderColor={'white'}
					borderRadius={['16px 16px 0px 0px','20px 20px 0px 0px']}
					bg={'#F4F0EB'}
					height={['45px','56px']}
					width={'100%'}
					boxShadow={'0px 8px 8px rgba(0, 0, 0, 0.25)'}
					position={'sticky'}
					top={0}
					spacing={'20px'}
					justify={'flex-start'}
					pl={6}
				>
					<Box  onClick={() => navigate(-1)} >
						<ChevronLeftIcon boxSize={6} color={'#CA4F29'} />
					</Box>
					<BsPinAngleFill size={'20px'} />
					<Text
						color={'#CA4F29'}
						fontSize={['14px','16px']} 
						fontWeight={'700'}
					>
						About
					</Text>
				</HStack>
				<VStack
					align={'baseline'}
					justify={'start'}
					spacing={['8px','8px']}
					overflowY={'scroll'}
					p={['8px',4]} pt={'12px'}
					h={['100%','100%']}
				>
					<Box
						w={['', '256px']}
						borderRadius={['12px','16px']}
						bgColor={'#CA4F29'}
						alignSelf={'flex-end'}
						mb={['28px','48px']}
						px={['12px','40px']} py={'16px'}
					>
						<Text 
							color={'#F4F0EB'}
							fontSize={['14px','16px']} 
							textAlign={'center'}
						>
							Tell me about yourself
						</Text>
					</Box>

					{
						Bio.map(items => {
							return(
								<VStack 
									align={'flex-start'}
									key={items.id}
									bgColor={'#F4F0EB'}
									w={['316px','700px']}
									h={['auto','auto']}
									borderRadius={['12px','16px']}
									px={['12px','40px']} py={'16px'}
								>
									<Text 
										fontSize={['14px','16px']} 
										fontWeight={500}
										color={'#CA4F29'}
									>
										{items.subText}
									</Text>
								</VStack>
							);
						})
					}
					<Box
						bgColor={'#F4F0EB'}
						w={['316px','auto']}
						borderRadius={['12px','16px']}
						px={['12px','40px']}  py={'16px'}
					>
						<Text 
							fontSize={['14px','16px']}  
							fontWeight={500}
							color={'#CA4F29'}
						>
							So yeah, if you ever want to collaborate, I???m only a phone call/ email away.
						</Text>
					</Box>
					<Box pt={'48px'} pb={['100px', '48px']} alignSelf={'flex-end'}><NavigationButton onClick={() => navigate(AppRoutes.contact)} title={'Reach Out'} direction={'right'}/></Box>
				</VStack>
			</Box>
		</HomeLayout>
	);
};