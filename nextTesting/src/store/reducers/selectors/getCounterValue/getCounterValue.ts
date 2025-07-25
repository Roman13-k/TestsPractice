import { RootState } from "@/store/store";

export const getCounterValue = (state: RootState) => state?.counter?.value ?? 0;
