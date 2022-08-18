/* eslint-disable */
import { Box, HStack, Link, Text, Image, VStack, Container, Heading, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import React, {useState} from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import { HomeLayout } from '../Layouts/HomeLayout';
import CrispData from '../Data/Crisp.json';
import { useNavigate } from 'react-router-dom';
import { Link as RLink } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AppRoutes } from '../Routes/AppRoutes';
import { ImageBox } from '../Components/ImageBox';
import { CtaButton } from '../Components/CtaButton';
import { NavigationButton } from '../Components/NavigationButton';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const Crisp = () => {
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
					spacing={'10px'}
					p={4}
					h={'90%'}
					overflowY={'scroll'}
				>
					<ImageBox imageTitle={CrispData.images[0].title} width={'60%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[0].imageUrl} 
							width= '100%'
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
						borderRadius={'24px'}
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
							{CrispData.background}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
						borderRadius={'24px'}
						w={'80%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							Objective
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CrispData.objective}
						</Text>
					</VStack>
					<ImageBox imageTitle={CrispData.images[1].title} width={'60%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[1].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CrispData.images[2].title} width={'60%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[2].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
						borderRadius={'24px'}
						w={'80%'}
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
							{CrispData.problemStatement}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
						borderRadius={'24px'}
						w={'80%'}
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
							{CrispData.solutionProffered}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
						borderRadius={'24px'}
						w={'15%'}
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
						p={4}
						borderRadius={'24px'}
						w={'80%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
								Research
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CrispData.research}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
						borderRadius={'24px'}
						w={'60%'}
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
							{CrispData.competitiveAnalysis}
						</Text>
						<SimpleGrid columns={2} spacing={28}>
							<VStack align={'flex-start'}>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={'sm'}
								>Yamaha</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
									fontSize={'sm'}
								>Fender</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
						p={4}
						borderRadius={'24px'}
						w={'80%'}
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
							{CrispData.ideation}
						</Text>
					</VStack>
					<ImageBox imageTitle={CrispData.images[3].title} width={'60%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[3].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
						borderRadius={'24px'}
						w={'80%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
							User Flow
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{CrispData.userFlows}
						</Text>
					</VStack>
					<ImageBox imageTitle={CrispData.images[4].title} width={'40%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[4].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						p={4}
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
							{CrispData.implemtation}
						</Text>
					</VStack>
					<ImageBox imageTitle={CrispData.images[5].title} width={'80%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[5].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CrispData.images[6].title} width={'80%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[6].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CrispData.images[7].title} width={'80%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[7].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CrispData.images[8].title} width={'90%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[8].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CrispData.images[9].title} width={'90%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[9].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CrispData.images[10].title} width={'90%'}  content={'view'}  onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + CrispData.images[10].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={CrispData.images[11].title} width={'90%'}  content={'view'}  onclick={() => setIsOpen(true)}>
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
	);
};