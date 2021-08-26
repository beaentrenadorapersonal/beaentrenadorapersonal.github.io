<script context="module" lang="ts">
	import Image from '$lib/Image/index.svelte';

	export const prerender = true;
</script>

<script lang="ts">
	import Carousel from '$lib/Carousel/index.svelte';
	import CarouselElement from '$lib/CarouselElement/index.svelte';
</script>

<section>
	<div class="first-screen">
		<Carousel interval={3500}>
			<CarouselElement visible={true}>
				<Image
					src="/inicio/01.jpg"
					alt="Salud, motivación y resultados"
					message="Salud, motivación y resultados"
				/>
			</CarouselElement>
			<CarouselElement>
				<Image
					src="/inicio/02.jpg"
					alt="Difícil no significa impostible"
					message="Difícil no significa impostible"
				/>
			</CarouselElement>
			<CarouselElement>
				<Image src="/inicio/03.jpg" alt="Es dif" message="Salud, motivación y resultados" />
			</CarouselElement>
			<CarouselElement>
				<Image
					src="/inicio/04.jpg"
					alt="Es difícil, por eso vale la pena"
					message="Es difícil, por eso vale la pena"
				/>
			</CarouselElement>
		</Carousel>
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
</style>
