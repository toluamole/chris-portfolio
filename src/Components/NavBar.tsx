import React from 'react';
import { Flex, Text,  Link,} from '@chakra-ui/react';
import { Link as RLink, useLocation } from 'react-router-dom';
import {links} from '../Constants/NavLinks';
import AnimatedCursor from 'react-animated-cursor';
import { MotionBox } from './AnimatedPages';

interface INavbarProps{
	collapse: boolean;
}

export const  NavBar = ({collapse}:INavbarProps) => {
	const location = useLocation();
	const isActive = location.pathname;
	return (
		<MotionBox layout>
			{ collapse === false && <Flex 
				// display={['none', 'none', null, 'flex']}
				direction={'column'}
				justifyContent={'space-between'}
				alignItems={'center'}
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				h={'100%'}
				w={['25vw','18vw']}
				boxShadow= {'0 0 5px rgba(198,198,211,0.4)'}
				mr={'20px'}
			>
				<Flex
					direction={'column'}
					alignItems={'center'}
					px={8} py={'20px'}
				>
					{
						links.map(({label, path}) => (
							<Link 
								key={label}
								as={RLink}
								to={path}
								color={isActive === path ? '#CA4F29' : '#F4F0EB'} 
								textShadow={isActive === path ? '0 0 8px #CA4F29' : 'none'}
								py={'10px'}
								textAlign={'center'}
								fontSize={'14px'}
								fontWeight={isActive === path ? '700' : '400'}
								_after={{
									content: '""',
									display: 'flex',
									position: 'relative',
									borderBottom:'1.4px solid #686875',
									boxShadow: '0 0 5px rgba(198,198,211,0.4)',
									width: {base:'80px', md:'80px', lg: '100px', xl: '200px', '2xl': '350px'},
									
									mt: '20px',
								}}
								_hover={{
									textDecoration: 'none',
									color:'#CA4F29',
									fontWeight: 'bold',
									textShadow: '0 0 8px #CA4F29',
									// transform: 'translateY(-5px)',
									transition: 'all .3s ease',
									// _after: {
									// 	// mt: '32px',
									// 	transform: 'translateY(-5px)',
									// 	transition: 'all .3s ease',
									// }
								}}
							>
								<Text
									_hover={{
										// transform: 'translateY(-10px)',
										top: '10px',
										transition: 'all .3s ease',
									}}
								>{label}</Text>
							</Link>
						))
					}
				</Flex>
				<Flex 
					direction={'column'}
					py={10} px={[6]}
					textAlign={'start'}
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
						collaborations and jobs
					</Text>
				</Flex> 
				<AnimatedCursor innerSize={20} clickables={['button', 'a']} />
			</Flex>}
		</MotionBox>
	);
};