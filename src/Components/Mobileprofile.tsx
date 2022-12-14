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

interface IProfileProp{
	handleClick: () => void;
	show: boolean;
}

export const Mobileprofile = ({handleClick, show}:IProfileProp) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<HStack
			justify='space-between'
			align={'center'}
			px={2}
			border={'1px'}
			borderColor={'rgba(198, 198, 211, 0.4)'}
			borderRadius={'16px'}
			height={'60px'}
			boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
			cursor={'pointer'}
			display={['flex', null, null, 'none']}
		>
			<Box>
				{show ? <Image src={window.location.origin + '/images/hamburger.svg'}
					color={'#686875'}
					onClick= {handleClick}
				/>  : <Image src={window.location.origin + '/images/cancelIcon.svg'}
					color={' #686875'} 
					onClick= {handleClick}
				/> }
			</Box>
			<Text 
				color={'#F4F0EB'} 
				fontSize={'14px'}
				fontWeight={'bold'}
			>
				Oladapo Awosika
			</Text>
			<Avatar size={['md','sm']} src={window.location.origin + '/images/profileImage.svg'} cursor={'pointer'} onClick={onOpen}>
				<AvatarBadge  
					boxSize='.8em' 
					bg='#4DD836'  
					borderColor={'#15191A'} 
					// animation={`${animationKeyframes} 2s ease`}
				/>
			</Avatar>
			<Modal isCentered isOpen={isOpen} onClose={onClose} >
				<ModalOverlay bg={'rgb(0 0 0 / 80%)'} />
				<ModalCloseButton 
					position={'fixed'}
					color={'#F4F0EB'} 
					top={'2%'}
					right={'3%'} 
					w='45px'
					h={'45px'}
					border={'2px'} 
					borderColor={'#F4F0EB'} 
					borderRadius={'50%'}
					zIndex={'99999'}
				/>
				<ModalContent bg={'none'}>
					<ModalBody w={'auto'}>
						<Image  src={window.location.origin + '/images/ExpandedImage.png'} boxSize={'100%'} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</HStack>
	);
};