const get = async (originalURL: string) => {
  const response = await fetch('http://localhost:5000/short-link/create', {
    method: 'POST',
    body: JSON.stringify({
      url: originalURL,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { shortLink, url } = await response.json();
  return { shortLink, url };
};

export const shortLinkService = {
  get,
};
