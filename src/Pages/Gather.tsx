/* eslint-disable */
import { Box, HStack, Link, Text, Image, VStack, Container, Heading, List, ListItem, SimpleGrid, Flex, Spacer } from '@chakra-ui/react';
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

export const Gather = () => {
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
						{GatherData.name}
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
					<ImageBox imageTitle={GatherData.images[0].title} width={'60%'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[0].imageUrl} 
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
							{GatherData.background}
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
							Objective
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{GatherData.objective}
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
							{GatherData.problemStatement}
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
						<List 
							color={'#CA4F29'}
							fontSize={'sm'}
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
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'83%'}
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
							{GatherData.research}
						</Text>
					</VStack>
					<ImageBox imageTitle={GatherData.images[1].title} width={'685px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[1].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'83%'}
					>
						<Text 
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>
								Interviews
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{GatherData.interviews}
						</Text>
					</VStack>
					<VStack 
						bg={'#F4F0EB'}
						align={'flex-start'}
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'60%'}
					>
						<VStack 
							align={'flex-start'}
							spacing={'16px'}
						>
							<Text
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'sm'}
							>Interview questions</Text>
							<VStack
								align={'flex-start'}
								spacing={'16px'}
							>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={'sm'}
								>Attendees</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
									fontSize={'sm'}
								>Organizers</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'83%'}
						spacing={'16px'}
					>
						<Text
							color={'#CA4F29'}
							fontWeight={700}
							fontSize={'sm'}
						>Key takeaways</Text>
						<VStack
							align={'flex-start'}
							spacing={'16px'}
						>
							<Text
								color={'#CA4F29'}
								fontWeight={700}
								fontSize={'sm'}
							>Attendees</Text>
							<List 
								color={'#CA4F29'}
								fontSize={'sm'}
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
								fontSize={'sm'}
							>Organizers</Text>
							<List 
								color={'#CA4F29'}
								fontSize={'sm'}
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
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'70%'}
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
							{GatherData.competitiveAnalysis}
						</Text>
						<SimpleGrid columns={2} spacing={28}>
							<VStack align={'flex-start'}>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={'sm'}
								>Eventbrite</Text>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={'sm'}
								>Pros</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
									fontSize={'sm'}
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
									fontSize={'sm'}
								>Meetup</Text>
								<Text
									color={'#CA4F29'}
									fontWeight={700}
									fontSize={'sm'}
								>Pros</Text>
								<List 
									color={'#CA4F29'}
									fontSize={'sm'}
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
									fontSize={'sm'}
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
						py={'16px'} px={'40px'}
						borderRadius={'24px'}
						w={'83%'}
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
							{GatherData.revenueModel}
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
							<List 
								color={'#CA4F29'}
								fontSize={'sm'}
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
					<ImageBox imageTitle={GatherData.images[2].title} width={'427px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[2].imageUrl} 
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
							Ideation
						</Text>
						<Text 
							color={'#CA4F29'}
							fontSize={'sm'}
						>
							{GatherData.ideation}
						</Text>
					</VStack>
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
							{GatherData.implemtation}
						</Text>
					</VStack>
					<ImageBox imageTitle={GatherData.images[3].title} width={'427px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[3].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={GatherData.images[4].title} width={'800px'}  content={'View'}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[4].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={GatherData.images[5].title} width={'664px'}  content={'View'}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[5].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={GatherData.images[6].title} width={'664px'}  content={'View'}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[6].imageUrl} 
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
							fontSize={'sm'}
						>
							{GatherData.userFlows}
						</Text>
					</VStack>
					<ImageBox imageTitle={GatherData.images[7].title} width={'765px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[7].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={GatherData.images[8].title} width={'658px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[8].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={GatherData.images[9].title} width={'80%'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[9].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={GatherData.images[10].title} width={'446px'}  content={'View'} onclick={() => setIsOpen(true)}>
						<Image 
							src={process.env.PUBLIC_URL + GatherData.images[10].imageUrl} 
							vertical-align= 'top'
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
			</Box>
			{isOpen && <Lightbox
				mainSrc={GatherData.images[imgIndex].imageUrl}
				nextSrc={GatherData.images[(imgIndex + 1) % GatherData.images.length].imageUrl}
				prevSrc={GatherData.images[(imgIndex + 1) % GatherData.images.length].imageUrl}
				onCloseRequest={() => setIsOpen(false)}
				onMovePrevRequest={() => setImgIndex((imgIndex + GatherData.images.length - 1) % GatherData.images.length)}
				onMoveNextRequest={() => setImgIndex((imgIndex + 1) % GatherData.images.length)}
				enableZoom={false}
			/>}
		</HomeLayout>
	);
};