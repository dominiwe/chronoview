<script context="module" lang="ts">
	export type CalendarEvent = {
		id: string;
		resourceIds?: any[];
		allDay?: boolean;
		start: Date;
		end: Date;
		title: string;
		editable?: boolean;
		display?: 'auto' | 'background';
		backgroundColor?: string;
		extendedProps?: object;
	};
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';
	import List from '@event-calendar/list';
	import ResourceTimeGrid from '@event-calendar/resource-time-grid';
	import Interaction from '@event-calendar/interaction';
	import { onMount } from 'svelte';
	import { AWClient } from 'aw-client';

	let awClient: AWClient;

	let plugins = [TimeGrid, DayGrid, List, ResourceTimeGrid, Interaction];

	let options = {
		view: 'timeGridWeek',
		events: [{}],
		nowIndicator: true,
		height: 'calc(100vh - 14rem)',
		firstDay: 1,
		headerToolbar: {
			start: 'prev,next today',
			center: 'title',
			end: 'dayGridMonth,timeGridWeek,timeGridDay resourceTimeGridWeek'
		},
		buttonText: {
			today: 'Today',
			dayGridMonth: 'Month',
			listDay: 'List',
			listWeek: 'List',
			listMonth: 'List',
			listYear: 'List',
			resourceTimeGridDay: 'Day',
			resourceTimeGridWeek: 'Resources',
			timeGridDay: 'Day',
			timeGridWeek: 'Week'
		},
		highlightedDates: [],
		locale: 'de-ch' /* (() => {
			if (browser) {
				return navigator.language;
			} else {
				return 'de-ch';
			}
		})(), */,
		selectable: false,
		editable: false,
		eventSources: [
			{
				events: fetchEvents
			}
		]
	};

	async function fetchEvents(
		fetchInfo: { start: Date; end: Date; startStr: String; endStr: String },
		successCallback: (events: CalendarEvent[]) => void,
		failureCallback: (desc: String) => void
	) {
		const afkBucketId = await awClient.getBuckets().then((buckets) => {
			let tmpKey = '';
			Object.keys(buckets).some((key) => {
				if (new RegExp('^aw-watcher-afk').test(key)) {
					tmpKey = key;
				}
			});
			return tmpKey;
		});
		const awEvents = await awClient
			.getEvents(afkBucketId, {
				start: fetchInfo.start,
				end: fetchInfo.end
			})
			.catch((error: Error) => {
				failureCallback(error.message);
				return [];
			});
		const events: CalendarEvent[] = [];
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
		console.log('evs', events);
		successCallback(events);
	}

	onMount(async () => {
		awClient = new AWClient('test-client');
		const info = await awClient.getInfo();
		console.log(info);
		const buckets = await awClient.getBuckets();
		console.log(buckets);
	});
</script>

<Calendar {plugins} {options} />
