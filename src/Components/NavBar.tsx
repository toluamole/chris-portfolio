import React from 'react';
import { Flex, Text,  Link,} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import {links} from '../Constants/NavLinks';

export const  NavBar = () => {
	return (
		<Flex 
			direction={'column'}
			justifyContent={'space-between'}
			alignItems={'center'}
			border={'1px'}
			borderColor={'#C6C6D3'}
			borderRadius={'24px'}
			h={'100%'}
			boxShadow= {'0 0 5px rgba(198, 198, 211, 1)'}
			opacity= {'0.7'}
		>
			<Flex
				direction={'column'}
				// justifyContent={'space-evenly'}
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
								borderBottom:'1px solid #C6C6D3',
								filter: 'auto',
								blur:'.8px',
								boxShadow: '0 0 10px rgba(198, 198, 211, 1)',
								width: '200px',
								mt: '15px'
							}}
							_hover={{
								textDecoration: 'none',
								color:'#CA4F29',
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
					textShadow= '0 0 .7px rgb(200 198 211 / 13%)'
				>
					Status
				</Text>
				<Text 
					color={'#B2B6C7'}
					position={'relative'}
					fontSize={'14px'}
					fontWeight={'500'}
					textShadow= '0 0 1.2px rgba(198, 198, 211, 1)'
					_before={{
						content:  '""',
						position: 'absolute',
						bg: '#D83636',
						w: '7px',
						h: '7px',
						left: '-15%',
						bottom: '15%',
						borderRadius:'50%'
					}}
				>
					Available for
				</Text>
				<Text 
					color={'#B2B6C7'}
					fontSize={'14px'}
					fontWeight={'500'}
					textShadow= '0 0 1.2px rgba(198, 198, 211, 1)'
				>
					collaborations and jobs
				</Text>
			</Flex> 
		</Flex>
	);
};