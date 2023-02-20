<script lang="ts">
	import { Link, LatestGithubCommit } from '$lib/components';

	type Connector = { text: string; link?: string };
	const supportedConnectors: Connector[] = [{ text: 'ActivityWatch (WIP)' }];
	const plannedConnectors: Connector[] = [
		{ text: 'Clockify' },
		{ text: 'OpenProject' },
		{ text: 'SAP' }
		/*{ text: 'Outlook' }*/
	];
</script>

<div class="mx-auto max-w-4xl rounded-xl bg-slate-100 p-4">
	<h1 class="hidden text-lg font-medium sm:text-lg">About</h1>
	<div>
		<h2 class="text-lg font-medium sm:text-lg">What is this?</h2>
		<p>
			The main purpose of this tool is to visualize time tracking data. It can interact with
			different tools called <span class="italic">connectors</span> using their APIs in order to visualize
			gathered data.
		</p>
	</div>
	<div>
		<h2 class="text-lg font-medium sm:text-lg">How does it work?</h2>
		<p>
			This app runs client-side in the browser and stores data locally using
			<Link href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">IndexedDB</Link>.
			It is built with <Link href="https://kit.svelte.dev/">SvelteKit</Link>,
			<Link href="https://tailwindcss.com/">Tailwind</Link>,
			<Link href="https://github.com/vkurko/calendar">Event Calendar</Link> and
			<Link href="https://observablehq.com/@observablehq/plot">Plot</Link>.<br /> It uses SvelteKit
			with <Link href="https://github.com/sveltejs/kit/tree/master/packages/adapter-static"
				>adapter-static</Link
			> in order to be deployable to Github Pages.
		</p>
	</div>
	<div>
		<h2 class="text-lg font-medium sm:text-lg">Which connectors are supported?</h2>
		<p>Currently supported:</p>
		<ul class="ml-5 list-disc">
			{#each supportedConnectors as supportedConnector}
				<li>{supportedConnector.text}</li>
			{/each}
		</ul>
		<p>Support planned:</p>
		<ul class="ml-5 list-disc">
			{#each plannedConnectors as plannedConnector}
				<li>{plannedConnector.text}</li>
			{/each}
		</ul>
	</div>
	<div class="mt-2 border-t-2 pt-1">
		<h2 class="text-lg font-medium sm:text-lg">Version Information</h2>
		<LatestGithubCommit />
	</div>
</div>
