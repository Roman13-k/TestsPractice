import axios from "axios";
import { getData, Post } from "./getData";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getData", () => {
  let response: { data: Post[] };
  beforeAll(() => {
    response = {
      data: [
        {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
      ],
    };
  });
  test("Корректное значение", async () => {
    mockedAxios.get.mockResolvedValue(response);
    const data = await getData();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(data).toEqual([
      "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "Qui est esse",
      "Ea molestias quasi exercitationem repellat qui ipsa sit aut",
    ]);
    expect(data).toMatchSnapshot();
  });
});
