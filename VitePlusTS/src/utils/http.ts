export const fetchHelper = <T>(url: string, config?: RequestInit) => {
  return fetch(url, config)
    .then((res) => res.json())
    .then((data: T) => data)
    .catch((err) => console.error(`Error: ${err}`));
};
