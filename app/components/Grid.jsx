'use client';

import { useStore } from '../../store/store';
import Cell from './Cell';

// export default function Grid() {
//   const { cells, searchQuery } = useStore();
  
//   const filteredCells = cells
//     .map((cell, index) => ({ ...cell, index }))
//     .filter(cell => cell.value.includes(searchQuery));

//   return (
//     <div className="grid grid-cols-10 gap-2 p-4">
//       {filteredCells.map((cell) => (
//         <Cell key={cell.index} index={cell.index} />
//       ))}
//     </div>
//   );
// }

export default function Grid() {
    const { cells, searchQuery } = useStore();
  
    const filteredCells = cells
      .map((cell, index) => ({ ...cell, index }))
      .filter(cell => cell.value.includes(searchQuery));
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {filteredCells.map((cell) => (
          <Cell key={cell.index} index={cell.index} />
        ))}
      </div>
    );
  }