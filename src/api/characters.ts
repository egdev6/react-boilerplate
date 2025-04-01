import http from ".";
import type Character from "@models/character";

const getCharacters = async (
	page: number | undefined,
): Promise<Character[] | undefined | unknown> => {
	try {
		const { data } = await http.get(`character/?page=${page || 0}`);
		return data.results;
	} catch (error: unknown) {
		if (error) return error;
	}
};

export default getCharacters;
