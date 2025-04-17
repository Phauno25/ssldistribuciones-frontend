import React, {
  Children,
  isValidElement,
  MouseEvent,
  ReactElement,
  useMemo,
} from "react";
import { TabItemProps, TabProps } from "./types";
import clsx from "clsx";
import TabItem from "./TabItem";

const Tab: React.FC<TabProps> = ({ children, onTabChange, ...props }) => {
  const tabItems = useMemo(() => {
    return Children.toArray(children).filter(
      (child): child is ReactElement<TabItemProps> => {
        if (isValidElement(child) && child.type === TabItem) {
          return true;
        } else {
          console.warn(
            "Invalid child in Tab component. Only <TabItem /> is allowed."
          );
          return false;
        }
      }
    );
  }, [children]);

  const handleTabItemClick = (
    e: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    onTabChange && onTabChange({ index, value: e.currentTarget.value });
  };

  return (
    <ul
      className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
      {...props}
    >
      {tabItems.map((tabItem, index) => {
        return (
          <li key={tabItem.props.name?.toString()}>
            <button
              {...tabItem.props}
              value={tabItem.props.value?.toString()}
              className={clsx(
                "inline-block p-4 rounded-t-lg hover:bg-surface-light active:bg-surface-main",
                tabItem.props.selected
                  ? " text-primary-main bg-surface-main"
                  : "text-white",
                tabItem.props.className
              )}
              onClick={(e) => handleTabItemClick(e, index)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
