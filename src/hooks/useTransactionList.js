import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function useTransactionList(chips) {
  const {data, isLoading, isError, error, refetch} = useQuery(
    ['transaction', chips],
    async () =>
      await axios
        .get(`http://192.168.1.8:8000/api/transactions?search=${chips}`, config)
        .then(res => res?.data),
  );

  return [data?.data, isLoading, isError, error, refetch];
}
