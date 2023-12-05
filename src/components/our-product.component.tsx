"use client";
import { Tabs } from "flowbite-react";

export default function OurProduct() {
  return (
    <div className="relative">
      <div className="absolute top-[5rem] left-[5rem]">
        <img src="images/our-product-line-vertical.png" />
      </div>
      <div className=" absolute top-[5rem] left-[5rem]">
        <img src="images/our-product-line-horizontal.png" />
      </div>
      <div className=" absolute"></div>
      <div className="container m-auto">
        <div className=" pt-32 mb-20">
          <div className=" section__header--dark  text-center">Our Product</div>
          <div className="description text-center">
            <Tabs aria-label="Tabs with underline" style="underline">
              <Tabs.Item active title="Profile">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Dashboard">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Settings">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts">
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
