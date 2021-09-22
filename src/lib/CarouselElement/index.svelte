<script lang="ts">
	export let visible = false;
</script>

<div class:visible class="carousel-element">
	<slot />
</div>

<style>
	.carousel-element {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		opacity: 0;
		transition: all 1s ease;
		width: 100%;
		height: 100%;
	}

	.visible {
		opacity: 1;
		transition: all 1s ease;
	}
</style>
