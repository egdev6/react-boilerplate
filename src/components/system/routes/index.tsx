import { routes } from "@config/routes";
import type { RouteProps } from "@models/routes";
import Layout from "@templates/layout";
import Loader from "@atoms/loader";
import { Suspense } from "react";
import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import ProvidersByRoute from "@system/providers/provider-by-route";

const renderRoutes = (route: RouteProps, isChild = false) => {
	const Component = route.component;

	if (!route.children || (route.children.length === 0 && !isChild)) {
		return (
			<Route
				key={self.crypto.randomUUID()}
				path={route.path}
				element={
					<Suspense fallback={<Loader />}>
						<ProvidersByRoute providers={route.providers ?? []}>
							<h1>{route.name}</h1>
							<Component />
						</ProvidersByRoute>
					</Suspense>
				}
			/>
		);
	}

	return (
		<Route
			key={self.crypto.randomUUID()}
			path={route.path}
			element={
				<Suspense fallback={<Loader />}>
					<ProvidersByRoute providers={route.providers ?? []}>
						<Component />
					</ProvidersByRoute>
				</Suspense>
			}
		>
			<Route index element={<Component />} />
			{route.children.map((child) => renderRoutes(child, true))}
		</Route>
	);
};

const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			{routes.map((route: RouteProps) => renderRoutes(route))}
			<Route path="*" element={<Navigate replace to="/" />} />
		</Route>,
	),
);

export default Router;
