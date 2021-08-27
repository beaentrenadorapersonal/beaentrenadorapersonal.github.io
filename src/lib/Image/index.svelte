<script lang="ts">
	export let src: string;
	export let alt = '';
	export let message = '';
</script>

<div class="container">
	<div class="container__image">
		<img {src} {alt} />
	</div>

	{#if message != ''}
		<div class="message-container"><div class="message">{message}</div></div>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
	}

	.container__image {
		width: 100%;
		height: 100%;
		text-align: center;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.message-container {
		position: absolute;
		bottom: 10%;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.message {
		padding: 1em;
		color: white;
		text-align: center;
	}
</style>
