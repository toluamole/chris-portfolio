import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import {About} from '../Pages/About';
import { AppRoutes } from './AppRoutes';
import { Contact } from '../Pages/Contact';
import { Projects } from '../Pages/Projects';

export const MainRoute = ()=> {
	return (
		<Routes>
			<Route path={AppRoutes.home} element={<Home/>} />
			<Route path={AppRoutes.about} element={<About/>} />
			<Route path={AppRoutes.contact} element={<Contact/>} />
			<Route path={AppRoutes.projects} element={<Projects />} />
		</Routes>
	);
};