import React from 'react';
import { Flex, Text,  Link,} from '@chakra-ui/react';
import { Link as RLink, useLocation } from 'react-router-dom';
import {links} from '../Constants/NavLinks';
import { MotionBox } from './AnimatedPages';
import { AnimatePresence } from 'framer-motion';

interface IMobileNav{
	show: boolean
}

export const  MobileNavBar = ({show}:IMobileNav) => {
	const location = useLocation();
	const isActive = location.pathname;
	return (
		<AnimatePresence initial={false}>
			<MotionBox
				layout
				animate={{
					// opacity: show ? 1 : 0,
					marginLeft: show ? '-56vw' : 0,
					transition: {
						duration: 0.2
					}
				}}
				display={['flex', null, null, 'none']}
				flexDirection={'column'}
				justifyContent={'space-between'}
				alignItems={'center'}
				border={'1px'}
				borderColor={'#686875'}
				borderRadius={'16px'}
				// h={'100%'}
				w={'55%'}
				h={{base:'87vh', md:'95vh'}}
				boxShadow= {'0 0 5px rgba(198,198,211,0.4)'}
				mr={['12px','20px']}
				cursor={'pointer'}
			>
				<Flex
					direction={'column'}
					alignItems={'center'}
					// py={'20px'}
					w={{base:'55vw', md: '30vw'}}
				>
					{
						links.map(({label, path}) => (
							<Link 
								key={label}
								as={RLink}
								to={path}
								borderBottom={'1.4px solid #686875'}
								width={['40vw', '20vw', '20vw']}
								color={isActive === path ? '#CA4F29' : '#F4F0EB'} 
								textShadow={isActive === path ? '0 0 8px #CA4F29' : 'none'}
								py={'20px'}
								textAlign={'center'}
								fontSize={'14px'}
								fontWeight={isActive === path ? '700' : '400'}
								position={'relative'}
								// _after={{
								// 	content: '""',
								// 	display: 'flex',
								// 	position: 'relative',
								// 	borderBottom:'1.4px solid #686875',
								// 	boxShadow: '0 0 5px rgba(198,198,211,0.4)',
								// 	width: {base:'170px', md:'200px'},
								// 	mt: '20px',
								// }}
								// _hover={{
								// 	textDecoration: 'none',
								// 	color:'#CA4F29',
								// 	fontWeight: 'bold',
								// 	textShadow: '0 0 8px #CA4F29',
								// 	// transform: 'scaleY(1.15)',
								// 	transition: 'all .3s ease',
								// 	paddingY: '32px',
								// 	_after: {
								// 		mt: '32px',
								// 		transition: 'all .3s ease',
								// 	}
								// }}
							>
								{label}
							</Link>
						))
					}
				</Flex>
				<Flex 
					direction={'column'}
					py={10}
					alignSelf={'flex-start'}
					// w={'auto'}
					px={8}
				>
					<Text 
						color={'#CA4F29'}
						fontSize={'16px'}
						fontWeight={'500'}
					>
						Status
					</Text>
					<Text 
						color={'#B2B6C7'}
						position={'relative'}
						fontSize={'14px'}
						fontWeight={'500'}
						_before={{
							content:  '""',
							position: 'absolute',
							bg: '#4DD836',
							w: '7px',
							h: '7px',
							left: '-10%',
							bottom: '30%',
							borderRadius:'50%'
						}}
					>
						Available for
					</Text>
					<Text 
						color={'#B2B6C7'}
						fontSize={'14px'}
						fontWeight={'500'}
					>
						collaborations and 
					</Text>
					<Text 
						color={'#B2B6C7'}
						fontSize={'14px'}
						fontWeight={'500'}
					>
						jobs
					</Text>
				</Flex> 
			</MotionBox>
		</AnimatePresence>
	);
};