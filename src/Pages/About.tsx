import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import {Bio } from '../Constants/BioConstant';
import { CtaButton } from '../Components/CtaButton';

export const About = () => {
	return (
		<HomeLayout>
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				// maxH={'100'}
				h={['86vh', '80vh', '80vh', '79vh', null, '86vh']}
				// h={{base:'85vh', md:'80vh', lg: '74vh', '2xl': '86vh' }}
				// w={['90vw','78vw']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				p={'20px'}
				overflow={'auto'}
			>
				<VStack
					align={'flex-start'}
					spacing={'16px'}
				>
					<Box
						w={['', '256px']}
						// h={['', '45px']}
						borderRadius={'16px'}
						bgColor={'#CA4F29'}
						alignSelf={'flex-end'}
						mb={'30px'}
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
									w={['280px','700px']}
									h={['auto','auto']}
									borderRadius={'16px'}
									p={4}
								>
									<Text 
										fontSize={'sm'} 
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
						w={['260px','600px']}
						h={['auto','auto']}
						borderRadius={'16px'}
						p={4}
					>
						<Text 
							fontSize={'sm'} 
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