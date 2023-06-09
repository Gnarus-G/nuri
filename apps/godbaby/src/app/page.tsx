import Upload from "./components/Upload";
import { PicturesTable, db } from "./lib/drizzle";
import Picture from "./components/Picture";

export default async function Home() {
  const pictures = await db.select().from(PicturesTable);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="text-center py-24">
        <h1 className="text-3xl">Nuri</h1>
        <p className="text-xl">The best goddaughter</p>
      </header>
      <section
        id="pics"
        className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full px-5 md:px-64 lg:px-96"
      >
        {pictures.map((pic) => (
          <Picture key={pic.id} {...pic} />
        ))}
      </section>
      <aside className="sticky bottom-0 mt-5 w-full flex justify-center py-2">
        <Upload />
      </aside>
    </main>
  );
}
