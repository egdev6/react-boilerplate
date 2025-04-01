import { useEffect, type FC } from "react";
import { useAppContext } from "@/hooks/use-app-context";

const Loader: FC = () => {
	const { loading } = useAppContext();

	useEffect(() => {
		console.log("Loading state:", loading);
	}, [loading]);

	if (!loading) {
		return null;
	}

	return (
		<div className="flex justify-center items-center w-full h-screen">
			<h1>Loading...</h1>
		</div>
	);
};

export default Loader;
