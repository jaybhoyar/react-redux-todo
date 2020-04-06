import { createStore } from "redux";
import Reducer from "./reducer";

export let store = createStore(Reducer);
