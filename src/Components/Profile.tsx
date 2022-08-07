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

export const Profile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box
			display={'flex'}
			alignItems={'center'}
			border={'2px'}
			borderColor={'#686875'}
			borderRadius={'24px'}
			height={'79px'}
			// width={['90vw','78vw']}
			boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
		>
			<Flex 
				alignItems={'center'}
				ml={4}
			>
				<Avatar src={profileImage} cursor={'pointer'} onClick={onOpen}>
					<AvatarBadge  boxSize='.8em' bg='#D83636' borderColor={'#15191A'} />
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