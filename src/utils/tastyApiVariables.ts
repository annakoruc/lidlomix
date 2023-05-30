export const tastyApiVariables = {
  url: (path: string) => {
    return `https://tasty.p.rapidapi.com/recipes/${path}`;
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_TASTY_API_KEY,
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};
