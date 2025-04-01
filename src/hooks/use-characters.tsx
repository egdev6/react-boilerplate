import {
	type FC,
	type PropsWithChildren,
	useContext,
	useEffect,
	useMemo,
} from "react";
import { useQuery } from "@tanstack/react-query";
import getCharacters from "@api/characters";
import CharactersContext from "@system/context/characters";
import { useAppContext } from "@hooks/use-app-context";
import { queries } from "@constants/index";

export const CharactersProvider: FC<PropsWithChildren> = ({ children }) => {
	const { setLoading } = useAppContext();

	const {
		data: characters,
		isFetching,
		isSuccess,
		isError,
		error,
	} = useQuery({
		queryKey: [queries.CHARACTERS],
		queryFn: () => getCharacters(0),
	});

	// Manejar el estado de carga
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isFetching) {
			setLoading(true);
		} else if (isError) {
			setLoading(false);
			console.log({ error });
		} else if (isSuccess) {
			setLoading(false);
			console.log(characters);
		}
	}, [isFetching, isError, isSuccess]);

	const value = useMemo(
		() => ({
			characters,
		}),
		[characters],
	);

	return (
		<CharactersContext.Provider value={value}>
			{children}
		</CharactersContext.Provider>
	);
};

export const useCharacters = () => {
	return useContext(CharactersContext);
};
