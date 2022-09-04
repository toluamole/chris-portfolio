/* eslint-disable */
import { Box, HStack, Link, Text, Image, VStack, List, ListItem, SimpleGrid,} from '@chakra-ui/react';
import React, {useState} from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import { HomeLayout } from '../Layouts/HomeLayout';
import GatherData from '../Data/Gather.json';
// import { useNavigate, useParams } from 'react-router-dom';
import { Link as RLink, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AppRoutes } from '../Routes/AppRoutes';
import { ImageBox } from '../Components/ImageBox';
import { CtaButton } from '../Components/CtaButton';
import { NavigationButton } from '../Components/NavigationButton';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import MAX from '../Assets/MAX.svg';
import { AnimatedPages, MotionBox } from '../Components/AnimatedPages';

export const Gather = () => {
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
		console.log(collapse);
	}

	return(
		<AnimatedPages>
			<HomeLayout collapse={collapse}>
				<MotionBox layout
					borderWidth={['1px', '2px']}
					borderStyle={'solid'}
					borderColor={'#686875'}
					borderRadius={['16px','24px']}
					h={ collapse == true ? {base:'90%', md: '90%', lg:'95%',  xl: '96%', '2xl': '96%'} : {base:'80%', md: '90%', lg:'85%',  xl: '86%', '2xl': '87%'}}
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
							<Link as={RLink} to={AppRoutes.projects}>
								<ChevronLeftIcon boxSize={6} color={'#CA4F29'} />
							</Link>
							<BsPinAngleFill size={'20px'} />
							<Text
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
								fontWeight={'700'}
							>
								{GatherData.name}
							</Text>
						</HStack>
						<Box display={['none', null, null, 'block']}><Image src={MAX} pr='9px' onClick={_handleCollapse}/></Box>
					</HStack>
					<VStack
						align={'baseline'}
						justify={'start'}
						spacing={['28px','8px']}
						p={[2,4]}
						h={{base:'100%', lg:'95%'}}
						overflowY={'scroll'}
					>
						<ImageBox imageTitle={GatherData.images[0].title} width={'60%'}  content={'View'} onclick={() => _handleClick(0)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[0].imageUrl} 
								width= '100%'
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','90%']}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
								Background
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.background}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','90%']}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
								Objective
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.objective}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={'87%'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
								Problem Statement
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.problemStatement}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','90%']}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
								Solution Proffered
							</Text>
							<List 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{
									GatherData.solutionProffered.map((item, index) => {
										return (
											<ListItem mb={'16px'} key={index}>{item}</ListItem>
										);
									})
								}
							</List>
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
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
								Roles
							</Text>
							<List 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{
									GatherData.roles. map((item, index) => {
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
							w={['320px ','83%']}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
									Research
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.research}
							</Text>
						</VStack>
						<ImageBox imageTitle={GatherData.images[1].title} width={'685px'}  content={'View'} onclick={() => _handleClick(1)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[1].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','83%']}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
									Interviews
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.interviews}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','60%']}
						>
							<VStack 
								align={'flex-start'}
								spacing={'16px'}
							>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={['14px','16px']} 
								>Interview questions</Text>
								<VStack
									align={'flex-start'}
									spacing={'16px'}
								>
									<Text
										color={'#CA4F29'}
										fontWeight={700}
										fontSize={['14px','16px']} 
									>Attendees</Text>
									<List 
										color={'#CA4F29'}
										fontSize={['14px','16px']} 
									>
										{
											GatherData.interviewQuestions.attendees. map((item, index) => {
												return (
													<ListItem key={index}>{item}</ListItem>
												);
											})
										}
									</List>
									<Text
										color={'#CA4F29'}
										fontWeight={700}
										fontSize={['14px','16px']} 
									>Organizers</Text>
									<List 
										color={'#CA4F29'}
										fontSize={['14px','16px']} 
									>
										{
											GatherData.interviewQuestions.organizers.map((item, index) => {
												return (
													<ListItem key={index}>{item}</ListItem>
												);
											})
										}
									</List>
								</VStack>
							</VStack>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','83%']}
							spacing={'16px'}
						>
							<Text
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>Key takeaways</Text>
							<VStack
								align={'flex-start'}
								spacing={'16px'}
							>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={['14px','16px']} 
								>Attendees</Text>
								<List 
									color={'#CA4F29'}
									fontSize={['14px','16px']} 
								>
									{
										GatherData.keyTakeAways.attendees. map((item, index) => {
											return (
												<ListItem key={index}>{item}</ListItem>
											);
										})
									}
								</List>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={['14px','16px']} 
								>Organizers</Text>
								<List 
									color={'#CA4F29'}
									fontSize={['14px','16px']} 
								>
									{
										GatherData.keyTakeAways.organizers.map((item, index) => {
											return (
												<ListItem key={index}>{item}</ListItem>
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
							w={['320px ','70%']}
							spacing={'16px'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
									Competitive Analysis
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.competitiveAnalysis}
							</Text>
							<SimpleGrid columns={[1,2]} spacing={[10,28]}>
								<VStack align={'flex-start'}>
									<Text
										color={'#CA4F29'}
										fontWeight={700}
										fontSize={['14px','16px']} 
									>Eventbrite</Text>
									<Text
										color={'#CA4F29'}
										fontWeight={700}
										fontSize={['14px','16px']} 
									>Pros</Text>
									<List 
										color={'#CA4F29'}
										fontSize={['14px','16px']} 
									>
										{
											GatherData.eventBrite.pros.map((item, index) => {
												return (
													<ListItem key={index}>{item}</ListItem>
												);
											})
										}
									</List>
									<List 
										color={'#CA4F29'}
										fontSize={['14px','16px']} 
									>
										{
											GatherData.eventBrite.cons.map((item, index) => {
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
										fontSize={['14px','16px']} 
									>Meetup</Text>
									<Text
										color={'#CA4F29'}
										fontWeight={700}
										fontSize={['14px','16px']} 
									>Pros</Text>
									<List 
										color={'#CA4F29'}
										fontSize={['14px','16px']} 
									>
										{
											GatherData.meetUp.pros.map((item, index) => {
												return (
													<ListItem key={index}>{item}</ListItem>
												);
											})
										}
									</List>
									<List 
										color={'#CA4F29'}
										fontSize={['14px','16px']} 
									>
										{
											GatherData.meetUp.cons.map((item, index) => {
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
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','83%']}
							// spacing={'16px'}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
									Revenue model
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
								pb={'16px'}
							>
								{GatherData.revenueModel}
							</Text>
							<VStack
								spacing={'16px'}
								align={'flex-start'}
							>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={['14px','16px']} 
								>Subscription packages</Text>
								<List 
									color={'#CA4F29'}
									fontSize={['14px','16px']} 
								>
									{
										GatherData.subscription.map((item, index) => {
											return (
												<ListItem key={index}>{item}</ListItem>
											);
										})
									}
								</List>
							</VStack>
						</VStack>
						<ImageBox imageTitle={GatherData.images[2].title} width={'427px'}  content={'View'} onclick={() => _handleClick(2)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[2].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','80%']}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
								Ideation
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.ideation}
							</Text>
						</VStack>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','80%']}
						>
							<Text 
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={['14px','16px']} 
							>
								Final Design & Implementation
							</Text>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.implemtation}
							</Text>
						</VStack>
						<ImageBox imageTitle={GatherData.images[3].title} width={'427px'}  content={'View'} onclick={() => _handleClick(3)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[3].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<ImageBox imageTitle={GatherData.images[4].title} width={'765px'}  content={'View'} onclick={() => _handleClick(4)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[4].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<ImageBox imageTitle={GatherData.images[5].title} width={'664px'}  content={'View'} onclick={() => _handleClick(5)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[5].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<ImageBox imageTitle={GatherData.images[6].title} width={'664px'}  content={'View'} onclick={() => _handleClick(6)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[6].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<VStack 
							bg={'#F4F0EB'}
							align={'flex-start'}
							px={['16px','40px']}  py={['12px','16px']}
							borderRadius={['12px','24px']}
							w={['320px ','80%']}
						>
							<Text 
								color={'#CA4F29'}
								fontSize={['14px','16px']} 
							>
								{GatherData.userFlows}
							</Text>
						</VStack>
						<ImageBox imageTitle={GatherData.images[7].title} width={'765px'}  content={'View'} onclick={() => _handleClick(7)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[7].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<ImageBox imageTitle={GatherData.images[8].title} width={'658px'}  content={'View'} onclick={() => _handleClick(8)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[8].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<ImageBox imageTitle={GatherData.images[9].title} width={'765px'}  content={'View'} onclick={() => _handleClick(9)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[9].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<ImageBox imageTitle={GatherData.images[10].title} width={'446px'}  content={'View'} onclick={() => _handleClick(10)}>
							<Image 
								src={process.env.PUBLIC_URL + GatherData.images[10].imageUrl} 
								vertical-align= 'top'
								borderRadius={['8px','16px']}
							/>
						</ImageBox>
						<VStack
							alignSelf={'flex-end'}
							mr={4}
							py={'48px'}
						>
							<NavigationButton title={'Next Project'} onClick={() => navigate(AppRoutes.cookly)} direction={'right'}  />
							<NavigationButton title={'Prev Project'} onClick={() => navigate(AppRoutes.crisp)} direction={'left'} />
						</VStack>
					</VStack>
				</MotionBox>
				{isOpen && <Lightbox
					mainSrc={GatherData.images[imgIndex].imageUrl}
					nextSrc={GatherData.images[imgIndex] === GatherData.images[GatherData.images.length - 1 ] ? undefined : GatherData.images[(imgIndex + 1) % GatherData.images.length].imageUrl}
					prevSrc={GatherData.images[imgIndex] === GatherData.images[0] ? undefined : GatherData.images[(imgIndex + 1) % GatherData.images.length].imageUrl}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setImgIndex((imgIndex + GatherData.images.length - 1) % GatherData.images.length)}
					onMoveNextRequest={() => setImgIndex((imgIndex + 1) % GatherData.images.length)}
					enableZoom={false}
					animationDisabled
					clickOutsideToClose={false}
				/>}
			</HomeLayout>
		</AnimatedPages>
	);
};