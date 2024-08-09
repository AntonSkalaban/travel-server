import { countries } from "./data";
export const resolvers = {
    Query: {
        countries: () => countries,
    },
};
