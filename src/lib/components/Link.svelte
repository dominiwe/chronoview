<script lang="ts">
	export let href = '';
	export let classes = 'text-indigo-600 hover:text-indigo-500 visited:text-indigo-800';
</script>

<a {href} class={classes}>
	<slot />
</a>
