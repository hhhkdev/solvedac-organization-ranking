import axios from "axios";

const options = {
  method: "GET",
  url: "https://solved.ac/api/v3/ranking/streak",
  params: { page: "10" },
  headers: { "x-solvedac-language": "ko", Accept: "application/json" },
};

function filtering(data) {
  return data.item.filter((item) => item);
}

try {
  const { data } = await axios.request(options);
  console.log(filtering(data));
} catch (error) {
  console.error(error);
}
