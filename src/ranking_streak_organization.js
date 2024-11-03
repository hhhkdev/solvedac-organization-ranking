import axios from "axios";

const ORGANIZATION_ID = 436; /** 알아내고 싶은 단체의 ID를 입력함. */
const PAGES = 19; /** 단체의 랭킹 페이지를 보고, 최대 페이지 수를 확인함. */

let ranks = [];

for (let page = 0; page < PAGES; page++) {
  const options = {
    method: "GET",
    url: "https://solved.ac/api/v3/ranking/arena_in_organization",
    params: { organizationId: ORGANIZATION_ID, page: page + 1 },
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

ranks.sort((a, b) => b[0] - a[0]);

for (let each of ranks.entries()) {
  if (each[1][1] == "PASS") continue;
  else console.log(`${each[0] + 1}등\t${each[1][0]}일\t${each[1][1]}님`);
}
