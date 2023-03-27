import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IColumn } from "@/models/columns";
import { Item } from "@/models/items";
import TodoItem from "../components/todoItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Kanban/Todo Item",
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
);

const mockColumns: IColumn[] = [
  {
    collectionId: "w3lyd07x44iy0vy",
    collectionName: "columns",
    created: "2023-03-16 07:06:35.203Z",
    expand: {
      "items(column)": [
        {
          collectionId: "tduifvstaq9yla5",
          collectionName: "items",
          column: "e8sc6x52vyg11i0",
          created: "2023-03-16 07:10:12.556Z",
          id: "g6969b99vbi8co5",
          name: "Teach grads Next.js",
          updated: "2023-03-16 07:10:12.556Z",
        },
      ],
    },
    id: "e8sc6x52vyg11i0",
    name: "TODO",
    updated: "2023-03-16 07:06:35.203Z",
  },
  {
    collectionId: "w3lyd07x44iy0vy",
    collectionName: "columns",
    created: "2023-03-16 07:06:59.273Z",
    id: "h6e3kb23k0ooho8",
    name: "Working on it",
    updated: "2023-03-16 07:06:59.273Z",
  },
  {
    collectionId: "w3lyd07x44iy0vy",
    collectionName: "columns",
    created: "2023-03-16 07:07:04.704Z",
    id: "hqdi4cpi0kz8fwm",
    name: "Review",
    updated: "2023-03-16 07:07:04.704Z",
  },
  {
    collectionId: "w3lyd07x44iy0vy",
    collectionName: "columns",
    created: "2023-03-16 07:07:09.126Z",
    id: "36rnh244ip5bpyo",
    name: "Done",
    updated: "2023-03-16 07:07:09.126Z",
  },
];
const mockItem: Item = {
  collectionId: "tduifvstaq9yla5",
  collectionName: "items",
  column: "e8sc6x52vyg11i0",
  created: "2023-03-16 07:10:12.556Z",
  id: "g6969b99vbi8co5",
  name: "Teach grads Next.js",
  updated: "2023-03-16 07:10:12.556Z",
};

export const TeachGrads = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TeachGrads.args = {
  columns: mockColumns,
  item: mockItem,
};

export const Empty = Template.bind({});
Empty.args = {
  columns: [],
  item: mockItem,
};
