import { Box, Flex, Text, Image, Link, Container, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import resume from '../Assets/resume.png';
import PaperIcon from '../Assets/PaperIcon.svg';
// import { Link as RLink } from 'react-router-dom';
import { contactDetails } from '../Constants/ContactConstant';
// import RESUME from '../Assets/RESUME.pdf';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { BsPinAngleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
	const navigate = useNavigate();
	return (
		<HomeLayout collapse={false}>
			<Box
				borderWidth={['1px', '2px']}
				borderStyle={'solid'}
				borderColor={'#686875'}
				borderRadius={['16px','24px']}
				h={{base:'78%', md: '90%', lg:'87%',  xl: '86%', '2xl': '87%'}}
				// w={['90vw','78vw']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				// p={'20px'}
				overflow={'hidden'}
			>
				<HStack
					display={['flex', 'none']}
					border={'none'}
					borderColor={'white'}
					borderRadius={['16px 16px 0px 0px','20px 20px 0px 0px']}
					bg={'#F4F0EB'}
					height={['45px','56px']}
					width={'100%'}
					// max-width={'100%'}
					boxShadow={'0px 8px 8px rgba(0, 0, 0, 0.25)'}
					position={'sticky'}
					top={0}
					// zIndex={'99999'}
					spacing={'20px'}
					justify={'flex-start'}
					pl={6}
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
						Contact
					</Text>
				</HStack>
				<Flex 
					direction={'column'}
					align={'baseline'}
					justify={'start'}
					overflowY={'scroll'}
					overflowX={'hidden'}
					p={['8px',4]} pt={'12px'}
					h={['92%','100%']}
				>
					<Box
						borderRadius={['12px','16px']}
						bgColor={'#CA4F29'}
						alignSelf={'flex-end'}
						mb={['28px','48px']}
						px={['12px','40px']}  py={'16px'}
					>
						<Container
							centerContent
							color={'#F4F0EB'}
							fontSize={['14px','16px']}
						>
							How do i reach you,<br/>
							I&apos;d love to collaborate?
						</Container>
					</Box>
					<VStack
						align={'flex-start'}
						spacing={'8px'}
					>
						{
							contactDetails.map(items => {
								return(
									<HStack
										justify={'center'}
										key={items.id}
										bgColor={'#F4F0EB'}
										w={[items.mobileWidth,'auto']}
										h={['auto','auto']}
										borderRadius={['12px','16px']}
										px={['12px','40px']}  py={'16px'}
									>
										<Text 
											fontSize={['14px','16px']} 
											fontWeight={500}
											color={'#CA4F29'}
										>
											{items.text}
										</Text>
										<Link 
											color={' #0075FF'} 
											textDecor={'underline'}
											fontSize={['14px','16px']}
											fontWeight={500}
											href={items.path}
											target='_blank'
											isExternal	
										>
											{items.name}
										</Link>
									</HStack>
								);
							})
						}
						<VStack
							bgColor={'#F4F0EB'}
							borderRadius={['12px','16px']}
							w={['320px','335px']}
							h={'150px'}
							align={'flex-start'}
							p={2}
						>
							<Image 
								w={'320px'}
								h={'130px'}
								src={resume}
							/>
							<HStack
								align={'center'}
								justify={'flex-start'}
								borderRadius={['8px','16px']}
							>
								<Image src={PaperIcon}
									borderRadius={['4px','10px']}
								/>
								<Link 
									// as={RLink} 
									color={' #0075FF'} 
									textDecor={'underline'}
									fontWeight={700}
									href={'https://docs.google.com/document/d/1EjLbHTfhPdVnpUPHo8ps-qMc66JWtkpL/export?format=pdf'}
									target='_blank'	
								>
									Open resume
								</Link>
							</HStack>
						</VStack>
					</VStack>
				</Flex>
			</Box>
		</HomeLayout>
	);
};