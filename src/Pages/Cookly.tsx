/* eslint-disable */
import { Box, HStack, Link, Text, Image, VStack,  List, ListItem, SimpleGrid, chakra, UnorderedList, ListIcon } from '@chakra-ui/react';
import React, {useState} from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import { HomeLayout } from '../Layouts/HomeLayout';
import CooklyData from '../Data/Cookly.json';
import { Link as RLink, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AppRoutes } from '../Routes/AppRoutes';
import { ImageBox } from '../Components/ImageBox';
import { CtaButton } from '../Components/CtaButton';
import { NavigationButton } from '../Components/NavigationButton';
import {BsDot} from 'react-icons/bs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const Cookly = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
  	const [imgIndex, setImgIndex] = useState(0);

	return(
		<HomeLayout>
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={['85vh','74vh']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				overflow={'hidden'}
				cursor={'pointer'}
			>
				<HStack
					border={'none'}
					borderColor={'white'}
					borderRadius={'24px 24px 0px 0px'}
					bg={'#F4F0EB'}
					height={'56px'}
					width={'full'}
					boxShadow={'0px 8px 8px rgba(0, 0, 0, 0.25)'}
					position={'sticky'}
					top={0}
					// zIndex={'99999'}
					spacing={'20px'}
					justify={'flex-start'}
					pl={6}
				>
					<Link as={RLink} to={AppRoutes.projects}>
						<ChevronLeftIcon boxSize={6} color={'#CA4F29'} />
					</Link>
					<BsPinAngleFill size={'20px'} />
					<Text
						color={'#CA4F29'}
						fontSize={'16px'}
						fontWeight={'700'}
					>
						{CooklyData.name}
					</Text>
				</HStack> 
				<VStack
					align={'baseline'}
					justify={'start'}
					spacing={'10px'}
					p={4}
					h={'90%'}
					overflowY={'scroll'}
				>
					<ImageBox imageTitle={CooklyData.images[0].title} width={'60%'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[0].imageUrl} 
							width= '100%'
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Background
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CooklyData.background}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'87%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Problem Statement
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CooklyData.problemStatement}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Solution Proffered
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CooklyData.solutionProffered}
						</Text>
					</VStack>
					<Box
						alignItems={'center'}
						bg={'#F4F0EB'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						// w={['auto', '15%']}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Roles
						</Text>
						<List 
							color={'#CA4F29'}
							fontSize={'sm'}
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
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
						spacing={4}
					>
						<VStack
							align={'flex-start'}	
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'sm'}
							>	
								Research / Interviews
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'sm'}
							>
								{CooklyData.research}
							</Text>
						</VStack>
						<VStack
							align={'flex-start'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'sm'}
							>
								These are the questions i asked them:
							</Text>
							<List
								color={'#CA4F29'}
								fontSize={'sm'}
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
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
						spacing={4}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Challenges & Solutions
						</Text>
						<Box>
							
							<Text 
								color={'#CA4F29'}
								fontSize={'sm'}
								fontWeight={700}
							>
								Challenges #1
							</Text>
							<List 
								color={'#CA4F29'}
								fontSize={'sm'}
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
								fontSize={'sm'}
								fontWeight={700}
							>
								Solution
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'sm'}
							>
								{CooklyData.challenges.firstSolution}
							</Text>
						</Box>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[1].title} width={'700px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[1].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
					>
						<VStack 
							align={'flex-start'}
							spacing={'16px'}
						>
							<Text
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'sm'}
							>Challenges / Solution</Text>
							<Text
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'sm'}
							>Challenge #2</Text>
							<Text
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'sm'}
							>{CooklyData.challenges.secondChallenge}</Text>
							<List 
								color={'#CA4F29'}
								fontSize={'sm'}
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
					<ImageBox imageTitle={CooklyData.images[2].title} width={'639px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[2].imageUrl} 
							vertical-align= 'top'
							height={['auto','446px']}
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
						spacing={'16px'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Competitive Analysis
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CooklyData.competitiveAnalysis}
						</Text>
						<SimpleGrid columns={2} spacing={16}>
							<VStack align={'flex-start'}>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={'sm'}
								>Naija foods recipes</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
									fontWeight={700}
									fontSize={'sm'}
								>Recipeas</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
						// spacing={'16px'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
								Revenue model
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
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
								fontWeight={700}
								fontSize={'sm'}
							>Subscription packages</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'sm'}
								pb={'16px'}
							>
								{CooklyData.subscription}
							</Text>
							<List 
								color={'#CA4F29'}
								fontSize={'sm'}
								spacing={1}
							>
								<ListItem
									width={'fit-content'}
								> 
									<ListIcon as={BsDot} color='#CA4F29.700' />
									<chakra.span fontWeight={700} >Free </chakra.span> 
									{CooklyData.subscription[0]}
								</ListItem>
								<ListItem >
									<ListIcon as={BsDot} color='#CA4F29.700' />
									<chakra.span fontWeight={700} >Regular</chakra.span> 
									{CooklyData.subscription[1]}
								</ListItem>
								<ListItem >
									<ListIcon as={BsDot} color='#CA4F29.700' />
									<chakra.span fontWeight={700} >Premium</chakra.span>
									{CooklyData.subscription[2]}
								</ListItem>
							</List>
						</VStack>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[3].title} width={'639px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[3].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'90%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Ideation
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CooklyData.ideation}
						</Text>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[4].title} width={'639px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[4].imageUrl} 
							vertical-align= 'top'
							// height={[null, '446px']}
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[5].title} width={'500px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[5].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[6].title} width={'500px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[6].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'80%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Final Design & Implementation
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CooklyData.implemtation}
						</Text>
					</VStack>
					<ImageBox imageTitle={CooklyData.images[7].title} width={'500px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[7].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[8].title} width={'427px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[8].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[9].title} width={'664px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[9].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[10].title} width={'765px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[10].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[11].title} width={'765px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[11].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[12].title} width={'765px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[12].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CooklyData.images[13].title} width={'710px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CooklyData.images[13].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack
						alignSelf={'flex-end'}
						mr={4}
						py={'48px'}
					>
						<NavigationButton title={'Next Project'} onClick={() => navigate(AppRoutes.gather)} direction={'right'}  />
					</VStack>
				</VStack>
				{isOpen && <Lightbox
					// imageTitle={images[imgIndex].title}
					// imageCaption={images[imgIndex].caption}
					// CooklyData.images[(imgIndex +1 % CooklyData.images.length)].imageUrl
					mainSrc={CooklyData.images[imgIndex].imageUrl}
					nextSrc={CooklyData.images[(imgIndex + 1 ) % CooklyData.images.length].imageUrl}
					prevSrc={CooklyData.images[(imgIndex + 1 )% CooklyData.images.length].imageUrl}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setImgIndex((imgIndex + CooklyData.images.length - 1) % CooklyData.images.length)}
					onMoveNextRequest={() => setImgIndex((imgIndex + 1) % CooklyData.images.length)}
					enableZoom={false}
				/>}
			</Box>
		</HomeLayout>
	);
};