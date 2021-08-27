<script lang="ts">
	import Icon from '$lib/Icon/index.svelte';
	import Carousel from '$lib/Carousel/index.svelte';
	import CarouselElement from '$lib/CarouselElement/index.svelte';
	import {
		faBaby,
		faClipboardList,
		faFemale,
		faDumbbell,
		faStopwatch,
		faUser,
		faPencilAlt,
		faGlobe,
		faUtensils
	} from '@fortawesome/free-solid-svg-icons';
	import Image from '$lib/Image/index.svelte';
</script>

<div class="first-screen">
	<Image src="/servicios/title.jpg" alt="Sea cual sea tu objetivo estamos aquí para ayudar" />
	<div class="first-screen__text-container">
		<div class="first-screen__text">
			<strong>Sea cual sea tu objetivo estamos aquí para ayudar</strong>
		</div>
	</div>
</div>

<div class="service-section">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Entrenamientos personales individuales y nutrición
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Image src="/servicios/05.jpg" alt="Entrenamientos personales individuales y nutrición" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div class="service__bulletpoint">
					<Icon data={faUser} />
					<strong>Entrenamiendo individual 100% personalizado</strong>
					para las necesidades y objetivos de cada cliente
				</div>

				<div class="service__bulletpoint">
					<Icon data={faStopwatch} />
					<strong>Horario flexible</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faPencilAlt} />
					<strong>Evaluación y asesoramiento</strong>
					donde se toman medidas anatómicas, peso y composición
				</div>

				<div class="service__bulletpoint">
					<Icon data={faUtensils} />
					<strong>Dieta incluída gratuita</strong>
					si contrata dos sesiones o más a la semana corporal
				</div>

				<div class="service__bulletpoint">
					<Icon data={faGlobe} />
					<strong>En centro deportivo, domicilio u online</strong>
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					En centro deportivo u online:
					<ul>
						<li>1 sesión 80 euros</li>
						<li>Bono 5 sesiones 70 euros (350)</li>
						<li>Bono 10 sesiones 60 euros (600)</li>
						<li>Bono 20 sesiones 45 euros (900)</li>
					</ul>

					En domicilio:
					<ul>
						<li>1 sesión 100 euros</li>
						<li>Bono 5 sesiones 80 euros (400)</li>
						<li>Bono 10 sesiones 70 euros (700)</li>
						<li>Bono 20 sesiones 60 euros (1200)</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"Nunca pensé que aprendería a nadar y con 46 años y en menos de 2 meses aprendí a hacerlo. Ha
			sido una experiencia inolvidable. SI QUIERES, PUEDES!"
		</div>
		<div class="quote__name">Elena P.</div>
	</div>
</div>

<div class="service-section">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Entrenamientos en grupo reducido y nutrición
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Image src="/servicios/06.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div class="service__bulletpoint">
					<Icon data={faUser} />
					<strong>Entrenamiendo en grupo reducido de 2-4 personas y 100% personalizado</strong>
					para las necesidades y objetivos de cada cliente
				</div>

				<div class="service__bulletpoint">
					<Icon data={faStopwatch} />
					<strong>Horario flexible</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faPencilAlt} />
					<strong>Evaluación y asesoramiento</strong>
					donde se toman medidas anatómicas, peso y composición
				</div>

				<div class="service__bulletpoint">
					<Icon data={faUtensils} />
					<strong>Dieta incluída gratuita</strong>
					si contrata dos sesiones o más a la semana corporal
				</div>

				<div class="service__bulletpoint">
					<Icon data={faGlobe} />
					<strong>En centro deportivo, domicilio u online</strong>
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					En centro deportivo u online:
					<ul>
						<li>25 euros por persona y sesión</li>
					</ul>

					En domicilio:
					<ul>
						<li>40 euros por persona y sesión</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"No ha sido solo mejorar mi condición física y psicológica sino que el 'YO SÍ PUEDO' se haya
			convertido en parte de mi vida"
		</div>
		<div class="quote__name">Maria José B.</div>
	</div>
