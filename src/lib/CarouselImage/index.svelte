<script lang="ts">
	export let src: string;
	export let alt = '';
	export let message = '';
	export let visible = false;
</script>

<div class:visible class="item">
	<img {src} {alt} />
	{#if message != ''}
		<div class="message-container"><div class="message">{message}</div></div>
	{/if}
</div>

<style>
	.item {
		position: absolute;
		opacity: 0;
	}

	img {
		height: 500px;
		transition: all 1s linear;
	}

	.visible {
		opacity: 1;
		transition: all 1s linear;
	}

	.message-container {
		position: absolute;
		bottom: 40px;
		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 6em;
		display: flex;
		align-items: center;
	}

	.message {
		padding: 1em;
		width: 100%;
		color: white;
		text-align: center;
	}
</style>
