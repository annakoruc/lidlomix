export const sponacularApiVariables = {
  url: (path: string) => {
    return `https://api.spoonacular.com/recipes/${path}`;
  },
  key: process.env.NEXT_PUBLIC_SPONACULAR_API_KEY,
};
