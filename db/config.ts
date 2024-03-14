import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    username: column.text({ unique: true }),
  },
});

const Todo = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    user_id: column.text({ references: () => User.columns.id }),
    category_id: column.text({ references: () => Category.columns.id }),
  },
});

const Category = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text({ unique: true }),
  },
});

export default defineDb({
  tables: {
    User,
    Category,
    Todo,
  },
});
