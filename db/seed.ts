import { db, User, Category, Todo } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(User).values([
    {
      id: "sof@fosx637",
      email: "pepito@gmail.com",
      username: "pepito",
    },
    {
      id: "xx33@@ds",
      email: "juan@gmail.com",
      username: "juan",
    },
  ]);
  await db.insert(Category).values([
    {
      id: "ppsfsf@",
      label: "software",
    },
    {
      id: "ooopd@d",
      label: "marketing",
    },
  ]);

  await db.insert(Todo).values([
    {
      id: "ggtt2@",
      title: "Crear función de fecha",
      description: "Crear función que adapte las fechas",
      category_id: "ppsfsf@",
      user_id: "sof@fosx637",
    },
    {
      id: "wweep@",
      title: "Crear anuncio",
      description: "crear anuncio del producto",
      category_id: "ooopd@d",
      user_id: "xx33@@ds",
    },
  ]);
}
