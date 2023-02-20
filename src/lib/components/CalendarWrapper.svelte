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
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';
	import List from '@event-calendar/list';
	import ResourceTimeGrid from '@event-calendar/resource-time-grid';
	import Interaction from '@event-calendar/interaction';

	export let events: CalendarEvent[] = [];

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
		highlightedDates: ['2023-01-11'],
		locale: 'de-ch',
		selectable: true
	};

	function updateOptions() {
		options.events = events;
	}
</script>

<button on:click={updateOptions}>Update options</button>
<Calendar {plugins} {options} />
