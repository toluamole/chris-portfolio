/* eslint-disable */
import { Box, HStack, Text, Image, VStack,  List, ListItem, SimpleGrid, chakra, ListIcon } from '@chakra-ui/react';
import React, {useState} from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import { HomeLayout } from '../Layouts/HomeLayout';
import CooklyData from '../Data/Cookly.json';
import {  useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AppRoutes } from '../Routes/AppRoutes';
import { ImageBox } from '../Components/ImageBox';
import { NavigationButton } from '../Components/NavigationButton';
import {BsDot} from 'react-icons/bs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { MotionBox } from '../Components/AnimatedPages';
import MAX from '../Assets/MAX.svg';
import MAX2 from '../Assets/MAX2.svg';

export const Cookly = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
  	const [imgIndex, setImgIndex] = useState(0);
	const [collapse, setCollapse] = useState(false);

	const _handleClick = (id:number) => {
		setIsOpen(true);
		setImgIndex(id);
	}

	const _handleCollapse = () => {
		setCollapse(!collapse);
	}

	return(
		<HomeLayout  collapse={collapse} >
			<MotionBox layout
				borderWidth={['1px', '2px']}
				borderStyle={'solid'}
				borderColor={'#686875'}
				borderRadius={['16px','24px']}
				h={ collapse == true ? {base:'85%', md: '90%', lg:'95%',  xl: '96%', '2xl': '96%'} : {base:'78%', md: '90%', lg:'85%',  xl: '86%', '2xl': '87%'}}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				overflow={'hidden'}
				cursor={'pointer'}
			>
				<HStack
					border={'none'}
					borderColor={'white'}
					borderRadius={['16px 16px 0px 0px','20px 20px 0px 0px']}
					bg={'#F4F0EB'}
					height={['45px','56px']}
					width={'full'}
					boxShadow={'0px 8px 8px rgba(0, 0, 0, 0.25)'}
					position={'sticky'}
					top={0}
					// zIndex={'99999'}
					justify={'space-between'}
					pl={6}
				>
					<HStack
						spacing={'20px'}
						justify={'flex-start'}
					>
						<Box  onClick={() => navigate(-1)} >
							<ChevronLeftIcon boxSize={6} color={'#CA4F29'} />
						</Box>
						<BsPinAngleFill size={'20px'} />
						<Text
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
							fontWeight={'700'}
						>
							{CooklyData.name}
						</Text>
					</HStack>
					<Box display={['none', null, null, 'block']}><Image src={collapse ? MAX2 : MAX} pr='9px' onClick={_handleCollapse}/></Box>
				</HStack> 
				<VStack
					align={'baseline'}
					justify={'start'}
					spacing={['28px','8px']}
					p={[2,4]} pt={'12px'}
					h={{base:'95%', lg:'95%'}}
					overflowY={'scroll'}
				>
					<ImageBox imageTitle={CooklyData.images[0].title} width={'60%'}  content={'View'} onclick={() => _handleClick(0)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[0].imageUrl} 
							width= '100%'
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Background
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
						>
							{CooklyData.background}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','87%']}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Problem Statement
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
						>
							{CooklyData.problemStatement}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Solution Proffered
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
						>
							{CooklyData.solutionProffered}
						</Text>
					</VStack>
					<Box
						alignItems={'center'}
						bg={'#F4F0EB'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						// w={['auto', '15%']}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Roles
						</Text>
						<List 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
						>
							{
								CooklyData.roles. map((item, index) => {
									return (
										<ListItem key={index}>{item}</ListItem>
									);
								})
							}
						</List>
					</Box>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
						spacing={4}
					>
						<VStack
							align={'flex-start'}	
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={'bold'}
								fontSize={['14px','16px']} 
							>	
								Research / Interviews
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{CooklyData.research}
							</Text>
						</VStack>
						<VStack
							align={'flex-start'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={'bold'}
								fontSize={['14px','16px']} 
							>
								These are the questions i asked them:
							</Text>
							<List
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{
									CooklyData.interviewQuestions.map((item, index) => {
										return (
											<ListItem key={index}>
												<ListIcon as={BsDot} color='#CA4F29.700' />
												{item}
											</ListItem>
										);
									})
								}
							</List>
						</VStack>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
						spacing={4}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Challenges & Solutions
						</Text>
						<Box>
							
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
								fontWeight={'bold'}
							>
								Challenges #1
							</Text>
							<List 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{
									CooklyData.challenges.firstChallenge.map((item, index) => {
										return (
											<ListItem key={index}>{item}</ListItem>
										);
									})
								}
							</List>
						</Box>
						<Box>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
								fontWeight={'bold'}
							>
								Solution
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{CooklyData.challenges.firstSolution}
							</Text>
						</Box>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[1].title} width={'700px'}  content={'View'} onclick={() => _handleClick(1)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[1].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
					>
						<VStack 
							align={'flex-start'}
							spacing={'16px'}
						>
							<Text
								color={'#CA4F29'}
								fontWeight={'bold'}
								fontSize={['14px','16px']} 
							>Challenges / Solution</Text>
							<Text
								color={'#CA4F29'}
								fontWeight={'bold'}
								fontSize={['14px','16px']} 
							>Challenge #2</Text>
							<Text
								color={'#CA4F29'}
								fontWeight={'bold'}
								fontSize={['14px','16px']} 
							>{CooklyData.challenges.secondChallenge}</Text>
							<List 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{
									CooklyData.challenges.secondSolution. map((item, index) => {
										return (
											<ListItem key={index}>{item}</ListItem>
										);
									})
								}
							</List>
						</VStack>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[2].title} width={'639px'}  content={'View'} onclick={() => _handleClick(2)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[2].imageUrl} 
							vertical-align= 'top'
							height={['auto','446px']}
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
						spacing={'16px'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Competitive Analysis
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
						>
							{CooklyData.competitiveAnalysis}
						</Text>
						<SimpleGrid columns={[1,2]} spacing={[10,16]}>
							<VStack align={'flex-start'}>
								<Text
									color={'#CA4F29'}
									fontWeight={'bold'}
									fontSize={['14px','16px']} 
								>Naija foods recipes</Text>
								<List 
									color={'#CA4F29'}
									fontSize={['14px','16px']} 
								>
									{
										CooklyData.naijaFood.map((item, index) => {
											return (
												<ListItem key={index}>
													<ListIcon as={BsDot} color='#CA4F29.700' />
													{item}
												</ListItem>
											);
										})
									}
								</List>
							</VStack>
							<VStack align={'flex-start'}>
								<Text
									color={'#CA4F29'}
									fontWeight={'bold'}
									fontSize={['14px','16px']} 
								>Recipeas</Text>
								<List 
									color={'#CA4F29'}
									fontSize={['14px','16px']} 
								>
									{
										CooklyData.Recipeas.map((item, index) => {
											return (
												<ListItem key={index}>
													<ListIcon as={BsDot} color='#CA4F29.700' />
													{item}
												</ListItem>
											);
										})
									}
								</List>
							</VStack>
						</SimpleGrid>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
						// spacing={'16px'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
								Revenue model
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
							pb={'16px'}
						>
							{CooklyData.revenueModel}
						</Text>
						<VStack
							spacing={'16px'}
							align={'flex-start'}
						>
							<Text
								color={'#CA4F29'}
								fontWeight={'bold'}
								fontSize={['14px','16px']} 
							>Subscription packages</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
								pb={'16px'}
							>
								{CooklyData.subscription}
							</Text>
							<List 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
								spacing={1}
							>
								<ListItem> 
									<ListIcon as={BsDot} color='#CA4F29.700' />
									<chakra.span fontWeight={'bold'} >Free </chakra.span> 
									{CooklyData.subscription[0]}
								</ListItem>
								<ListItem >
									<ListIcon as={BsDot} color='#CA4F29.700' />
									<chakra.span fontWeight={'bold'} >Regular</chakra.span> 
									{CooklyData.subscription[1]}
								</ListItem>
								<ListItem >
									<ListIcon as={BsDot} color='#CA4F29.700' />
									<chakra.span fontWeight={'bold'} >Premium</chakra.span>
									{CooklyData.subscription[2]}
								</ListItem>
							</List>
						</VStack>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[3].title} width={'639px'}  content={'View'} onclick={() => _handleClick(3)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[3].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','90%']}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Ideation
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
						>
							{CooklyData.ideation}
						</Text>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[4].title} width={'639px'}  content={'View'} onclick={() => _handleClick(4)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[4].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
							// height={[null, '446px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[5].title} width={'500px'}  content={'View'} onclick={() => _handleClick(5)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[5].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[6].title} width={'500px'}  content={'View'} onclick={() => _handleClick(6)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[6].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						px={['16px','40px']}  py={['12px','16px']}
						borderRadius={['12px','24px']}
						w={['316px ','80%']}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={'bold'}
							fontSize={['14px','16px']} 
						>
							Final Design & Implementation
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={['14px','16px']} 
						>
							{CooklyData.implemtation}
						</Text>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[7].title} width={'500px'}  content={'View'} onclick={() => _handleClick(7)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[7].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[8].title} width={'427px'}  content={'View'} onclick={() => _handleClick(8)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[8].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[9].title} width={'664px'}  content={'View'} onclick={() => _handleClick(9)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[9].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[10].title} width={'765px'}  content={'View'} onclick={() => _handleClick(10)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[10].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[11].title} width={'765px'}  content={'View'} onclick={() => _handleClick(11)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[11].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[12].title} width={'765px'}  content={'View'} onclick={() => _handleClick(12)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[12].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[13].title} width={'710px'}  content={'View'} onclick={() => _handleClick(13)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[13].imageUrl} 
							vertical-align= 'top'
							borderRadius={['4px','10px']}
						/>
					</ImageBox>
					<VStack
						alignSelf={'flex-end'}
						mr={4}
						pt={'48px'} pb={['50px', '48px']}
					>
						<NavigationButton title={'Prev Project'} onClick={() => navigate(AppRoutes.gather)} direction={'left'}  />
					</VStack>
				</VStack>
				{isOpen && <Lightbox
					mainSrc={CooklyData.images[imgIndex].imageUrl}
					nextSrc={CooklyData.images[imgIndex] === CooklyData.images[CooklyData.images.length - 1 ] ? undefined : CooklyData.images[(imgIndex + 1 ) % CooklyData.images.length].imageUrl}
					prevSrc={CooklyData.images[imgIndex] === CooklyData.images[0] ? undefined : CooklyData.images[(imgIndex + 1 )% CooklyData.images.length].imageUrl}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setImgIndex((imgIndex + CooklyData.images.length - 1) % CooklyData.images.length)}
					onMoveNextRequest={() => setImgIndex((imgIndex + 1) % CooklyData.images.length)}
					enableZoom={false}
					animationDisabled
				/>}
			</MotionBox>
		</HomeLayout>
	);
};