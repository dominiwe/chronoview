<script lang="ts">
	import { db } from './db';
	import { liveQuery } from 'dexie';
	import { browser } from '$app/environment';

	export let defaultAge = 21;

	let status = '';

	let friendName = '';
	let friendAge = defaultAge;

	async function addFriend() {
		try {
			// Add the new friend!
			const id = await db.friends.add({
				name: friendName,
				age: friendAge
			});

			status = `Friend ${friendName} successfully added. Got id ${id}`;

			// Reset form:
			friendName = '';
			friendAge = defaultAge;
		} catch (error) {
			status = `Failed to add ${friendName}: ${error}`;
		}
	}

	let friends = liveQuery(() => (browser ? db.friends.toArray() : []));
</script>

<div>
	<p>{status}</p>
	<fieldset>
		<legend>Add new friend</legend>
		<label>
			Name:
			<input type="text" bind:value={friendName} />
		</label>
		<br />
		<label>
			Age:
			<input type="number" bind:value={friendAge} />
		</label>
		<br />
		<button on:click={addFriend}>Add Friend</button>
	</fieldset>
</div>
<ul>
	{#if $friends}
		{#each $friends as friend (friend.id)}
			<li>{friend.name}, {friend.age}</li>
		{/each}
	{/if}
</ul>
