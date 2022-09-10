import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MainRoute } from './Routes/MainRoutes';
import { theme } from './Theme/BaseTheme';
import '@fontsource/jura';
import {Global} from '@emotion/react';
import {GlobalStyles} from './Theme/GlobalStyles';
import { Preloader } from './Components/Preloader';
// import AnimatedCursor from 'react-animated-cursor';

function App() {
	const [loading, setLoading] = useState(true);

	// useEffect(()=> {
	// 	setLoading(true);
	// 	setTimeout(()=> {
	// 		setLoading(false);
	// 	}, 12000);
	// }, []);
	return (
		<ChakraProvider theme={theme}>
			<Global styles={GlobalStyles}/>
			{/* {
				loading === false ? (<MainRoute />) : (<Preloader />)
			} */}
			<MainRoute />
			{/* <AnimatedCursor innerSize={20} clickables={['button', 'a']} /> */}
		</ChakraProvider>
	);
}

export default App;