</div>

<div class="service-section">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Mommy and Wellness
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Carousel interval={3500}>
				<CarouselElement visible={true}>
					<Image src="/servicios/07.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
				</CarouselElement>
				<CarouselElement>
					<Image src="/servicios/08.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
				</CarouselElement>
			</Carousel>
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div class="service__bulletpoint">
					<Icon data={faBaby} />
					<strong>3 servicios de consultoría de lactancia</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faFemale} />
					<strong>4 sesiones de 30’ de recuperación y bienestar post parto</strong>
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					<ul>
						<li>Pack 260 euros</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"Gracias a mi entrenadora he subido mi autoestima, confío en mi y me siento más fuerte además
			de haber tomado conciencia de buenos hábitos y no abandonarlos. Experiencia 100% recomendable"
		</div>
		<div class="quote__name">Lorena S.</div>
	</div>
</div>

<div class="service-section">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Plan a tu Medida
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Image src="/servicios/09.jpg" alt="Plan a tu Medida" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				Servicio combinado de pauta de entrenamiento y nutrición

				<div class="service__bulletpoint">
					<Icon data={faClipboardList} />
					<strong
						>pauta de entrenamiento se adapta al material de tu centro deportivo o hogar y al
						espacio utilizado</strong
					>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faUtensils} />
					<strong
						>pauta de nutrición es totalmente personalizada al objetivo, ejercicio y día a día.</strong
					>
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					<ul>
						<li>Pack 100 euros</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"Llevaba mucho tiempo sin entrenar y Bea ha hecho que mi vuelta sea mucho más fácil y
			motivadora. Su profesionalidad para ver qué dinámicas y ritmo necesito hace que sude la
			camiseta como nunca! Y además SIEMPRE CON UNA SONRISA!"
		</div>
		<div class="quote__name">Mar P.</div>
	</div>
</div>

<div class="service-section">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Servicio de Asesoramiento
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Image src="/servicios/10.jpg" alt="Servicio de Asesoramiento" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				Todas esas respuestas o tips que necesitas para asegurarte de que tu plan de ejercicios y
				alimentación es correcto, consejos, feedback,orientación y motivación para que continúes tu
				andadura en el entrenamiento con más confianza y efectividad.
			</div>

			<div class="service__price-container">
				<div class="service__price">
					<ul>
						<li>80 euros/hora</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"Tengo poco tiempo para entrenar y la manera de APROVECHAR MI TIEMPO AL 120% es con la ayuda
			de Bea"
		</div>
		<div class="quote__name">Fran R.</div>
	</div>
</div>

<br />

<style>
	.first-screen {
		text-align: center;
	}

	.first-screen__text-container {
		background-color: rgba(0, 0, 0, 0.5);
		position: relative;
		bottom: 100%;
		color: white;
		height: 100%;
	}

	.first-screen__text {
		position: relative;
		top: 60%;
		width: 100%;
		font-size: 2em;
	}

	.service__title {
		padding: 1em;
		text-align: center;
	}

	.service__info {
		background-color: sienna;
		min-height: 400px;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.service__description {
		padding: 1em;
	}

	.service__bulletpoint {
		padding-bottom: 0.5em;
	}

	.service__price-container {
		background-color: #eccdbe;
		color: black;
		margin: 0.5em;
		border-radius: 5px;
	}

	.service__price {
		padding: 0.5em;
	}

	.service__quote {
		background-color: white;
		border-radius: 10px;
		padding: 1em;
		margin: 1em;
	}

	.quote__content {
		font-style: italic;
		font-size: 1.2em;
	}

	.quote__name {
		text-align: right;
	}

	@media (max-width: 800px) {
		.service__img {
			height: 100vw;
		}

		.service__info {
			min-height: 0;
		}
	}
</style>
