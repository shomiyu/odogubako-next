type ClickEvent = {
  action: "click";
  category: string;
  label: string;
  value: number;
};

export type Event = ClickEvent;
