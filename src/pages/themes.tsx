import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '@/components/layout/Layout';
import { useThemes, useThemeImages } from '../hooks/useThemes';

const ThemesPage = () => {
  const { data: themesResponse, isLoading: isLoadingThemes } = useThemes();

  if (isLoadingThemes) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[60vh]">
          Loading...
        </div>
      </Layout>
    );
  }

  const themes = themesResponse?.Data || [];

  return (
    <Layout>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="relative max-w-2xl mx-auto sm:text-center mb-14">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our Beautiful Themes
            </h2>
            <p className="mt-3 text-gray-600">
              Choose from our collection of professionally designed themes to
              create your perfect online store.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme) => (
              <ThemeCard key={theme.Id} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ThemeCard = ({ theme }) => {
  const { data: imagesResponse } = useThemeImages(theme.Id);
  const imageUrl = imagesResponse?.Data?.[0]?.ImageUrl;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={theme.Name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No preview available
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{theme.Name}</h3>
        <p className="mt-2 text-gray-600">{theme.Description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="px-3 py-1 text-sm font-medium text-white bg-emerald-500 rounded-full capitalize">
            {theme.Type}
          </span>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            Preview Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemesPage;

export const Head: HeadFC = () => <title>Themes - Suprasy</title>;
