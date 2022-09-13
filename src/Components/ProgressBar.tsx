import { Box } from '@chakra-ui/react';
import React from 'react';

interface IPreloaderProps{
    bgcolor: string;
    completed: number;
}

const ProgressBar = ({bgcolor, completed}: IPreloaderProps) => {
	// const { bgcolor, completed } = props;
  
	const containerStyles = {
		height: '4px',
		// width: '380px',
		backgroundColor: '#e0e0de',
		borderRadius: 50,
		// margin: 1,
	};
  
	const fillerStyles = {
		height: '100%',
		width: `${completed}%`,
		maxWidth: '100%',
		backgroundColor: bgcolor,
		borderRadius: 'inherit',
		// textAlign: 'right',
		transition: 'width 0.5s ease',
	};
  
	// const labelStyles = {
	// 	padding: 5,
	// 	color: 'white',
	// 	fontWeight: 'bold'
	// };
  
	return (
		<Box w={['300px', '380px']} style={containerStyles}>
			<Box style={fillerStyles}>
				{/* <span style={labelStyles}>{`${completed}%`}</span> */}
			</Box>
		</Box>
	);
};
  
export default ProgressBar;