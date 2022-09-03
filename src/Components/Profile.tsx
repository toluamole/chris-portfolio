import React from 'react';
import { 
	Box, 
	Flex, 
	Image, 
	Text, 
	Avatar, 
	AvatarBadge, 
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	keyframes,
} from '@chakra-ui/react';
import profileImage from '../Assets/profileImage.svg';
import ExpandedImage from '../Assets/ExpandedImage.png';
import { MotionBox } from './AnimatedPages';

interface IProfileProps{
	collapse: boolean;
}

export const Profile = ({collapse}: IProfileProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const animationKeyframes = keyframes`
		0% { background-color: #D83636};
		50%{ background-color: #D83636};
		100% {background-color: #4DD836};
	`;

	return (
		<MotionBox layout
			animate={{
				opacity: collapse ? 0 : 1,
				marginTop: collapse ? '-70px' : 0,
				transition: {
					layout: {duration: 0.5}
				}
			}}
		>
			<Box
				display={'flex'}
				alignItems={'center'}
				border={'2px'}
				borderColor={'#686875'}
				borderRadius={'24px'}
				height={'10vh'}
				// width={['90vw','78vw']}
				boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
				transition={'all ease .3s'}
			>
				<Flex 
					alignItems={'center'}
					ml={4}
				>
					<Avatar src={profileImage} cursor={'pointer'} onClick={onOpen}>
						<AvatarBadge  
							animation={`${animationKeyframes} 2s ease`}
							boxSize='.8em' bg={'#4DD836'} borderColor={'#15191A'}
						/>
					</Avatar>
					<Text 
						color={'#F4F0EB'} 
						ml={4}
						fontSize={'lg'}
						fontWeight={'500'}
					>
						Oladapo Awosika
					</Text>
				</Flex>
				<Modal isCentered isOpen={isOpen} size={'lg'} onClose={onClose}>
					<ModalOverlay bg={'rgb(0 0 0 / 80%)'} />
					<ModalCloseButton 
						position={'fixed'}
						color={'#F4F0EB'} 
						top={{base:'5%', lg:'5%'}}
						right={'2.5%'} 
						w='40px'
						h={'40px'}
						border={'2px'} 
						borderColor={'#F4F0EB'} 
						borderRadius={'50%'}
						zIndex={'99999'}
					/>
					<ModalContent bg={'none'}  >
						<ModalBody  cursor={'pointer'}>
							<Image src={ExpandedImage} />
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
			{/* } */}
		</MotionBox>
	);
};