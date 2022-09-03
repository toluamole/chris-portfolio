import { Box, Flex, Text, Image, Link, Container, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import resume from '../Assets/resume.png';
import PaperIcon from '../Assets/PaperIcon.svg';
// import { Link as RLink } from 'react-router-dom';
import { contactDetails } from '../Constants/ContactConstant';
import RESUME from '../Assets/RESUME.pdf';
import { AppRoutes } from '../Routes/AppRoutes';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { BsPinAngleFill } from 'react-icons/bs';
import { Link as RLink } from 'react-router-dom';
import { AnimatedPages } from '../Components/AnimatedPages';

export const Contact = () => {
	return (
		<AnimatedPages>
			<HomeLayout collapse={false}>
				<Box
					border={'2px'}
					borderColor={'#686875'}
					borderRadius={'24px'}
					h={{base:'85%', md: '90%', lg:'87%',  xl: '86%', '2xl': '87%'}}
					// w={['90vw','78vw']}
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
							Contact
						</Text>
					</HStack>
					<Flex 
						direction={'column'}
						align={'baseline'}
						justify={'start'}
						// spacing={'8px'}
						overflowY={'scroll'}
						overflowX={'hidden'}
						p={4}
						h={'100%'}
					>
						<Box
							// w={['', '240px']}
							// h={['', '45px']}
							borderRadius={'16px'}
							bgColor={'#CA4F29'}
							alignSelf={'flex-end'}
							mb={'48px'}
						>
							<Container
								centerContent
								color={'#F4F0EB'}
								fontSize={'16px'}
								px={['24px','40px']}  py={'16px'}
							>
								How do i reach you,<br/>
								I&apos;d love to collaborate?
							</Container>
						</Box>
						<VStack
							align={'flex-start'}
							spacing={'8px'}
						>
							{
								contactDetails.map(items => {
									return(
										<HStack
											key={items.id}
											bgColor={'#F4F0EB'}
											w={['auto','auto']}
											h={['auto','auto']}
											borderRadius={'16px'}
											px={['24px','40px']}  py={'16px'}
										>
											<Text 
												fontSize={'16px'} 
												fontWeight={500}
												color={'#CA4F29'}
											>
												{items.text}
											</Text>
											<Link 
												// as={RLink} 
												color={' #0075FF'} 
												textDecor={'underline'}
												fontSize={'16px'} 
												fontWeight={500}
												href={items.path}
												target='_blank'
												isExternal	
											>
												{items.name}
											</Link>
										</HStack>
									);
								})
							}
							<VStack
								bgColor={'#F4F0EB'}
								borderRadius={'16px'}
								w={['320px','335px']}
								h={'150px'}
								align={'flex-start'}
								p={2}
							>
								<Image 
									w={'320px'}
									h={'130px'}
									objectFit={'cover'}
									src={resume}
								/>
								<HStack
									align={'center'}
									justify={'flex-start'}
								>
									<Image src={PaperIcon}/>
									<Link 
										// as={RLink} 
										color={' #0075FF'} 
										textDecor={'underline'}
										fontWeight={700}
										href={`${RESUME}`}
										target='_blank'	
									>
										Open resume
									</Link>
								</HStack>
							</VStack>
						</VStack>
					</Flex>
				</Box>
			</HomeLayout>
		</AnimatedPages>
	);
};