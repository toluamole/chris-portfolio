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
import { MotionBox } from './AnimatedPages';
import { AnimatePresence } from 'framer-motion';

interface IProfileProps{
	collapse: boolean;
}

export const Profile = ({collapse}: IProfileProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<AnimatePresence initial={false}>
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
					height={ collapse ? 'auto' : '10vh'}
					// width={['90vw','78vw']}
					boxShadow= {'0 0 3px rgba(198,198,211,0.4)'}
					transition={'all ease .3s'}
				>
					<Flex 
						alignItems={'center'}
						ml={4}
					>
						<Avatar name='Oladapo Awosika' src={window.location.origin + '/images/profileImage.svg'} cursor={'pointer'} onClick={onOpen}>
							<AvatarBadge  
								// animation={`${animationKeyframes} 2s  ease`}
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
					<Modal isCentered isOpen={isOpen} size={'lg'} onClose={onClose}  closeOnOverlayClick={false}>
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
								<Image src={window.location.origin + '/images/ExpandedImage.png'} />
							</ModalBody>
						</ModalContent>
					</Modal>
				</Box>
				{/* } */}
			</MotionBox>
		</AnimatePresence>
	);
};