import React, { useCallback } from "react";
import { PageCategory } from "../models/PageCategory";
import style from "./CategoryContentPanelTagList.module.scss";

interface Props {
  childTabs: PageCategory[];
  tabId: string;
  onChangeTabId: (tabId: string) => void;
}

const CategoryContentPanelTagList: React.FC<Props> = (props: Props) => {
  const { childTabs, tabId, onChangeTabId } = props;

  const handleChangeTabId = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const nextTabId = e.currentTarget.getAttribute("aria-controls") ?? "";
      onChangeTabId(nextTabId);
    },
    [onChangeTabId]
  );

  return (
    <div className={style.header}>
      {childTabs.map((item, titleKey) => (
        <button
          type="button"
          key={titleKey}
          data-index={titleKey}
          className={`${style.button} ${
            tabId === `tabPanel-${titleKey}` ? style.isActive : ""
          }`}
          role="tab"
          aria-controls={`tabPanel-${titleKey}`}
          aria-selected={tabId === `tabPanel-${titleKey}`}
          onClick={handleChangeTabId}
        >
          {item.categoryName}
        </button>
      ))}
    </div>
  );
};

export default CategoryContentPanelTagList;
