import React from 'react';
import { Box, Flex, Text, Link, VStack } from '@chakra-ui/react';
import { HomeLayout } from '../Layouts/HomeLayout';
import { HomeContents, Links } from '../Constants/HomeConstant';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RLink } from 'react-router-dom';

export const Home = () => {
	return(
		<HomeLayout >
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={{base:'85%', md: '90%', lg:'87%',  xl: '86%', '2xl': '87%'}}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				p={4}
			>
				<Flex
					direction={'column'}
					alignItems={'flex-start'}
					mb={[8]}

				>
					<Flex 
						alignItems={'center'}
						justifyContent={'center'}
						bgColor={'#F4F0EB'}
						w={['260px','450px']}
						h={['90px','65px']}
						borderRadius={'16px'}
						mb={2} p={['16px', null]}
					>
						<Text 
							fontSize={'sm'} 
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
						w={['260px','410px']}
						h={['100px','70px']}
						borderRadius={'16px'}
						mb={2} p={['16px', null]}
					>
						<Text 
							fontSize={'sm'} 
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
						w={['240px','270px']}
						h={'50px'}
						borderRadius={'16px'}
						p={['10px', null]}
					>
						<Text 
							fontSize={'sm'} 
							fontWeight={500} 
							color={'#CA4F29'}
						>
							{HomeContents[2].text}
						</Text>
					</Flex>
				</Flex>
				<VStack
					spacing={10}
					align={'flex-end'}
				>
					{
						Links.map(link => {
							return (
								<Box
									key={link.label}
								>
									<Link
										as={RLink}
										to={link.path}
										lineHeight='1.2'
										border='1px'
										p='4' px={10}
										borderRadius='16px'
										fontSize='14px'
										fontWeight='500'
										bg='#CA4F29'
										borderColor='#CA4F29'
										color='#F4F0EB'
										_hover={{
											bg: '#fff',
											color: '#CA4F29',
											borderLeftWidth: '18px',
											borderRightWidth: '2px',
											borderLeftColor: '#fff',
											// transform: 'scaleX(0.98)',
											transition: '0.2s all ease-in',
											borderColor: '#fff',
											outline: 'none'
										}}
									>
										{link.label}
										<ArrowForwardIcon 
											ml={8}
											h={'16px'} w={'16px'}
										/>
									</Link>
								</Box>
							);
						})
					}
				</VStack>
			</Box>
		</HomeLayout>
	);
};