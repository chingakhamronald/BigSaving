import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export default function useTransactionList() {
  const {data, isLoading} = useQuery(['transaction'], () =>
    axios
      .get(
        'https://642c4dd7208dfe25472d1081.mockapi.io/api/v1/transactionListByIncoming',
      )
      .then(res => res.data),
  );

  return [data, isLoading];
}
