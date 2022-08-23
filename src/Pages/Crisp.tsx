/* eslint-disable */
import { Box, HStack, Link, Text, Image, VStack, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import React, {useState} from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import { HomeLayout } from '../Layouts/HomeLayout';
import CrispData from '../Data/Crisp.json';
import { useNavigate } from 'react-router-dom';
import { Link as RLink } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AppRoutes } from '../Routes/AppRoutes';
import { ImageBox } from '../Components/ImageBox';
// import { CtaButton } from '../Components/CtaButton';
import { NavigationButton } from '../Components/NavigationButton';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { AnimatedPages } from '../Components/AnimatedPages';

export const Crisp = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [imgIndex, setImgIndex] = useState(0);

	const _handleClick = (id:number) => {
		setIsOpen(true);
		setImgIndex(id);
	}

	return(
		<AnimatedPages>
			<HomeLayout>
				<Box
					border={'2px'}
					borderColor={'#686875'}
					borderRadius={'24px'}
					h={{base:'85%', md: '90%', lg:'85%',  xl: '86%', '2xl': '87%'}}
					boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
					overflow={'hidden'}
					cursor={'pointer'}
				>
					<HStack
						border={'none'}
						borderColor={'white'}
						borderRadius={'20px 20px 0px 0px'}
						bg={'#F4F0EB'}
						height={'56px'}
						max-width={'full'}
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
							{CrispData.name}
						</Text>
					</HStack> 
					<VStack
						align={'baseline'}
						justify={'start'}
						spacing={'8px'}
						p={4}
						h={'90%'}
						overflowY={'scroll'}
					>
						<ImageBox imageTitle={CrispData.images[0].title} width={'60%'}  content={'view'}  onclick={() => -_handleClick(0)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[0].imageUrl} 
								width= '100%'
								vertical-align= 'top'
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
								Background
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.background}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'80%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
								Objective
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.objective}
							</Text>
						</VStack>
						<ImageBox imageTitle={CrispData.images[1].title} width={'60%'}  content={'view'}  onclick={() => -_handleClick(1)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[1].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<ImageBox imageTitle={CrispData.images[2].title} width={'60%'}  content={'view'}  onclick={() => -_handleClick(2)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[2].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'80%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
								Problem Statement
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.problemStatement}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'80%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
								Solution Proffered
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.solutionProffered}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							// w={'15%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
								
							>
								Roles
							</Text>
							<List 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{
									CrispData.roles. map((item, index) => {
										return (
											<ListItem key={index}>{item}</ListItem>
										);
									})
								}
							</List>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'80%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
									Research
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.research}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'60%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
									Competitive Analysis
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.competitiveAnalysis}
							</Text>
							<SimpleGrid columns={2} spacing={28}>
								<VStack align={'flex-start'}>
									<Text
										color={'#CA4F29'}
										fontWeight={700}
										fontSize={'16px'}
									>Yamaha</Text>
									<List 
										color={'#CA4F29'}
										fontSize={'16px'}
									>
										{
											CrispData.yamaha. map((item, index) => {
												return (
													<ListItem key={index}>{item}</ListItem>
												);
											})
										}
									</List>
								</VStack>
								<VStack align={'flex-start'}>
									<Text
										color={'#CA4F29'}
										fontWeight={700}
										fontSize={'16px'}
									>Fender</Text>
									<List 
										color={'#CA4F29'}
										fontSize={'16px'}
									>
										{
											CrispData.fender. map((item, index) => {
												return (
													<ListItem key={index}>{item}</ListItem>
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
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'80%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
								Ideation
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.ideation}
							</Text>
						</VStack>
						<ImageBox imageTitle={CrispData.images[3].title} width={'60%'}  content={'view'}  onclick={() => -_handleClick(3)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[3].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'80%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
								User Flow
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.userFlows}
							</Text>
						</VStack>
						<ImageBox imageTitle={CrispData.images[4].title} width={'40%'}  content={'view'}  onclick={() => -_handleClick(4)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[4].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={'40px'} py={'16px'}
							borderRadius={'24px'}
							w={'80%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'16px'}
							>
								Final Design & Implementation
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={'16px'}
							>
								{CrispData.implemtation}
							</Text>
						</VStack>
						<ImageBox imageTitle={CrispData.images[5].title} width={'80%'}  content={'view'}  onclick={() => -_handleClick(5)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[5].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<ImageBox imageTitle={CrispData.images[6].title} width={'80%'}  content={'view'}  onclick={() => -_handleClick(6)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[6].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<ImageBox imageTitle={CrispData.images[7].title} width={'80%'}  content={'view'}  onclick={() => -_handleClick(7)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[7].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<ImageBox imageTitle={CrispData.images[8].title} width={'765px'}  content={'view'}  onclick={() => -_handleClick(8)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[8].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<ImageBox imageTitle={CrispData.images[9].title} width={'765px'}  content={'view'}  onclick={() => -_handleClick(9)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[9].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<ImageBox imageTitle={CrispData.images[10].title} width={'765px'}  content={'view'}  onclick={() => -_handleClick(10)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[10].imageUrl} 
								vertical-align= 'top'
							/>
						</ImageBox>
						<ImageBox imageTitle={CrispData.images[11].title} width={'765px'}  content={'view'}  onclick={() => -_handleClick(11)}>
							<Image 
								src={process.env.PUBLIC_URL + CrispData.images[11].imageUrl} 
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
				</Box>
				{isOpen && <Lightbox
					mainSrc={CrispData.images[imgIndex].imageUrl}
					nextSrc={CrispData.images[(imgIndex + 1) % CrispData.images.length].imageUrl}
					prevSrc={CrispData.images[(imgIndex + 1) % CrispData.images.length].imageUrl}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() =>setImgIndex((imgIndex + CrispData.images.length - 1) % CrispData.images.length)}
					onMoveNextRequest={() => setImgIndex((imgIndex + 1) % CrispData.images.length)}
					enableZoom={false}
				/>}
			</HomeLayout>
		</AnimatedPages>
	);
};