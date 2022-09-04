import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react';
import { BsPinAngleFill } from 'react-icons/bs';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
// import { projects } from '../Constants/ProjectsConstant';
import CrispData from '../Data/Crisp.json';
import GatherData from '../Data/Gather.json';
import CooklyData from '../Data/Cookly.json';
// import { motion } from 'framer-motion';
import { CtaButton } from '../Components/CtaButton';
import { useNavigate } from 'react-router-dom';
import { ImageBox } from '../Components/ImageBox';
import { AppRoutes } from '../Routes/AppRoutes';
import { AnimatedPages } from '../Components/AnimatedPages';

export const Projects = () => {
	const navigate = useNavigate();
	
	return(
		<AnimatedPages>
			<HomeLayout collapse={false}>
				<Box
					borderWidth={['1px', '2px']}
					borderStyle={'solid'}
					borderColor={'#686875'}
					borderRadius={['16px','24px']}
					h={{base:'80%', md: '90%', lg:'87%',  xl: '86%', '2xl': '87%'}}
					boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
					cursor={'pointer'}
					overflow={'hidden'}
					// position={'relative'}
				>
					<HStack
						border={'none'}
						borderColor={'white'}
						borderRadius={['16px 16px 0px 0px','20px 20px 0px 0px']}
						bg={'#F4F0EB'}
						height={['45px','56px']}
						width={'100%'}
						boxShadow={'0px 8px 8px rgba(0, 0, 0, 0.25)'}
						position={'sticky'}
						top={0}
						// zIndex={'99999'}
						spacing={'20px'}
						justify={'flex-start'}
						pl={6}
					>
						<BsPinAngleFill size={'20px'} />
						<Text
							color={'#CA4F29'}
							fontSize={'16px'}
							fontWeight={'700'}
						>
							Selected projects (3)
						</Text>
					</HStack> 
					<VStack
						align={'baseline'}
						justify={'start'}
						spacing={['36px', '48px']}
						p={[2,4]}
						// h={'65vh'} w={'100%'}
						h={{base:'100%', lg:'95%'}}
						overflowY={'scroll'}
					>
						<VStack 
							border={'1px'}
							borderRadius={['8px','16px']}
							bgColor={'#F4F0EB'}
							// p={'8px'}
							onClick={() => navigate(AppRoutes.crisp)}
						>
							<Text 
								alignSelf={'flex-start'}
								color={'#CA4F29'}
								fontSize={['16px','20px']}
								fontWeight={'bold'}
								p={['4px',2]}
							>
								{CrispData.name}
							</Text>
							<ImageBox display='none' width={'50vw'}  content={'Open'}>
								<Image 
									src={process.env.PUBLIC_URL + '/images/Crisp/crisp.png'} 
									width= '100%'
								/>
							</ImageBox>
						</VStack>
						<VStack 
							border={'1px'}
							borderRadius={['8px','16px']}
							bgColor={'#F4F0EB'}
							// p={2}
							onClick={() => navigate(AppRoutes.gather)}
						>
							<Text 
								alignSelf={'flex-start'}
								color={'#CA4F29'}
								fontSize={['16px','20px']}
								fontWeight={'bold'}
								p={['4px',2]}
							>
								{GatherData.name}
							</Text>
							<ImageBox display='none' width={'50vw'} content={'Open'}>
								<Image 
									src={process.env.PUBLIC_URL + '/images/Gather/onboarding.png'} 
									width= '100%'
								/>
							</ImageBox>
						</VStack>
						<VStack 
							border={'1px'}
							borderRadius={['8px','16px']}
							bgColor={'#F4F0EB'}
							// p={'8px'}
							onClick={() => navigate(AppRoutes.cookly)}
						>
							<Text 
								alignSelf={'flex-start'}
								color={'#CA4F29'}
								fontSize={['16px','20px']}
								fontWeight={'bold'}
								p={['4px',2]}
							>
								{CooklyData.name}
							</Text>
							<ImageBox display='none' width={'50vw'} content={'Open'}>
								<Image 
									src={process.env.PUBLIC_URL + '/images/Cookly/Onboarding.png'} 
									width= '100%'
								/>
							</ImageBox>
						</VStack>
						<Box
							bgColor={'#F4F0EB'}
							// w={['260px','600px']}
							// h={['auto','auto']}
							borderRadius={['12px','16px']}
							px={['16px','40px']}  py={'16px'}
						>
							<Text 
								fontSize={['14px','16px']} 
								fontWeight={500}
								color={'#CA4F29'}
							>
								I&apos;m sure you like what you see,you can always reach out, let&apos;s collaborate!.
							</Text>
						</Box>
						<VStack
							alignSelf={'flex-end'}
							mr={4}
							pb={'48px'}
						>
							<CtaButton title={'Reach Out'} onClick={() => navigate(AppRoutes.contact)}  />
						</VStack>
					</VStack>
				</Box>
			</HomeLayout>
		</AnimatedPages>
	);
};