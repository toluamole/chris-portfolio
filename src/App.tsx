import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MainRoute } from './Routes/MainRoutes';
import { theme } from './Theme/BaseTheme';
import '@fontsource/jura';
import {Global} from '@emotion/react';
import {GlobalStyles} from './Theme/GlobalStyles';
import AnimatedCursor from 'react-animated-cursor';
import { ScrollUpBtn } from './Components/ScrollUpBtn';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Global styles={GlobalStyles}/>
			<MainRoute />
			<AnimatedCursor innerSize={20} clickables={['button', 'a']} />
		</ChakraProvider>
	);
}

export default App;
