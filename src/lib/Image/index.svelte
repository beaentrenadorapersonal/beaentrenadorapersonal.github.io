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
		width: auto;
		height: 100%;
	}

	.container__image {
		width: auto;
		height: 100%;
	}

	img {
		max-height: 100%;
		width: auto;
		object-fit: cover;
		overflow: hidden;
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
