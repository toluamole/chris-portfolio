import React from 'react';
import { 
	Box, 
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
	HStack,
} from '@chakra-ui/react';
import profileImage from '../Assets/profileImage.svg';
import ExpandedImage from '../Assets/ExpandedImage.png';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Mobileprofile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<HStack
			justify='space-between'
			px={2}
			border={'1px'}
			borderColor={'#686875'}
			borderRadius={'16px'}
			height={'60px'}
			boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
		>
			<Box 
				border={'1px'} 
				borderRadius={'50%'}
				borderColor={'#C6C6D3'} 
				p={2}
			>
				<HamburgerIcon 
					color={'#C6C6D3'} 
					w={'5'} h={'5'}
				/>
			</Box>
			<Text 
				color={'#F4F0EB'} 
				fontSize={'sm'}
				fontWeight={'500'}
			>
				Oladapo Awosika
			</Text>
			<Avatar size={'sm'} src={profileImage} cursor={'pointer'} onClick={onOpen}>
				<AvatarBadge  boxSize='.8em' bg='#D83636' borderColor={'#15191A'} />
			</Avatar>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalCloseButton 
					position={'fixed'}
					color={'#F4F0EB'} 
					top={'2%'}
					right={'3%'} 
					w='50px'
					h={'50px'}
					border={'2px'} 
					borderColor={'#F4F0EB'} 
					borderRadius={'50%'}
				/>
				<ModalContent bg={'none'}>
					<ModalBody w={'500px'}>
						<Image src={ExpandedImage} boxSize={'100%'} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</HStack>
	);
};