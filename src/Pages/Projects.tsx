import { Box, HStack, Text, VStack, Image, keyframes } from '@chakra-ui/react';
import { BsPinAngleFill } from 'react-icons/bs';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import { projects } from '../Constants/ProjectsConstant';
import { motion } from 'framer-motion';
import { CtaButton } from '../Components/CtaButton';

export const Projects = () => {
	const animationKeyframes = keyframes`
		0% { opacity: 0; transform: scale(2); }
		50% {opacity: 1; transform: scale3d(1.5,1.5,1);}
		100% {transform: translateZ(90%);}
	`;

	const animation = `${animationKeyframes} .2s ease-in`;
	
	return(
		<HomeLayout>
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={['85vh','74vh']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				overflow={'auto'}
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
					{
						projects.map(project => {
							return(
								<VStack 
									key={project.id}
									border={'1px'}
									borderRadius={'16px'}
									bgColor={'#fff'}
									p={2}
									cursor={'pointer'}
								>
									<Text 
										alignSelf={'flex-start'}
										color={'#CA4F29'}
										fontSize={'20px'}
										fontWeight={700}
										py={2}
									>
										{project.name}
									</Text>
									<Box
										as={motion.div}
										position={'relative'}
										_after={{
											content:'" "',
											position:'absolute',
											width:'100%',
											height:'100%',
											top:0, 
											left:0,
											background:'rgba(0,0,0,0.5)',
											opacity:0,
											transition: 'all 0.5s',
											borderRadius: '16px'
										}}
										_before={{
											content: '"Open"',
											width:'80px',
											height: '80px',
											color:'#fff',
											ZIndex:'1',
											bottom:'45%',
											left: '45%',
											p: '24px',
											textAlign:'center',
											bg:'#CA4F29',
											borderRadius: '50%',
											position:'absolute',
											opacity:0,
											transition: 'all 0.2s cubic-bezier(.17,.67,.83,.67)'
										}}
										_hover={{
											_after: {
												opacity: 1
											},
											_before: {
												opacity: 1,
												animation: animation
											}
										}}
									>
										<Image 
											src={project.src} 
											width= '100%'
											vertical-align= 'top'
										/>
									</Box>
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
							I&apos;m sure you like what you see,you can always reach out, let&apos;s collaborate!.
						</Text>
					</Box>
				</VStack>
				<CtaButton />
			</Box>
		</HomeLayout>
	);
};