<script lang="ts">
	import { CalendarWrapper, DexieTest, SharedComponentTest } from '$lib/components';
	import { AWClient } from 'aw-client';
	import { onMount } from 'svelte';

	onMount(async () => {
		const client = new AWClient('test-client');
		const info = await client.getInfo();
		console.log(info);
	});
</script>

<SharedComponentTest />

<!--<DexieTest />-->

<CalendarWrapper />
