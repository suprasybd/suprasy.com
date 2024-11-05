import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../lib/api-client';
import { ThemeResponse, ThemeImagesResponse } from '../types/theme';

export const getThemes = async (): Promise<ThemeResponse> => {
  const response = await ApiClient.get('/themes');
  return response.data;
};

export const getThemeImages = async (
  themeId: number,
): Promise<ThemeImagesResponse> => {
  const response = await ApiClient.get(`/themes/${themeId}/images`);
  return response.data;
};

export const useThemes = () => {
  return useQuery({
    queryKey: ['themes'],
    queryFn: getThemes,
  });
};

export const useThemeImages = (themeId: number) => {
  return useQuery({
    queryKey: ['themeImages', themeId],
    queryFn: () => getThemeImages(themeId),
    enabled: !!themeId,
  });
};
