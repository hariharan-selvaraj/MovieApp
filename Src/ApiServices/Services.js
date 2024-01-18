import axios from "axios";

export async function MovieDataAPI() {
    return new Promise(async (resolve, reject) => {
      await axios.get('http://www.omdbapi.com/?apikey=5a35c622&s=stranger', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      }
      ).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }