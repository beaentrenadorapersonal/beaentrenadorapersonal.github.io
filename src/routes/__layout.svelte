<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="footer">
		<p>Copyright © 2021 Bea Entrenadora Personal</p>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		position: relative;
		top: var(--header-height);
		padding-bottom: 0.5em;
		height: 100%;
	}

	footer {
		font-size: 0.7em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--header-bg-color);
		color: var(--header-color);
		position: relative;
		top: var(--header-height);
		padding: 1em;
	}
</style>
