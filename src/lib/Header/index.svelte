<script lang="ts">
</script>

<svelte:head>
	<title>Bea Entrenadora Personal</title>
</svelte:head>

<div class="header">
	<div class="container">
		<div class="logo-container">
			<a sveltekit:prefetch href="/">
				<img src="/favicon.png" alt="logo" />
			</a>
		</div>
		<div class="title">Bea Entrenadora Personal</div>
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

	.container {
		position: relative;
		left: 1em;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.logo-container {
		text-align: center;
		background-color: white;
		border-radius: 50%;
		width: 35px;
		height: 35px;
	}
	.title {
		margin-left: 1em;
	}
</style>
