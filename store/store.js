import { create } from 'zustand';

export const useStore = create((set) => ({
  cells: Array(1000).fill({ value: '', alignment: 'left' }),
  searchQuery: '',
  history: [],
  future: [],

  // Update cell content with undo/redo support
  updateCell: (index, value) =>
    set((state) => {
      const newCells = [...state.cells];
      const prevValue = newCells[index].value;
      newCells[index] = { ...newCells[index], value };

      return {
        cells: newCells,
        history: [...state.history, { index, prevValue, newValue: value }],
        future: [],
      };
    }),

  // Update alignment with undo/redo support
  updateAlignment: (index, alignment) =>
    set((state) => {
      const newCells = [...state.cells];
      const prevAlignment = newCells[index].alignment;
      newCells[index] = { ...newCells[index], alignment };

      return {
        cells: newCells,
        history: [...state.history, { index, prevAlignment, newAlignment: alignment }],
        future: [],
      };
    }),

  // Search and filter
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Undo functionality
  undo: () =>
    set((state) => {
      if (state.history.length === 0) return state;

      const lastAction = state.history[state.history.length - 1];
      const newCells = [...state.cells];
      
      if (lastAction.prevValue !== undefined) {
        newCells[lastAction.index].value = lastAction.prevValue;
      } else if (lastAction.prevAlignment !== undefined) {
        newCells[lastAction.index].alignment = lastAction.prevAlignment;
      }

      return {
        cells: newCells,
        history: state.history.slice(0, -1),
        future: [lastAction, ...state.future],
      };
    }),

  // Redo functionality
  redo: () =>
    set((state) => {
      if (state.future.length === 0) return state;

      const nextAction = state.future[0];
      const newCells = [...state.cells];

      if (nextAction.newValue !== undefined) {
        newCells[nextAction.index].value = nextAction.newValue;
      } else if (nextAction.newAlignment !== undefined) {
        newCells[nextAction.index].alignment = nextAction.newAlignment;
      }

      return {
        cells: newCells,
        history: [...state.history, nextAction],
        future: state.future.slice(1),
      };
    }),
}));

