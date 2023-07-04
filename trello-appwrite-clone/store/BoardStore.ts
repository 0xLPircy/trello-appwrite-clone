import { create } from "zustand";

interface BoardState {
    board: Board;
    getBoard: () => void;
}

const useBoatStore = create<BoardState>((set) => ({
    board: {
        columns: new Map<TypedColumn, Column>() //key and value pair
    },
    getBoard: async () => {
        const board = await
    }
})) 