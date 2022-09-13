import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../Pages/Home';
import {About} from '../Pages/About';
import { AppRoutes } from './AppRoutes';
import { Contact } from '../Pages/Contact';
import { Projects } from '../Pages/Projects';
import { Crisp } from '../Pages/Crisp';
import { Gather } from '../Pages/Gather';
import {Cookly} from '../Pages/Cookly';
import { AnimatePresence } from 'framer-motion';

export const MainRoute = ()=> {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes key={location.pathname} location={location}>
				<Route path={AppRoutes.home} element={<Home/>} />
				<Route path={AppRoutes.about} element={<About/>} />
				<Route path={AppRoutes.contact} element={<Contact/>} />
				<Route path={AppRoutes.projects} element={<Projects />} />
				<Route path={AppRoutes.crisp} element={<Crisp />} />
				<Route path={AppRoutes.gather} element={<Gather />} />
				<Route path={AppRoutes.cookly} element={<Cookly />} />
			</Routes>
		</AnimatePresence>
	);
};