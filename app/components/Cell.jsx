'use client';

import { useStore } from '../../store/store';

// export default function Cell({ index }) {
//   const { cells, updateCell, updateAlignment } = useStore();
//   const cell = cells[index];

//   return (
//     <div className="border p-2">
//       <input
//         type="text"
//         value={cell.value}
//         onChange={(e) => updateCell(index, e.target.value)}
//         className={`w-full ${cell.alignment === 'center' ? 'text-center' : cell.alignment === 'right' ? 'text-right' : 'text-left'}`}
//       />
//       <div className="flex justify-end mt-2">
//         <button onClick={() => updateAlignment(index, 'left')} className="mx-1">L</button>
//         <button onClick={() => updateAlignment(index, 'center')} className="mx-1">C</button>
//         <button onClick={() => updateAlignment(index, 'right')} className="mx-1">R</button>
//       </div>
//     </div>
//   );
// }

export default function Cell({ index }) {
    const { cells, updateCell, updateAlignment } = useStore();
    const cell = cells[index];
  
    return (
      <div className="border p-2 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
        <input
          type="text"
          value={cell.value}
          onChange={(e) => updateCell(index, e.target.value)}
          className={`w-full px-2 py-1 bg-gray-50 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 ${cell.alignment === 'center' ? 'text-center' : cell.alignment === 'right' ? 'text-right' : 'text-left'}`}
        />
        <div className="flex justify-end mt-2 space-x-1">
          <button onClick={() => updateAlignment(index, 'left')} className={`p-1 rounded ${cell.alignment === 'left' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>L</button>
          <button onClick={() => updateAlignment(index, 'center')} className={`p-1 rounded ${cell.alignment === 'center' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>C</button>
          <button onClick={() => updateAlignment(index, 'right')} className={`p-1 rounded ${cell.alignment === 'right' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>R</button>
        </div>
      </div>
    );
  }