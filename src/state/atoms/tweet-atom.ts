import { atom } from "recoil";
import { Tweet } from "../../model/tweet";
import { localStorageEffect } from "./base-atom";

export const tweetsListAtom = atom<Tweet[]>({
    key: "tweetsListAtom",
    default: [],
    effects: [localStorageEffect("tweetsListAtom")],
});
