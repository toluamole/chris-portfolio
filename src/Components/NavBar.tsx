import React from 'react';
import { Flex, Text,  Link,} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import {links} from '../Constants/NavLinks';

export const  NavBar = () => {
	return (
		<Flex 
			display={['none', 'flex']}
			direction={'column'}
			justifyContent={'space-between'}
			alignItems={'center'}
			border={'2px'}
			borderColor={'rgba(198,198,211,0.4)'}
			borderRadius={'24px'}
			h={'100%'}
			w={['25vw','18vw']}
			boxShadow= {'0 0 5px rgba(198,198,211,0.4)'}
		>
			<Flex
				direction={'column'}
				alignItems={'center'}
				p={8}
			>
				{
					links.map(({label, path}) => (
						<Link 
							key={label}
							as={RLink}
							to={path}
							color={'#F4F0EB'} 
							mb={'15px'}
							textAlign={'center'}
							fontSize={'14px'}
							fontWeight={'400'}
							// position={'relative'}
							_after={{
								content: '""',
								display: 'flex',
								position: 'relative',
								borderBottom:'1.4px solid rgba(198,198,211,0.4)',
								filter: 'auto',
								opacity:'0.4px',
								boxShadow: '0 0 3px rgba(198,198,211,0.4)',
								width: {base:'80px', md:'80px', lg: '100px', xl: '200px', '2xl': '350px'},
								
								mt: '15px'
							}}
							_hover={{
								textDecoration: 'none',
								color:'#CA4F29',
								textShadow: '0 0 1.2px #CA4F29',
								transform: 'scaleY(1.15)',
								transition: 'all .1s ease'
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