import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react';
import { BsPinAngleFill } from 'react-icons/bs';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
// import { projects } from '../Constants/ProjectsConstant';
import projectsData from '../Data/projects.json';
// import { motion } from 'framer-motion';
import { CtaButton } from '../Components/CtaButton';
import { useNavigate } from 'react-router-dom';
import { ImageBox } from '../Components/ImageBox';
import { AppRoutes } from '../Routes/AppRoutes';

export const Projects = () => {
	const navigate = useNavigate();
	// const animationKeyframes = keyframes`
	// 	0% { opacity: 0; transform: scale(5); }
	// 	50% {opacity: 0.7; transform: scale3d(1.5,1.5,1);}
	// 	100% {transform:  opacity: 1, transform: scale(2)};
	// `;

	// const animation = `${animationKeyframes} .2s ease-in`;

	// const handleNavigate = (projectId?: number) => {
	// 	navigate(`project/${projectId}`);
	// };
	
	return(
		<HomeLayout>
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={['85vh','74vh']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				overflow={'auto'}
				cursor={'pointer'}
			>
				<HStack
					border={'none'}
					borderColor={'white'}
					borderRadius={'24px 24px 0px 0px'}
					bg={'white'}
					height={'56px'}
					max-width={'full'}
					boxShadow={'0px 8px 8px rgba(0, 0, 0, 0.25)'}
					position={'sticky'}
					top={0}
					zIndex={'99999'}
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
					align={'flex-start'}
					justify={'center'}
					spacing={'30px'}
					p={4}
				>
					<VStack 
						border={'1px'}
						borderRadius={'16px'}
						bgColor={'#F4F0EB'}
						p={'8px'}
						onClick={() => navigate(AppRoutes.crisp)}
					>
						<Text 
							alignSelf={'flex-start'}
							color={'#CA4F29'}
							fontSize={'20px'}
							fontWeight={700}
							py={2}
						>
							{projectsData[0].name}
						</Text>
						<ImageBox display='none' width={'100%'} content={'Open'}>
							<Image 
								src={process.env.PUBLIC_URL + projectsData[0].images[0].imageUrl} 
								width= '100%'
								vertical-align= 'top'
							/>
						</ImageBox>
					</VStack>
					<VStack 
						border={'1px'}
						borderRadius={'16px'}
						bgColor={'#F4F0EB'}
						p={'8px'}
						onClick={() => navigate(AppRoutes.Gather)}
					>
						<Text 
							alignSelf={'flex-start'}
							color={'#CA4F29'}
							fontSize={'20px'}
							fontWeight={700}
							py={2}
						>
							{projectsData[1].name}
						</Text>
						<ImageBox display='none' width={'100%'} content={'Open'}>
							<Image 
								src={process.env.PUBLIC_URL + '/images/Gather.png'} 
								width= '100%'
								vertical-align= 'top'
							/>
						</ImageBox>
					</VStack>
					<VStack 
						border={'1px'}
						borderRadius={'16px'}
						bgColor={'#F4F0EB'}
						p={'8px'}
					>
						<Text 
							alignSelf={'flex-start'}
							color={'#CA4F29'}
							fontSize={'20px'}
							fontWeight={700}
							py={2}
						>
							{projectsData[2].name}
						</Text>
						<ImageBox display='none' width={'100%'} content={'Open'}>
							<Image 
								src={process.env.PUBLIC_URL + '/images/Cookly.png'} 
								width= '100%'
								vertical-align= 'top'
							/>
						</ImageBox>
					</VStack>
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
							I&apos;m sure you like what you see,you can always reach out, let&apos;s collaborate!.
						</Text>
					</Box>
				</VStack>
				<CtaButton title={'Reach Out'} />
			</Box>
		</HomeLayout>
	);
};