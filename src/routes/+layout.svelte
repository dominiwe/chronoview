<script lang="ts">
	import '../app.css';
	import { NavBar, Container, Footer } from '$lib/components';
	import type { NavLink } from '$lib/components/NavBar.svelte';

	const navLinks: NavLink[] = [
		{ text: 'Home', link: '/' },
		{ text: 'Config', link: '/config' },
		{ text: 'About', link: '/about' }
	];
</script>

<div class="flex h-screen flex-col justify-between">
	<header><NavBar {navLinks} /></header>
	<main class="grow">
		<Container>
			<slot />
		</Container>
	</main>
	<footer><Footer /></footer>
</div>
