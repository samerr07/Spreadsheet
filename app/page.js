import Image from "next/image";
import Search from "./components/Search";
import Grid from "./components/Grid";

export default function Home() {
  return (
  
    <div className="container mx-auto py-10">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Spreadsheet Application</h1>
      <Search />
      <Grid />
    </div>
  );
}
