import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, Facebook, Linkedin, Youtube } from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';

interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Get Support
                  </Dialog.Title>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-4">
                    Join our Discord community for instant support, discussions,
                    and updates. Our team and community members are ready to
                    help!
                  </p>

                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-center text-sm text-gray-600">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href="tel:+8801977235665"
                        className="hover:text-indigo-600"
                      >
                        +880 1977-235665
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col space-y-3">
                      <a
                        href="https://www.linkedin.com/company/suprasy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                      <a
                        href="https://www.facebook.com/suprasy.com.bd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        <span className="text-sm">Facebook</span>
                      </a>
                      <a
                        href="https://www.youtube.com/@suprasy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        <span className="text-sm">YouTube</span>
                      </a>
                    </div>

                    {/* Discord Button */}
                    <a
                      href="https://discord.gg/J8xEsQKTqC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <StaticImage
                        src="../../images/discord.svg"
                        alt="Discord"
                        className="w-5 h-5 mr-2"
                      />
                      Join Discord Community
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
