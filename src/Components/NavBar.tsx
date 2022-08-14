import React from 'react';
import { Flex, Text,  Link,} from '@chakra-ui/react';
import { Link as RLink, useLocation } from 'react-router-dom';
import {links} from '../Constants/NavLinks';

export const  NavBar = () => {
	const location = useLocation();
	const isActive = location.pathname;
	return (
		<Flex 
			display={['none', 'none', null, 'flex']}
			direction={'column'}
			justifyContent={'space-between'}
			alignItems={'center'}
			border={'2px'}
			borderColor={'#686875'}
			borderRadius={'24px'}
			// h={'100%'}
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
							// position={'relative'}
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
								// transform: 'scaleY(1.15)',
								transition: 'all .3s ease',
								paddingY: '32px',
								_after: {
									mt: '32px',
									transition: 'all .3s ease',
								}
							}}
						>
							{label}
						</Link>
					))
				}
			</Flex>
			<Flex 
				direction={'column'}
				py={10}
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
						bg: '#D83636',
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
		</Flex>
	);
};