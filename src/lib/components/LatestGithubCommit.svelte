<script context="module" lang="ts">
	type GithubCommit = {
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
	import { onMount } from 'svelte';
	import { Link } from '$lib/components';

	export let ghUsernameRepo = 'dominiwe/planner';
	export let ghBranch = 'main';

	let gotCommitInfo: boolean | undefined = undefined;

	let commit: GithubCommit;

	async function fetchGithubInfo() {
		gotCommitInfo = undefined;
		await fetch('https://api.github.com/repos/' + ghUsernameRepo + '/branches/' + ghBranch)
			.then((response: Response) => response.json())
			.then((response: GithubApiResponse) => {
				const date = new Date(response.commit.commit.author.date);
				commit = {
					date: date.toLocaleDateString() + ' at ' + date.toLocaleTimeString(),
					shortHash: response.commit.sha.substring(0, 7),
					link: response.commit.html_url
				};
				gotCommitInfo = true;
			})
			.catch((error: Error) => {
				gotCommitInfo = false;
				console.log(error);
			});
	}

	onMount(async () => {
		fetchGithubInfo();
	});
</script>

<div class="flex justify-between">
	<div class="flex flex-col justify-center">
		<div>
			{#if gotCommitInfo === true}
				<p>
					<span>Latest commit </span>
					<Link href={commit.link}>{commit.shortHash}</Link>
					<span> was created on </span><span>{commit.date}</span>.
				</p>
			{:else if gotCommitInfo === false}
				<p>Could not fetch information about latest commit...</p>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
	</div>
	<div class="ml-2">
		<button class="rounded bg-slate-300 p-2" on:click={fetchGithubInfo}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="h-5 w-5 text-slate-500 {gotCommitInfo === undefined
					? 'motion-safe:animate-spin'
					: ''}"
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
