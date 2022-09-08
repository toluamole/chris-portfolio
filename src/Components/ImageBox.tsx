import { VStack, Box, Text, keyframes, Skeleton } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

interface IImageBoxProps{
    children: React.ReactNode;
    imageTitle?: string;
	width: string
	content: string
	display?: 'none' | 'block'
	onclick?: () => void;
}

export const ImageBox = ({children, imageTitle, width,content, display, onclick}:IImageBoxProps) => {
	const [loaded, setLoaded] = useState(false);

	const handleImageOnLoad = useCallback(() => {
		setLoaded(true);
	}, []);

	const animationKeyframes = keyframes`
		0% { opacity: 0; transform: scale(5); }
		50% {opacity: 0.7; transform: scale3d(1.5,1.5,1);}
		100% {transform:  opacity: 1, transform: scale(2)};
	`;

	const animation = `${animationKeyframes} .2s ease`;
	return (
		<VStack 
			// border={'1px'}
			borderRadius={['8px','16px']}
			bgColor={'#F4F0EB'}
			p={['4px',2]} 
			width={['100%',null, null, width]}
			h={['100%', 'auto']}
			onClick={onclick}
		>
			<>
				<Box
					position={'relative'}
					display={loaded ? 'block' : 'none'}
					onLoad={handleImageOnLoad}
					_before={{
						content:'" "',
						position:'absolute',
						width:{base:'100%', lg: '100%'},
						height:'100%',
						top:0, 
						left:0,
						background:'rgba(0,0,0,0.5)',
						opacity:0,
						transition: 'all 0.5s',
						borderRadius: {base:'4px',lg:'10px'}
					}}
					_after={{
						content: `'${content}'`,
						width:'80px',
						height: '80px',
						color:'#fff',
						ZIndex:'1',
						bottom:'38%',
						left: '43%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						bg:'#CA4F29',
						borderRadius: '50%',
						position:'absolute',
						opacity:0,
						transition: 'all 0.2s cubic-bezier(.17,.67,.83,.67)'
					}}
					_hover={{
						_after: {
							opacity: {base: 0, lg:1},
							animation: {base: 'none', lg:animation}
						},
						_before: {
							opacity: {base: 0, lg:1},
						}
					}}
				>
					{children}
				</Box>
				{ !loaded && 
					<Skeleton  
						width={'100%'} 
						height={['250px', '430px']} 
						borderRadius={['4px','10px']} 
						startColor={'#E5E2DD'}
						// startColor={'#F4F0EB'}
					/>
				}
			</>
			<Text 
				alignSelf={'flex-start'}
				color={'#CA4F29'}
				fontSize={'16px'} 
				fontWeight={700}
				py={['4px',2]}
				display={display}
			>
				{imageTitle}
			</Text>
		</VStack>
	);
};