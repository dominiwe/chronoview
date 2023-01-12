<script lang="ts">
	import * as Plot from '@observablehq/plot';

	export let options: object;

	function myplot(node: HTMLElement) {
		node.appendChild(Plot.plot(options));
	}
</script>

{#key options}
	<div use:myplot {...$$restProps} />
{/key}
