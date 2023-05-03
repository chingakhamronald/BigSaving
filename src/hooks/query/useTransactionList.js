import {useQuery} from '@tanstack/react-query';
import {API} from '../../constant/API';

export default function useTransactionList(chips) {
  const {data, isLoading, isError, error, refetch} = useQuery(
    ['transaction', chips],
    async () =>
      await API.get(`/transactions?search=${chips}`).then(res => res?.data),
  );

  return [data?.data, isLoading, isError, error, refetch];
}
