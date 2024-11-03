import axios from "axios";

const OPTIONS = {
  method: "GET",
  url: "https://solved.ac/api/v3/ranking/arena_in_organization",
  params: { organizationId: "436" },
  headers: { Accept: "application/json" },
};

let ranks = [];

for (let i = 1; i < 20; i++) {
  const options = {
    method: "GET",
    url: "https://solved.ac/api/v3/ranking/arena_in_organization",
    params: { organizationId: "436", page: i },
    headers: { Accept: "application/json" },
  };

  try {
    const { data } = await axios.request(options);
    for (const user of data.items) {
      ranks.push([user.maxStreak, user.handle]);
    }
  } catch (error) {
    console.error(error);
    throw new Error("에러");
  }
}
ranks.push([2024, "PASS"]);
ranks.sort((a, b) => b[0] - a[0]);

for (let each of ranks.entries()) {
  if (each[1][1] == "PASS") continue;
  else console.log(`${each[0]}등\t${each[1][0]}일\t${each[1][1]}님`);
}
