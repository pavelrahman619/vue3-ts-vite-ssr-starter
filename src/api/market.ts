import Axios from 'axios';

interface IResponse<T> {
  status: string;
  code: number;
  data: T;
  msg: string;
}

export interface IFruitItem {
  id: number;
  name: string;
  price: number;
}

export const getFruitList = async () => {
  const { data } = await Axios.get<IResponse<any[]>>('http://119.148.6.179:4002/api/v1/menu');
  if (data.status.toString() === 'true') {
    return data.data;
  }
  return [];
};