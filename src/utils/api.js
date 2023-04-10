import axios from "axios";

const COIN_BASE_URL = 'https://api.coingecko.com/api/v3/';
// const NEWS_BASE_URL = 'https://cryptocurrency-news2.p.rapidapi.com/v1/bsc';
const STATS_BASE_URL =  'https://coinranking1.p.rapidapi.com/coins';

const coin_options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
//   const news_Options = {
// 	headers: {
// 		'X-RapidAPI-Key': '76d68ed428msh1f8fc110d373234p1f1510jsn0b332c531b0a',
// 		'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
// 	}
// };

const stats_Options = {
    headers: {
      'X-RapidAPI-Key': '76d68ed428msh1f8fc110d373234p1f1510jsn0b332c531b0a',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };


  
export const fetchCoinsData = async (url) => {
   const {data} =  await axios.get(`${COIN_BASE_URL}/${url}`, coin_options);
   return data;
}

// export const fetchNewsData = async () => {
//     const {data} = await axios.get(`${NEWS_BASE_URL}` , news_Options)
//     return data
// }
export const fetchCryptoStatsData = async () => {
    const {data} = await axios.get(`${STATS_BASE_URL}` , stats_Options);
    return data ;
}


	





