export const fetchUserData = async (URL, name) => {
  let error = null;

  const response = await fetch(`${URL}/${name}`);
  if (response.status === 404) {
    error = "Not Found";
  }
  const data = await response.json();
  return { error, data };
};
