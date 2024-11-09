import { useQuery } from '@tanstack/react-query';
import { Theme, ThemeImage, ApiResponse } from '../types/theme';

const API_URL = process.env.GATSBY_API_URL;

export const useThemes = (page: number = 1) => {
  return useQuery({
    queryKey: ['themes', page],
    queryFn: () =>
      fetch(`${API_URL}/themes?Page=${page}&Limit=5`).then((res) =>
        res.json(),
      ) as Promise<ApiResponse<Theme[]>>,
  });
};

export const useThemeImages = (themeId: number) => {
  return useQuery({
    queryKey: ['themeImages', themeId],
    queryFn: () =>
      fetch(`${API_URL}/themes/${themeId}/images`).then((res) =>
        res.json(),
      ) as Promise<ApiResponse<ThemeImage[]>>,
  });
};
