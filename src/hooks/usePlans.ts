import { useQuery } from '@tanstack/react-query';
import { PlanResponseType } from '../types/plan';
import { ApiClient } from '../lib/api-client';

export const getPlan = async (): Promise<PlanResponseType> => {
  const response = await ApiClient.get('/plans');
  return response.data;
};

export const usePlans = () => {
  return useQuery({
    queryKey: ['plans'],
    queryFn: getPlan,
  });
};
