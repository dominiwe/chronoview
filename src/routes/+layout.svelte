<script lang="ts">
	import '../app.css';
	import '$lib/comp/NavBar.svelte';
	import NavBar, { type NavLink } from '$lib/comp/NavBar.svelte';
	import Container from '$lib/comp/Container.svelte';

	const navLinks: NavLink[] = [
		{ text: 'Home', link: '/' },
		{ text: 'Config', link: '/config' },
		{ text: 'About', link: '/about' }
	];
</script>

<NavBar {navLinks} />

<Container>
	<slot />
</Container>
