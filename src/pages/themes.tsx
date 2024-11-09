import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '@/components/layout/Layout';
import { useThemes, useThemeImages } from '../hooks/useThemes';
import {
  Github,
  X,
  Crown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Gift,
} from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';

const ThemesPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data: themesResponse, isLoading: isLoadingThemes } =
    useThemes(currentPage);

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
  const pagination = themesResponse?.Pagination;

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
              <ThemeCard
                key={theme.Id.toString()}
                theme={{
                  Id: theme.Id.toString(),
                  Name: theme.Name,
                  Description: theme.Description,
                  Type: theme.Type,
                  GithubLink: theme.GithubLink || undefined,
                  IsPremium: theme.Type === 'paid',
                }}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination && pagination.TotalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {pagination.TotalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(pagination.TotalPages, prev + 1),
                  )
                }
                disabled={currentPage === pagination.TotalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Developer CTA Section */}
          <section className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Are You a Theme Developer?
              </h2>
              <p className="text-gray-600 mb-8">
                Partner with us to showcase and sell your themes on our
                platform. Earn monthly revenue based on theme usage and help
                businesses create beautiful online stores.
              </p>
              <a
                href="https://discord.gg/J8xEsQKTqC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                <StaticImage
                  src="../images/discord.svg"
                  alt="Discord"
                  className="w-5 h-5 mr-2"
                />
                Join Discord to Partner with Us
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Our theme partners earn competitive revenue shares and get
                dedicated support for development and distribution.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

const ThemeCard = ({
  theme,
}: {
  theme: {
    Id: string;
    Name: string;
    Description: string;
    Type: string;
    GithubLink?: string;
    IsPremium?: boolean;
  };
}) => {
  const { data: imagesResponse } = useThemeImages(Number(theme.Id));
  const images = imagesResponse?.Data || [];
  const [showModal, setShowModal] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const isPremium = theme.Type.toLowerCase() === 'paid';

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
          {images[0]?.ImageUrl ? (
            <>
              <img
                src={images[0].ImageUrl}
                alt={theme.Name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {isPremium && (
                <div className="absolute top-4 right-4 px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  <span>Premium</span>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              No preview available
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-gray-800">
              {theme.Name}
            </h3>
            <span
              className={`px-3 py-1 text-sm font-medium text-white rounded-full capitalize flex items-center gap-1 ${
                isPremium
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600'
                  : 'bg-emerald-500'
              }`}
            >
              {isPremium ? (
                <>
                  <Crown className="w-3 h-3" />
                  Premium
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3" />
                  {theme.Type}
                </>
              )}
            </span>
          </div>
          <p className="mt-2 text-gray-600 line-clamp-2">{theme.Description}</p>
          <div className="mt-4 space-y-3">
            <button
              onClick={() => setShowModal(true)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              Preview Theme
            </button>
            {theme.GithubLink && (
              <a
                href={theme.GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-700 bg-white rounded-full shadow-lg z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {theme.Name}
                </h2>
                <span
                  className={`px-3 py-1 text-sm font-medium text-white rounded-full shadow-lg flex items-center gap-1 ${
                    isPremium
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600'
                      : 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                  }`}
                >
                  {isPremium ? (
                    <>
                      <Crown className="w-4 h-4" />
                      Premium Theme
                    </>
                  ) : (
                    <>
                      <Gift className="w-4 h-4" />
                      Free Theme
                    </>
                  )}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{theme.Description}</p>

              {/* Image Slider */}
              <div className="relative">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={images[currentImageIndex]?.ImageUrl}
                    alt={`${theme.Name} preview ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="flex justify-center mt-4 gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? 'bg-indigo-600'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {isPremium && (
                <div className="mt-6 text-center">
                  <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-colors flex items-center gap-2 mx-auto">
                    <Crown className="w-5 h-5" />
                    Upgrade to Access
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemesPage;

export const Head: HeadFC = () => <title>Themes - Suprasy</title>;
