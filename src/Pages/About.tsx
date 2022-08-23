import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import {Bio } from '../Constants/BioConstant';
import { CtaButton } from '../Components/CtaButton';
import { AnimatedPages } from '../Components/AnimatedPages';

export const About = () => {
	return (
		<AnimatedPages>
			<HomeLayout>
				<Box
					border={'2px'}
					borderColor={'#686875'}
					borderRadius={'24px'}
					// maxH={'auto'}
					// h={[sm:'86vh']}
					h={{base:'85%', md: '90%', lg:'85%',  xl: '86%', '2xl': '87%'}}
					// h={{base:'85vh', lg: '74vh', xl: '86vh', '2xl': '86vh' }}
					// w={['90vw','78vw']}
					boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
					p={'20px'}
					overflow={'auto'}
				>
					<VStack
						align={'flex-start'}
						spacing={'8px'}
					>
						<Box
							w={['', '256px']}
							// h={['', '45px']}
							borderRadius={'16px'}
							bgColor={'#CA4F29'}
							alignSelf={'flex-end'}
							mb={'48px'}
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
										px={'40px'} py={'16px'}
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
							// w={['260px','600px']}
							// h={['auto','auto']}
							borderRadius={'16px'}
							px={'40px'} py={'16px'}
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
		</AnimatedPages>
	);
};