import { Box, Flex, Text, Image, Link, Container } from '@chakra-ui/react';
import React from 'react';
import { HomeLayout } from '../Layouts/HomeLayout';
import resume from '../Assets/resume.png';
import PaperIcon from '../Assets/PaperIcon.svg';
import { Link as RLink } from 'react-router-dom';
import { ContactInfomation } from '../Constants/ContactConstant';

export const Contact = () => {
	return (
		<HomeLayout>
			<Box
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={'74vh'}
				// w={['90vw','78vw']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				// p={4}
				p={'20px'}
				overflow={'auto'}
			>
				<Flex 
					direction={'column'}
				>
					<Box
						w={['', '240px']}
						// h={['', '45px']}
						borderRadius={'16px'}
						bgColor={'#CA4F29'}
						alignSelf={'flex-end'}
						mb={'40px'}
					>
						<Container
							centerContent
							color={'#F4F0EB'}
							fontSize={'sm'}
							// textAlign={'center'}
							p={4}
						>
							How do i reach you,<br/>
							I&apos;d love to collaborate
						</Container>
					</Box>
					{
						ContactInfomation.map(items => {
							return(
								<Flex 
									key={items.id}
									direction={'row'}
									alignItems={'center'}
									bgColor={'#F4F0EB'}
									w={['280px',`${items.width}`]}
									h={['auto','auto']}
									borderRadius={'16px'}
									mb={2} px={['16px', '20px']} py={4}
								>
									<Text 
										fontSize={'sm'} 
										fontWeight={500}
										color={'#CA4F29'}
										mr={1}
									>
										{items.text}
									</Text>
									<Link 
										as={RLink} 
										color={' #0075FF'} 
										textDecor={'underline'}
										fontSize={'md'} 
										fontWeight={500}
										to={items.path}>
										{items.name}
									</Link>
								</Flex>
							);
						})
					}
					<Flex
						direction={'column'}
						// alignItems={'center'}
						justifyContent={'center'}
						bgColor={'#F4F0EB'}
						borderRadius={'16px'}
						w={'335px'}
						h={'150px'}
						py={4}
					>
						<Image 
							alignSelf={'center'}
							w={'320px'}
							h={'130px'}
							objectFit={'cover'}
							src={resume}
							mb={3}
						/>
						<Flex
							alignItems={'center'}
							ml={2}
						>
							<Image src={PaperIcon} mr={4}/>
							<Link 
								as={RLink} 
								color={' #0075FF'} 
								textDecor={'underline'}
								fontWeight={700}
								to="">
								Open resume
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</HomeLayout>
	);
};