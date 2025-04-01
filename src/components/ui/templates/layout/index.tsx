import type { FC, JSX } from "react";
import { Outlet } from "react-router-dom";
import Header from "@organisms/header";
import Footer from "@organisms/footer";
import { useAppContext } from "@hooks/use-app-context";
import Loader from "@atoms/loader";

const Layout: FC = (): JSX.Element | null => {
	const { loading } = useAppContext();

	if (loading) return <Loader />;
	return (
		<div className="w-full min-h-dvh bg-black">
			<Header />
			<div className="w-full h-full pt-20 min-h-[calc(100dvh-110px)] relative bg-transparent">
				<div className="w-full h-auto min-h-[calc(100dvh-120px)] max-w-[1248px] px-6 sm:px-6 py-6 sm:py-12 mx-auto">
					<Outlet />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
