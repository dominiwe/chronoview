<script lang="ts">
	import { count } from './store';

	let countValue: number;

	function increment() {
		count.update((n) => n + 1);
	}
	function decrement() {
		count.update((n) => n - 1);
	}
	function reset() {
		count.set(0);
	}
	count.subscribe((value) => {
		countValue = value;
	});
</script>

<div class="m-auto flex justify-around">
	<div class="flex flex-col gap-5">
		<button on:click={increment} class="border-2 px-2"> + </button>
		<div><p>{countValue}</p></div>
		<button on:click={decrement} class="border-2 px-2"> - </button>
	</div>
</div>
