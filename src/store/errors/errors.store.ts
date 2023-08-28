import { create } from "zustand";
import { Error } from "../../models/common/errors/error";

interface ErrorsStore {
  errors: Error[] | undefined;
  handleErrors: (errors: Error[]) => void;
}

export const useErrorsStore = create<ErrorsStore>((set) => ({
  // Initial value
  errors: undefined,

  // Actions
  handleErrors: (errors: Error[]) => set({ errors }),
}));
