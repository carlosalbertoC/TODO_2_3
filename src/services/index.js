const url = "https://6363116266f75177ea3ca5a4.mockapi.io/myTasks";

//^ get
export const getTaskApi = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

//^ post
export const postToApi = async (data) => {
  const response = await fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  });
};
