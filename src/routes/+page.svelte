<script lang="ts">
	import { CalendarWrapper, DexieTest } from '$lib/components';
	import type { CalendarEvent } from '$lib/components/CalendarWrapper.svelte';
	import { AWClient } from 'aw-client';
	import { onMount } from 'svelte';

	let events: CalendarEvent[] = [];

	onMount(async () => {
		const currentDate = new Date();

		const client = new AWClient('test-client');
		const info = await client.getInfo();
		console.log(info);
		const buckets = await client.getBuckets();
		console.log(buckets);
		const awEvents = await client.getEvents('aw-watcher-afk_study', {
			start: new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())),
			end: new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 5))
		});
		for (const awEvent of awEvents) {
			const timestamp = awEvent.timestamp;

			if (awEvent.duration! / 360 > 2) {
				events.push({
					id: awEvent.id?.toString() ?? '',
					title: awEvent.data.status.toString(),
					start: new Date(timestamp),
					end: new Date(timestamp.getTime() + awEvent.duration! * 1000),
					editable: true,
					backgroundColor: awEvent.data.status.toString() === 'not-afk' ? 'blue' : 'red',
					resourceIds: ['0', '1', '2']
				});
			}
		}
		events = events;
	});
</script>

<!--<DexieTest />-->

<CalendarWrapper {events} />
