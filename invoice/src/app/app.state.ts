import {Invoice} from "./services/firebaseNew/invoice.model";

export interface AppState {
  readonly invoice: Invoice[];
}
