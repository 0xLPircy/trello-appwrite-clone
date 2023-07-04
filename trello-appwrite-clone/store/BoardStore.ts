import { create } from "zustand";

interface BoardState {
    board: Board;
    getBoard: () => void;
}

const useBoatStore = create((set) => ({
    board: null,
    getBoars: () => {

    }
})) 