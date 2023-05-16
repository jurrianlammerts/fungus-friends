import MapPage from "@/pages/map-page";
import getMushrooms from "@/utils/api";

export default async function Home() {
  const mushrooms = await getMushrooms();

  return (
    <main className="h-[calc(100vh-8rem)] sm:h-[calc(100vh-4rem)]">
      <MapPage mushrooms={mushrooms} />
    </main>
  );
}
