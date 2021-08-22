<script context="module" lang="ts">
	import { title } from '../stores';

	title.set('Inicio');

	export const prerender = true;
</script>

<script lang="ts">
	import Carousel from '$lib/Carousel/index.svelte';
	import CarouselImage from '$lib/CarouselImage/index.svelte';
</script>

<section>
	<div class="motivational">
		<h1>Salud y bienestar</h1>
	</div>

	<div class="carousel">
		<Carousel interval={3500}>
			<CarouselImage visible={true} src="grupos.jpg" alt="grupo" />
			<h1>test</h1>
			<CarouselImage src="individual.jpg" alt="individual" message="No te ahogues" />
			<CarouselImage src="intro.jpg" alt="intro" message="Porque yo lo valgo" />
			<CarouselImage src="mamas.jpg" alt="mamas" message="Slurp!!!" />
		</Carousel>
	</div>

	<div class="motivational">
		<h1>Chorizo y Bacon</h1>
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

	.motivational {
		text-align: center;
		width: 100%;
		background-color: pink;
	}

	.carousel {
		height: 500px;
	}
</style>
