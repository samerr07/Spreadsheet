'use client';

import { useStore } from '../../store/store';

// export default function Search() {
//   const { setSearchQuery, undo, redo } = useStore();

//   return (
//     <div className="p-4 flex justify-between items-center">
//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="border p-2 w-full max-w-lg"
//       />
//       <div className="flex space-x-2 ml-4">
//         <button onClick={undo} className="bg-gray-200 p-2 rounded">Undo</button>
//         <button onClick={redo} className="bg-gray-200 p-2 rounded">Redo</button>
//       </div>
//     </div>
//   );
// }

export default function Search() {
  const { setSearchQuery, undo, redo } = useStore();

  return (
    <div className="p-4 flex flex-col sm:flex-row justify-between items-center bg-blue-50 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded-md w-full sm:max-w-lg mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex space-x-2">
        <button onClick={undo} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 transition-colors">Undo</button>
        <button onClick={redo} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 transition-colors">Redo</button>
      </div>
    </div>
  );
}