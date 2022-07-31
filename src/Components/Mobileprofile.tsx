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
} from '@chakra-ui/react';
import profileImage from '../Assets/profileImage.svg';
import ExpandedImage from '../Assets/ExpandedImage.png';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Mobileprofile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			flexDirection={'column'}
			border={'1px'}
			borderColor={'#C6C6D3'}
			borderRadius={'16px'}
			height={'60px'}
			width={'90vw'}
			mt={'6'}
			boxShadow= {'0 0 5px rgba(58, 38, 200, 100)'}
			// opacity= {'0.7'}
			// filter= {'auto'}
		>
			<Flex 
				justifyContent={'space-around'}
				alignItems={'center'}
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
					fontWeight={'700'}
				>
					Oladapo Awosika
				</Text>
				<Avatar size={'sm'} src={profileImage} cursor={'pointer'} onClick={onOpen}>
					<AvatarBadge  boxSize='.8em' bg='#D83636' borderColor={'#15191A'} />
				</Avatar>
			</Flex>
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
		</Box>
	);
};