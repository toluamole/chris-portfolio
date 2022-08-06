import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import {About} from '../Pages/About';
import { AppRoutes } from './AppRoutes';

export const MainRoute = ()=> {
	return (
		<Routes>
			<Route path={AppRoutes.home} element={<Home/>} />
			<Route path={AppRoutes.about} element={<About/>} />
		</Routes>
	);
};