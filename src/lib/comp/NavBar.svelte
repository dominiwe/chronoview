<script context="module" lang="ts">
	export type NavLink = {
		text: string;
		link: string;
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	// pass these to customize the navbar (these are defaults)
	export let logo = base + '/logo.svg';
	export let appName = 'Planner';
	export let navLinks: NavLink[] = [{ text: 'Home', link: '/' }];
</script>

<nav class="px-2 py-2.5 sm:px-4">
	<div
		class="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between"
	>
		<div class="px-2 sm:px-4">
			<a href={base} class="flex items-center">
				<img src={logo} class="mr-3 h-6 sm:h-9 2xl:h-11" alt={appName + ' Logo'} />
				<span class="self-center whitespace-nowrap text-xl font-semibold 2xl:text-2xl"
					>{appName}</span
				>
			</a>
		</div>
		<ul
			class="mt-0 flex flex-row space-x-8 p-2 text-base font-medium sm:p-4 2xl:gap-10 2xl:text-xl"
		>
			{#each navLinks as navLink}
				<li class="hover:text-orange-500">
					<a href="{base}{navLink.link}" class:current_page={$page.route.id == navLink.link}>
						{navLink.text}
					</a>
					<style>
						/* could be done with tailwind but this is more readable */
						a.current_page::after {
							content: ' ∙';
						}
					</style>
				</li>
			{/each}
		</ul>
	</div>
</nav>
