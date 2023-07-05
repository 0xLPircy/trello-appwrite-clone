import { create } from "zustand";

interface BoardState {
    board: Board;
    getBoard: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    board: {
        columns: new Map<TypedColumn, Column>() //key and value pair
    },
    getBoard: async () => {
        const board = await getTodosGroupedByColumn();
        set({ board });
    }
}))

