import React from "react";
import { classNames } from "lib/classNames/classNames";
import { memo } from "react";
import  cls  from './Disclousure.module.scss';
import { DisclousureProps } from "./types/DisclosureProps";
import { Disclosure as HDisclosure, Transition} from '@headlessui/react'

export const Disclosure = memo((props: DisclousureProps) => {
    const {className} = props;
    return (
    <HDisclosure>
         <HDisclosure.Button className="py-2">
            Is team pricing available?
        </HDisclosure.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        ></Transition>
        <HDisclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
        </HDisclosure.Panel>
        <HDisclosure.Button className="py-2">
            Is team pricing available?
        </HDisclosure.Button>
        <HDisclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
        </HDisclosure.Panel>
        
       
    </HDisclosure>
  );
});