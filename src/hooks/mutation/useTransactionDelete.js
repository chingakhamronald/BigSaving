import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';

const config = {
  header: {
    'Content-Type': 'application/json',
  },
};

export const useTransactionDelete = () => {
  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationFn: async id => {
      const res = await axios.delete(
        `http://192.168.1.9:8000/api/transactions/${id}`,
        config,
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['transaction']);
    },
  });
  return [mutate, isLoading];
};
