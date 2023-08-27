import { create } from "zustand";
import { Error } from "../../models/common/errors/error";

interface ErrorsStore {
  error: Error | undefined;
  handleError: (error: Error) => void;
}

export const useErrorsStore = create<ErrorsStore>((set) => ({
  // Initial value
  error: undefined,

  // Actions
  handleError: (error: Error) => set({ error }),
}));
