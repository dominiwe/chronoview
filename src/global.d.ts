/// <reference types="svelte" />

// see https://github.com/dexie/Dexie.js/issues/1560#issuecomment-1114635438

import { Subscriber, Unsubscriber } from 'svelte/store';
import { Subscription } from 'dexie';

declare module 'dexie' {
  interface Observable<T> {
    subscribe(run: Subscriber<T>): Unsubscriber | Subscription;
  }
}