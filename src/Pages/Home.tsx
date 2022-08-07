import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { HomeLayout } from '../Layouts/HomeLayout';
import { HomeContents, Links } from '../Constants/HomeContent';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const Home = () => {
	return(
		<HomeLayout >
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={['85vh','74vh']}
				// h={'80vh'}
				// w={['90vw','78vw']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				p={4}
			>
				<Flex
					direction={'column'}
					// justifyContent={'space-between'}
					alignItems={'flex-start'}
					// opacity= {'0.7'}
					// filter= {'auto'}
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
							{HomeContents[0].text}
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
				<Flex
					direction={'column'}
					alignItems={'flex-end'}
				>
					{
						Links.map(link => {
							return (
								<Flex
									key={link.label}
									mb={2}
								>
									{/* <Button 
										size={'lg'}
										h={'40px'} px={'28px'}
										color={'#F4F0EB'} 
										fontSize={'14px'} 
										bg={'#CA4F29'}
										fontWeight={'400'}
										borderRadius={'16px'}
										lineHeight={'150%'}
										_hover={{
											bg:'#fff',
											color:'#CA4F29',
											borderLeftWidth: '10px',
											borderRightWidth:'2px',
											borderLeftColor: '#fff',
											// transform: 'scaleX(1)',
											transition: '0.2s all ease-in',
										}}
										p={6}
									>
										{link.label} 
										<ArrowForwardIcon 
											ml={4}
											h={'16px'} w={'16px'}
										/>
									</Button> */}
									<Flex
										alignItems={'center'}
										as='button'
										height='50px'
										lineHeight='1.2'
										// transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
										border='1px'
										px='28px'
										borderRadius='16px'
										fontSize='14px'
										fontWeight='500'
										bg='#CA4F29'
										borderColor='#CA4F29'
										color='#F4F0EB'
										_hover={{
											bg:'#fff',
											color:'#CA4F29',
											borderLeftWidth: '18px',
											borderRightWidth:'2px',
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
									</Flex>
								</Flex>
							);
						})
					}
				</Flex>
			</Box>
		</HomeLayout>
	);
};