import { writable } from "svelte/store";
import { browser } from "$app/environment";

let stored = 0;
console.log("first", stored);

// get count from localstorage
if (browser) {
    const retreived = parseInt(localStorage.counter);   
    if (retreived && !Number.isNaN(retreived)) {
        stored = retreived;
    }
    console.log("second", stored);
}

// sane default 0
export const count = writable(stored);

// update localstorage when store updates
if (browser) {
    count.subscribe((value) => localStorage.count = value);
    console.log("third", stored);
}