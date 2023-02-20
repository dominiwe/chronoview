import { writable } from "svelte/store";
import type { GithubCommit } from "./LatestGithubCommit.svelte";

export const commit = writable<GithubCommit>();
