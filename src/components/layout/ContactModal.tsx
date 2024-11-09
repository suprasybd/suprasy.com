import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
