import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import {Bio } from '../Constants/BioConstant';
import { CtaButton } from '../Components/CtaButton';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { BsPinAngleFill } from 'react-icons/bs';
import { AppRoutes } from '../Routes/AppRoutes';
import { Link as RLink } from 'react-router-dom';

export const About = () => {
	return (
		<HomeLayout collapse={false}>
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={{base:'85%', md: '90%', lg:'85%',  xl: '86%', '2xl': '87%'}}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				// p={'20px'}
				overflow={'hidden'}
			>
				<HStack
					display={['flex', 'none']}
					border={'none'}
					borderColor={'white'}
					borderRadius={'20px 20px 0px 0px'}
					bg={'#F4F0EB'}
					height={'56px'}
					width={'100%'}
					// max-width={'100%'}
					boxShadow={'0px 8px 8px rgba(0, 0, 0, 0.25)'}
					position={'sticky'}
					top={0}
					// zIndex={'99999'}
					spacing={'20px'}
					justify={'flex-start'}
					pl={6}
				>
					<Link as={RLink} to={AppRoutes.home}>
						<ChevronLeftIcon boxSize={6} color={'#CA4F29'} />
					</Link>
					<BsPinAngleFill size={'20px'} />
					<Text
						color={'#CA4F29'}
						fontSize={'16px'}
						fontWeight={'700'}
					>
						About
					</Text>
				</HStack>
				<VStack
					align={'baseline'}
					justify={'start'}
					spacing={[4,'8px']}
					overflowY={'scroll'}
					p={4}
					h={['92%','100%']}
				>
					<Box
						w={['', '256px']}
						// h={['', '45px']}
						borderRadius={'16px'}
						bgColor={'#CA4F29'}
						alignSelf={'flex-end'}
						mb={[10,'48px']}
					>
						<Text 
							color={'#F4F0EB'}
							fontSize={'16px'}
							textAlign={'center'}
							p={4}
						>
							Tell me about yourself
						</Text>
					</Box>

					{
						Bio.map(items => {
							return(
								<VStack 
									key={items.id}
									bgColor={'#F4F0EB'}
									w={['320px','700px']}
									h={['auto','auto']}
									borderRadius={'16px'}
									px={['24px','40px']} py={'16px'}
								>
									<Text 
										fontSize={'16px'} 
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
						w={['320px','auto']}
						// h={['auto','auto']}
						borderRadius={'16px'}
						px={['24px','40px']}  py={'16px'}
					>
						<Text 
							fontSize={'16px'} 
							fontWeight={500}
							color={'#CA4F29'}
						>
							So yeah, if you ever want to collaborate, I’m only a phone call/ email away.
						</Text>
					</Box>
				</VStack>
				<CtaButton title={'Reach Out'}/>
			</Box>
		</HomeLayout>
	);
};