import React from 'react';
import { Flex, Text,  Link, keyframes} from '@chakra-ui/react';
import { Link as RLink, useLocation } from 'react-router-dom';
import {links} from '../Constants/NavLinks';
import AnimatedCursor from 'react-animated-cursor';
import { MotionBox } from './AnimatedPages';
import { AnimatePresence } from 'framer-motion';

interface INavbarProps{
	collapse: boolean;
}

export const  NavBar = ({collapse}:INavbarProps) => {
	const location = useLocation();
	const isActive = location.pathname;
	const animationKeyframes = keyframes`
	0% { background-color: #D83636};
	50%{ background-color: #D83636};
	100% {background-color: #4DD836};
`;


	return (
		<AnimatePresence initial={false}>
			<MotionBox 
				layout
				animate={{
					opacity: collapse ? 0 : 1,
					marginLeft: collapse ? '-250px' : 0,
					transition: {
						layout: {duration: 0.5}
					}
				}}
			>
				<Flex 
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
					// transform={'translateX(-50%)'}
				>
					<Flex
						direction={'column'}
						alignItems={'center'}
						px={8}
					>
						{
							links.map(({label, path}) => (
								<Link 
									key={label}
									as={RLink}
									to={path}
									display={'flex'}
									flexDirection={'column'}
									justifyContent={'center'}
									borderBottom={'1.4px solid #686875'}
									width={'15vw'}
									color={isActive === path ? '#CA4F29' : '#F4F0EB'} 
									boxShadow= { ' inset 0 -4px 5px -5px rgba(198,198,211,0.4)'}
									textShadow={isActive === path ? '0 0 8px #CA4F29' : 'none'}
									py={isActive == path ? '28px' : '16px' }
									textAlign={'center'}
									fontSize={'14px'}
									fontWeight={isActive === path ? 'bold' : 'medium'}
									position={'relative'}

									_hover={{
										textDecoration: 'none',
										color:'#CA4F29',
										fontWeight: 'bold',
										textShadow: '0 0 8px #CA4F29',
										pt: '20px',
										pb: '20px',
										transition: 'all .3s ease',
									}}
								>
									<Text>{label}</Text>
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
								borderRadius:'50%',
								animation: `${animationKeyframes} 2s ease`
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
				</Flex>
			</MotionBox>
		</AnimatePresence>
	);
};