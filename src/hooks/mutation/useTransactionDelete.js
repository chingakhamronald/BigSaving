import {useMutation, useQueryClient} from '@tanstack/react-query';
import {API} from '../../constant/API';

export const useTransactionDelete = () => {
  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationFn: async id => {
      const res = await API.delete(`/transactions/${id}`);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['transaction']);
    },
  });
  return [mutate, isLoading];
};
