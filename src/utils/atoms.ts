import { atom } from "recoil";

export const theme = atom({
    key: "theme",
    default: "light"
});

export const activeMenu = atom({
    key: "activeMenu",
    default: "About Me"
})