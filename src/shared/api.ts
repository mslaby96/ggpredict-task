import axios from "axios";
import { IPlayers } from "./models";

export const GetPlayers = async ({ queryKey }: any): Promise<IPlayers> => {
  const [_, queryParams] = queryKey;
  return axios
    .get("/restapi/players", {
      params: { ...queryParams },
    })
    .then((res) => res.data);
};
