<script context="module" lang="ts">
	export type GithubCommit = {
		date: string;
		shortHash: string;
		link: string;
	};

	type GithubApiResponse = {
		name: 'main';
		commit: {
			html_url: string;
			sha: string;
			commit: {
				author: {
					date: string;
				};
			};
		};
	};
</script>

<script lang="ts">
	import { Link } from '$lib/components';
	import { commit } from './store';
	import { get } from 'svelte/store';

	export let ghUsernameRepo = 'dominiwe/chronoview';
	export let ghBranch = 'main';

	let spin = false;

	async function fetchGithubInfo(force: boolean = false) {
		const latestCommit = get(commit);

		if (!latestCommit || force) {
			spin = true;
			const fetchedCommit: GithubCommit = await fetch(
				'https://api.github.com/repos/' + ghUsernameRepo + '/branches/' + ghBranch
			)
				.then((response: Response) => response.json())
				.then((response: GithubApiResponse) => {
					const date = new Date(response.commit.commit.author.date);
					return {
						date: date.toLocaleDateString() + ' at ' + date.toLocaleTimeString(),
						shortHash: response.commit.sha.substring(0, 7),
						link: response.commit.html_url
					};
				})
				.catch((error) => {
					spin = false;
					throw error;
				});

			commit.update(() => fetchedCommit);
			spin = false;
			return fetchedCommit;
		}
		return latestCommit;
	}

	let commitState = fetchGithubInfo();

	function handleForcedUpdate() {
		commitState = fetchGithubInfo(true);
	}
</script>

<div class="flex justify-between">
	<div class="flex flex-col justify-center">
		<div>
			{#await commitState}
				<p>Loading...</p>
			{:then latestCommit}
				<p>
					<span>Latest commit </span>
					<Link href={latestCommit.link}>{latestCommit.shortHash}</Link>
					<span> was created on </span><span>{latestCommit.date}</span>.
				</p>
			{:catch error}
				<p>Could not fetch information about latest commit...</p>
			{/await}
		</div>
	</div>
	<div class="ml-2">
		<button class="rounded bg-slate-300 p-2" on:click={handleForcedUpdate}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="h-5 w-5 text-slate-500 {spin ? 'motion-safe:animate-spin' : ''}"
			>
				<path
					fill-rule="evenodd"
					d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</div>
