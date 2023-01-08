<script lang="ts">
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';

	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek',
		events: []
	};
</script>

<Calendar {plugins} {options} />
