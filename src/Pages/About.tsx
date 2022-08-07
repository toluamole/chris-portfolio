import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import { AboutContents } from '../Constants/AboutContents';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ScrollUpBtn } from '../Components/ScrollUpBtn';

export const About = () => {
	return (
		<HomeLayout>
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={'74vh'}
				// w={['90vw','78vw']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				p={'20px'}
				overflow={'auto'}
				
			>
				<Flex 
					direction={'column'}
				>
					<Box
						w={['', '256px']}
						// h={['', '45px']}
						borderRadius={'16px'}
						bgColor={'#CA4F29'}
						alignSelf={'flex-end'}
						mb={'70px'}
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
						AboutContents.map(items => {
							return(
								<Flex 
									key={items.id}
									direction={'column'}
									alignItems={'center'}
									bgColor={'#F4F0EB'}
									w={['280px','700px']}
									h={['auto','auto']}
									borderRadius={'16px'}
									mb={4} px={['16px', 6]} py={4}
								>
									<Text 
										fontSize={'sm'} 
										fontWeight={500}
										color={'#CA4F29'}
									>
										{items.subText}
									</Text>
								</Flex>
							);
						})
					}
					<Box
						bgColor={'#F4F0EB'}
						w={['260px','600px']}
						h={['auto','auto']}
						borderRadius={'16px'}
						mb={[10,20]} px={6} py={4}
					>
						<Text 
							fontSize={'sm'} 
							fontWeight={500}
							color={'#CA4F29'}
						>
							So yeah, if you ever want to collaborate, I’m only a phone call/ email away.
						</Text>
					</Box>
					<Flex
						direction={'column'}
						alignItems={'flex-end'}
					>
						<Button 
							size={'lg'}
							h={'40px'} px={'28px'}
							color={'#F4F0EB'} 
							fontSize={'14px'} 
							bg={'#CA4F29'}
							fontWeight={'400'}
							borderRadius={'16px'}
							lineHeight={'150%'} mb={[28,16]}
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
							Reach out 
							<ArrowForwardIcon 
								ml={4}
								h={'16px'} w={'16px'}
							/>
						</Button>
					</Flex>
				</Flex>
				<ScrollUpBtn />
			</Box>
		</HomeLayout>
	);
};