<script lang="ts">
	import Footer from '$lib/Footer/index.svelte';
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
	<Footer />
</footer>

<style>
	header {
		background-color: var(--header-bg-color);
		color: var(--header-color);
	}

	main {
		background-color: var(--main-bg-color);
		color: var(--main-color);
		flex-grow: 1;
	}
</style>
