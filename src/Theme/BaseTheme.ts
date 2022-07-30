import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
};

export const theme = extendTheme({
	breakpoints,
	colors: {
		lightOrange: '#F4F0EB',
		darkOrange: '#CA4F29',
		menuText: '#B2B6C7'
	},
	fonts: {
		heading: 'Jura',
		body: 'Jura'
	}
});