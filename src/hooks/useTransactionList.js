import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export default function useTransactionList() {
  const {data, isLoading} = useQuery(
    ['transaction'],
    async () =>
      await axios
        .get('http://localhost:8000/api/transactions')
        .then(res => res?.data),
  );

  return [data?.data, isLoading];
}
