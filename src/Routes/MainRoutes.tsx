import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import {About} from '../Pages/About';
import { AppRoutes } from './AppRoutes';
import { Contact } from '../Pages/Contact';
import { Projects } from '../Pages/Projects';
import { Crisp } from '../Pages/Crisp';
import { Gather } from '../Pages/Gather';
import {Cookly} from '../Pages/Cookly';

export const MainRoute = ()=> {
	return (
		<Routes>
			<Route path={AppRoutes.home} element={<Home/>} />
			<Route path={AppRoutes.about} element={<About/>} />
			<Route path={AppRoutes.contact} element={<Contact/>} />
			<Route path={AppRoutes.projects} element={<Projects />} />
			<Route path={AppRoutes.crisp} element={<Crisp />} />
			<Route path={AppRoutes.gather} element={<Gather />} />
			<Route path={AppRoutes.cookly} element={<Cookly />} />
		</Routes>
	);
};