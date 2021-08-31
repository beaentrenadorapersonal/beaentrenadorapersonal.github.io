<script lang="ts">
	import Carousel from '$lib/Carousel/index.svelte';
	import CarouselElement from '$lib/CarouselElement/index.svelte';
</script>

<div class="first-screen">
	<img src="/sobre/11.jpg" alt="Bea Entrenadora Personal" />
</div>

<div class="text-container">
	<div class="text">
		Soy Bea Gómez y llevo más de 20 años en el mundo del fitness y la salud. Practicando deporte
		desde muy pequeña y apoyada por mis padres siempre supe que lo mio era cuidar la salud mediante
		el movimiento, nunca tuve ninguna duda. Recuerdo la primera vez que llegué a una clase de
		aeróbic con 6 años, la música, la energía el movimiento y los ejercicios que practicamos
		hicieron que mi ilusión por esa disciplina que estaba empezando en España fuera inmensa. El
		disfrute y la sensación de bienestar posterior era tal que nunca dejé de hacerlo. Con 16 años
		tuve la oportunidad de empezar a formarme para dedicarme de manera profesional y con la gran
		suerte de que los formadores que se cruzaron en mi camino supieron transmitirme tanto los
		valores como los conocimientos del mundo del fitness, hace unos años empecé mi andadura en el
		mundo del Entrenamiento Personales que tantas alegrías y buenos momentos me ha dado.
	</div>
</div>

<div class="full-screen">
	<Carousel interval={3500}>
		<CarouselElement visible={true}>
			<img src="/sobre/12.jpg" alt="bea" />
		</CarouselElement>
		<CarouselElement>
			<img src="/sobre/13.jpg" alt="bea" />
		</CarouselElement>
		<CarouselElement>
			<img src="/sobre/14.jpg" alt="bea" />
		</CarouselElement>
	</Carousel>
</div>

<div class="text-container">
	<div class="text">
		Siempre en continua formación tanto en el mundo del fitness, nutrición como a nivel emocional
		con cursos desde Body-Pump, Sala de Fitness, Entrenamiento Funcional, Pilates, Nutrición
		deportiva y saludable o PNL ( Programación Neuro Lingüística), hacen que el servicio prestado
		sea óptimo y los resultados ya no solo físicos si no también mentales y cambios de hábitos
		sorprendentes.
	</div>

	<div class="outro"><strong>Te atreves a comenzar?</strong></div>
</div>

<div class="full-screen">
	<Carousel interval={3500}>
		<CarouselElement visible={true}>
			<img src="/sobre/15.jpg" alt="bea" />
		</CarouselElement>
		<CarouselElement>
			<img src="/sobre/16.jpg" alt="bea" />
		</CarouselElement>
		<CarouselElement>
			<img src="/sobre/17.jpg" alt="bea" />
		</CarouselElement>
	</Carousel>
</div>

<style>
	.text {
		padding: 1em;
	}

	.outro {
		width: 100%;
		text-align: center;
		padding: 1em;
		font-size: 2em;
	}
</style>
