import { makeGetRequest } from "./http-service";

export const git = () => {
  return new Promise((resolve, reject) => {
    makeGetRequest("https://api.github.com/gists/" + "public", false)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};
export const detail = (id) => {
  return new Promise((resolve, reject) => {
    makeGetRequest("https://api.github.com/gists/" + id, false)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};
