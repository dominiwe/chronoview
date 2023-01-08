<script lang="ts">
	import { base } from '$app/paths';
	import { Link } from '$lib/components';

	export let creatorName = 'dominiwe';
	export let creatorLink = 'https://github.com/dominiwe';
	export let year = 2023;
	export let sourceLink = 'https://github.com/dominiwe/planner';
	export let aboutLink = base + '/about';
</script>

<div class="flex justify-center bg-slate-100 px-4 py-3">
	<div class="text-center">
		<ul>
			<li>
				<span>Created by </span><Link href={creatorLink}>{creatorName}</Link>
				<span>in {year}.</span>
			</li>
			<li>
				<span>Source code available</span>
				<Link href={sourceLink}>here</Link><span>. More info</span>
				<Link href={aboutLink}>here</Link><span>.</span>
			</li>
		</ul>
	</div>
</div>
