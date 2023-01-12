import { writable } from "svelte/store";
import { browser } from "$app/environment";

const defaultValue = 0;
const initialValue = (() => {
    if (browser) {
        const retreived = parseInt(localStorage.count);
        if (!Number.isNaN(retreived)) {
            return retreived;
        }
    }
    return defaultValue;
})();

export const count = writable<number>(initialValue);

// update localstorage when store updates
count.subscribe((value) => {
    if (browser) {
        localStorage.count = value   
    }
});