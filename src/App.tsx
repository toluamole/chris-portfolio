import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MainRoute } from './Routes/MainRoutes';
import { theme } from './Theme/BaseTheme';
import '@fontsource/jura';
import {Global} from '@emotion/react';
import {GlobalStyles} from './Theme/GlobalStyles';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Global styles={GlobalStyles}/>
			<MainRoute />
		</ChakraProvider>
	);
}

export default App;
