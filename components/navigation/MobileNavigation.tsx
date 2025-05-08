"use client";

import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navItems } from "../../data/navigationItems";
import { MobileNavigationItem } from "./MobileNavigationItem";

export const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <DialogTrigger>
        <Button className="fixed top-3 right-3 bg-blue-200 rounded-full p-2 border-blue-300 border-2 shadow-lg">
          <Bars3Icon className="size-6"></Bars3Icon>
        </Button>
        <ModalOverlay
          className={`fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-start justify-center p-4 text-center backdrop-blur`}
        >
          <Modal
            isDismissable
            className={`w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl `}
          >
            <Dialog role="alertdialog" className="outline-hidden relative">
              {({ close }) => (
                <>
                  <Button
                    onPress={close}
                    className="fixed top-6 right-6 bg-blue-200 rounded-full p-1 border-blue-300 border-2 shadow-lg"
                  >
                    <XMarkIcon className="size-4" />
                  </Button>
                  <ul>
                    {navItems.map((item) => {
                      return (
                        <MobileNavigationItem
                          key={item.href}
                          item={item}
                          onClick={close}
                        >
                        </MobileNavigationItem>
                      );
                    })}
                  </ul>
                </>
              )}
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
      <noscript>
        <ul id="nav" className="p-8 bg-gray-800 text-white">
          {navItems.map((item) => {
            return (
              <MobileNavigationItem
                key={item.href}
                item={item}
                onClick={() => { }}
              >
              </MobileNavigationItem>
            );
          })}
        </ul>
      </noscript>
    </div>
  );
};
