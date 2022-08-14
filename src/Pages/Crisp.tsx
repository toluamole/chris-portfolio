/* eslint-disable */
import { Box, HStack, Link, Text, Image, VStack, Container, Heading, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import { HomeLayout } from '../Layouts/HomeLayout';
import projectsData from '../Data/projects.json';
import { useNavigate, useParams } from 'react-router-dom';
import { Link as RLink } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AppRoutes } from '../Routes/AppRoutes';
import { ImageBox } from '../Components/ImageBox';
import { CtaButton } from '../Components/CtaButton';
import { NavigationButton } from '../Components/NavigationButton';

export const Crisp = () => {
	const navigate = useNavigate();
	const location = useParams();
	let projectId = 0; 
	
	if(location.projectId !== undefined){
		projectId = parseInt(location.projectId); 
	}

	const handleNavigate = () => {
		navigate(`project/${projectId}` );
	};

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
					bg={'#F4F0EB'}
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
					<Link as={RLink} to={AppRoutes.projects}>
						<ChevronLeftIcon boxSize={6} color={'#CA4F29'} />
					</Link>
					<BsPinAngleFill size={'20px'} />
					<Text
						color={'#CA4F29'}
						fontSize={'16px'}
						fontWeight={'700'}
					>
						{projectsData[projectId].name}
					</Text>
				</HStack> 
				<VStack
					align={'flex-start'}
					justify={'center'}
					spacing={'10px'}
					p={4}
				>
					<ImageBox imageTitle={projectsData[projectId].images[0].title} width={'60%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[0].imageUrl} 
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
							{projectsData[projectId].background}
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
							{projectsData[projectId].objective}
						</Text>
					</VStack>
					<ImageBox imageTitle={projectsData[projectId].images[1].title} width={'60%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[1].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={projectsData[projectId].images[2].title} width={'60%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[2].imageUrl} 
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
							{projectsData[projectId].problemStatement}
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
							{projectsData[projectId].solutionProffered}
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
								projectsData[projectId].roles. map((item, index) => {
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
							{projectsData[projectId].research}
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
							{projectsData[projectId].competitiveAnalysis}
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
										projectsData[projectId].yamaha. map((item, index) => {
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
										projectsData[projectId].fender. map((item, index) => {
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
							{projectsData[projectId].ideation}
						</Text>
					</VStack>
					<ImageBox imageTitle={projectsData[projectId].images[3].title} width={'60%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[3].imageUrl} 
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
							{projectsData[projectId].userFlows}
						</Text>
					</VStack>
					<ImageBox imageTitle={projectsData[projectId].images[4].title} width={'40%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[4].imageUrl} 
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
							{projectsData[projectId].implemtation}
						</Text>
					</VStack>
					<ImageBox imageTitle={projectsData[projectId].images[5].title} width={'80%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[5].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={projectsData[projectId].images[6].title} width={'80%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[6].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={projectsData[projectId].images[7].title} width={'80%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[7].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={projectsData[projectId].images[8].title} width={'90%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[8].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={projectsData[projectId].images[9].title} width={'90%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[9].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={projectsData[projectId].images[10].title} width={'90%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[10].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
					<ImageBox imageTitle={projectsData[projectId].images[11].title} width={'90%'}  content={'view'}>
						<Image 
							src={process.env.PUBLIC_URL + projectsData[projectId].images[11].imageUrl} 
							vertical-align= 'top'
						/>
					</ImageBox>
				</VStack>
				<VStack
					mr={4}
					my={'48px'}
				>
					<NavigationButton title={'Next Project'} onClick={() => navigate(AppRoutes.Gather)} direction={'right'}  />
				</VStack>
			</Box>
		</HomeLayout>
	);
};