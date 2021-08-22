<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Sidebar from '$lib/Sidebar/index.svelte';
	import '../app.css';
</script>

<header>
	<Header />
	<Sidebar />
</header>

<main>
	<slot />
</main>

<footer>
	<div class="footer">
		<p>Copyright © 2021 Bea Entrenadora Personal</p>
	</div>
</footer>

<style>
	header {
		background-color: var(--header-bg-color);
		color: var(--header-color);
	}

	main {
		background-color: var(--main-bg-color);
		color: var(--main-color);
		width: 100%;
		height: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		position: relative;
		flex-grow: 1;
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
		padding: 1em;
	}
</style>
