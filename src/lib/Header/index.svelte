<script lang="ts">
	import { title } from '../../stores';

	let nav_title = '';
	title.subscribe((value) => {
		nav_title = value;
	});
</script>

<svelte:head>
	<title>Bea - {nav_title}</title>
</svelte:head>

<div class="header">
	<div class="baritem">
		<a sveltekit:prefetch class="bar-link" href="/">Bea</a>
		&gt; {nav_title}
	</div>
</div>

<style>
	.header {
		width: 100%;
		overflow: auto;
		height: var(--header-height);
		background-color: var(--header-bg-color);
		color: var(--header-color);
		display: flex;
		align-items: center;
		z-index: 1; /* Stay on top */
	}

	.bar-link {
		text-decoration: none;
		color: var(--header-color);
		padding-left: 1em;
	}
</style>
