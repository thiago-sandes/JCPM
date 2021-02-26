import {API_URL, API_KEY} from '../utils/constants';
import axios from 'axios';

export async function getData(queryParams = {s: 'Avenger'}) {
  const {data} = await axios({
    method: 'GET',
    baseURL: `${API_URL}${API_KEY}`,
    params: queryParams,
  });

  return data;
}
