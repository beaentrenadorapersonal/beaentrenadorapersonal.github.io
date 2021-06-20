<script context="module" lang="ts">
	export const prerender = true;

	let title = 'Bea Entrenadora Personal';
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<h1>{title}</h1>

	<div class="flex-container intro">
		<img class="intro_pic" src="intro.jpg" alt="bea intro" />
		<p>Blah blah blah blah blah blah blah blah blah blah</p>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.intro_pic {
		width: 40%;
		border-radius: 20px;
		box-shadow: 0 0 5px 1px rgba(100, 100, 100, 0.5);
		border: 1px solid #ddd;
		padding: 5px;
		background-color: white;
	}

	.intro {
		justify-content: space-around;
		align-content: center;
		align-items: center;
		text-align: center;
	}
</style>
