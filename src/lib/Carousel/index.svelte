<script lang="ts">
	import { onMount } from 'svelte';

	export let interval = 5000;
	let carousel: Element = null;
	let imageContainer: Element = null;

	onMount(async () => {
		imageContainer = carousel.firstElementChild;

		setInterval(function () {
			imageContainer.classList.remove('visible');

			imageContainer =
				imageContainer.nextElementSibling ?? imageContainer.parentNode.firstElementChild;

			imageContainer.classList.add('visible');
		}, interval);
	});
</script>

<div class="carousel" bind:this={carousel}>
	<slot />
</div>

<style>
	.carousel {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
