import { Box, Flex, Text, Image, Link, Container, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import resume from '../Assets/resume.png';
import PaperIcon from '../Assets/PaperIcon.svg';
// import { Link as RLink } from 'react-router-dom';
import { contactDetails } from '../Constants/ContactConstant';
import RESUME from '../Assets/RESUME.pdf';
import { AnimatedPages } from '../Components/AnimatedPages';

export const Contact = () => {
	return (
		<AnimatedPages>
			<HomeLayout>
				<Box
					border={'2px'}
					borderColor={'#686875'}
					borderRadius={'24px'}
					h={{base:'85%', md: '90%', lg:'87%',  xl: '86%', '2xl': '87%'}}
					// w={['90vw','78vw']}
					boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
					p={'20px'}
					overflow={'auto'}
				>
					<Flex 
						direction={'column'}
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
								px={'40px'} py={'16px'}
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
											// w={['280px',`${items.width}`]}
											h={['auto','auto']}
											borderRadius={'16px'}
											px={'40px'} py={'16px'}
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
								w={'335px'}
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