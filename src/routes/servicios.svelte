<script lang="ts">
	import Icon from 'svelte-awesome';
	import Carousel from '$lib/Carousel/index.svelte';
	import CarouselElement from '$lib/CarouselElement/index.svelte';
	import {
		faBaby,
		faCalendar,
		faClipboardCheck,
		faClipboardList,
		faFemale,
		faDumbbell,
		faRunning,
		faSearch,
		faStopwatch,
		faUser,
		faPencilAlt,
		faGlobe,
		faUtensils,
		faMobileAlt
	} from '@fortawesome/free-solid-svg-icons';
</script>

<div class="first-screen">
	<img src="/servicios/title.jpg" alt="Sea cual sea tu objetivo estamos aquí para ayudar" />
	<div class="first-screen__text-container">
		<div class="first-screen__text">
			<strong>Sea cual sea tu objetivo estamos aquí para ayudar.</strong>
		</div>
	</div>
</div>

<div class="service-section">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Entrenamientos personalizados y nutrición
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Carousel interval={3500}>
				<CarouselElement visible={true}>
					<img src="/servicios/05.jpg" alt="Entrenamientos individual y nutrición" />
				</CarouselElement>
				<CarouselElement>
					<img src="/servicios/06.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
				</CarouselElement>
			</Carousel>
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div class="service__bulletpoint">
					<Icon data={faUser} />
					<strong>Entrenamiendo 100% personalizado</strong>
					para las necesidades y objetivos de cada cliente.
				</div>

				<div class="service__bulletpoint">
					<Icon data={faStopwatch} />
					<strong>Horario flexible.</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faPencilAlt} />
					<strong>Evaluación y asesoramiento</strong>
					donde se toman medidas anatómicas, peso y composición.
				</div>

				<div class="service__bulletpoint">
					<Icon data={faUtensils} />
					<strong>Dieta incluída gratuita</strong>
					si contrata dos sesiones o más a la semana.
				</div>

				<div class="service__bulletpoint">
					<Icon data={faGlobe} />
					<strong>En centro deportivo, domicilio u online.</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faUser} />
					<strong>Sesiones individuales o en grupo reducido (2-4 personas).</strong> Si quieres entrenar
					en grupo reducido te puedes unir a uno ya existente según disponibilidad y caracteristicas.
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					Individual en centro deportivo u online:
					<ul>
						<li>1 sesión 80€.</li>
						<li>Bono 5 sesiones 70€ (350).</li>
						<li>Bono 10 sesiones 60€ (600).</li>
						<li>Bono 20 sesiones 45€ (900).</li>
					</ul>

					En grupo reducido en centro deportivo u online:
					<ul>
						<li>25 € por persona y sesión.</li>
					</ul>

					A domicilio*:
					<ul>
						<li>1 sesión 145€.</li>
						<li>Bono 5 sesiones 125€ (625).</li>
						<li>Bono 10 sesiones 115€ (1150).</li>
						<li>Bono 20 sesiones 105€ (2100).</li>
					</ul>
					* Las sesiones son por persona. Personas adicionales son 25 €/persona.
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
		<Icon data={faDumbbell} /> Entrenamiento personalizado con seguimiento en plataforma digital
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<img src="/servicios/dudyfit.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div>
					Tu entrenamiento y pauta de nutrición totalmente a medida en plataforma digital para que
					puedas entrenar donde y cuando te vaya bien. Conseguir tus objetivos nunca ha sido tan
					cómodo.
				</div>
				<br />

				<div class="service__bulletpoint">
					<Icon data={faUser} />
					<strong>3 entrenamientos semanales</strong> con videos explicativos para que consigas tu objetivo
					desde casa.
				</div>

				<div class="service__bulletpoint">
					<Icon data={faPencilAlt} />
					<strong>Feedback y seguimiento de entrenamientos, métricas y hábitos.</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faUtensils} />
					<strong>Pauta de nutrición saludable.</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faMobileAlt} />
					<strong>Completamente digital</strong> para que entrenes cuando y donde quieras
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">Precio: 120 euros/mes</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
            La plataforma digital es muy cómoda de usar ya que puedo entrenar donde y cuando pueda.
            Es perfecto cuando vas con el tiempo justo.
		</div>
		<div class="quote__name">Leticia</div>
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
					<img src="/servicios/07.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
				</CarouselElement>
				<CarouselElement>
					<img src="/servicios/08.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
				</CarouselElement>
			</Carousel>
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div class="service__bulletpoint">
					<Icon data={faBaby} />
					<strong>3 servicios de consultoría de lactancia.</strong>
				</div>

				<ul>
					<li>
						Evaluación inicial de lactancia (posición de la mamá y el bebé, agarre, tiempos, etc) a
						domicilio.
					</li>
					<li>2 sesiones de consultoría de lactancia individuales a domicilio.</li>
					<li>Horario de mañana.</li>
				</ul>

				<hr />

				<div class="service__bulletpoint">
					<Icon data={faFemale} />
					<strong>4 sesiones de 30’ de recuperación y bienestar post parto.</strong>
				</div>

				<ul>
					<li>Evaluación inicial de salud post embarazo en el centro deportivo.</li>
					<li>
						3 sesiones de 30’ de recuperación y bienestar post embarazo en el centro deportivo.
					</li>
					<li>
						Realizaremos ejercicios de recuperación de suelo pélvico, hipopresivos, estiramientos y
						movilidad.
					</li>
					<li>Horario flexible.</li>
				</ul>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					<ul>
						<li>Pack 260 €.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"Gracias a mi entrenadora he subido mi autoestima, confío en mi y me siento más fuerte además
			de haber tomado conciencia de buenos hábitos y no abandonarlos. Experiencia 100%
			recomendable."
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
			<img src="/servicios/09.jpg" alt="Plan a tu Medida" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div>Servicio combinado de pauta de entrenamiento y nutrición.</div>
				<br />

				<div class="service__bulletpoint">
					<Icon data={faSearch} />
					<strong>Evaluación inicial.</strong>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faClipboardList} />
					<strong
						>Planificación semanal personalizada de entrenamiento con ejercicios adaptados a ti, a
						tu nivel, a tu espacio y a tu objetivo.</strong
					>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faUtensils} />
					<strong
						>Pauta nutricional con un menú semanal donde aprenderás a comer sano y equilibrado
						adaptando los alimentos a tu día a día y a tu gasto calórico.</strong
					>
				</div>

				<div class="service__bulletpoint">
					<Icon data={faClipboardCheck} />
					<strong
						>Visita de control una vez pasados los 15 días del inicio del entrenamiento.</strong
					>
				</div>

				<div>
					Se recomienda mantenerlo durante 8-10 semanas y posteriormente cambiarlo por uno de mayor
					nivel.
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					<ul>
						<li>Pack 100€.</li>
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
			<img src="/servicios/10.jpg" alt="Servicio de Asesoramiento" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				Todas esas respuestas o tips que necesitas para asegurarte de que tu plan de ejercicios y
				alimentación es correcto, consejos, feedback, orientación y motivación para que continúes tu
				andadura en el entrenamiento con más confianza y efectividad.
			</div>

			<div class="service__price-container">
				<div class="service__price">
					<ul>
						<li>80€/hora.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"Tengo poco tiempo para entrenar y la manera de APROVECHAR MI TIEMPO AL 120% es con la ayuda
			de Bea."
		</div>
		<div class="quote__name">Fran R.</div>
	</div>
</div>

<div class="service-section">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Plan 12 semanas
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<img src="/servicios/11.jpg" alt="Servicio de Asesoramiento" />
		</div>

		<div class="flex-item-50 service__info">
			<div class="service__description">
				<div class="service__bulletpoint">
					<Icon data={faPencilAlt} />
					<strong>Evaluación inicial.</strong>
				</div>
				<div class="service__bulletpoint">
					<Icon data={faDumbbell} />
					<strong>2 sesiones a la semana.</strong>
				</div>
				<div class="service__bulletpoint">
					<Icon data={faGlobe} />
					<strong>Un entrenamiento virtual.</strong>
				</div>
				<div class="service__bulletpoint">
					<Icon data={faClipboardList} />
					<strong>Un entrenamiento pautado.</strong>
				</div>
				<div class="service__bulletpoint">
					<Icon data={faUtensils} />
					<strong>Una planificación nutricional.</strong>
				</div>
				<div class="service__bulletpoint">
					<Icon data={faCalendar} />
					<strong>Cambio de material mensual.</strong>
				</div>
				<div class="service__bulletpoint">
					<Icon data={faRunning} />
					<strong>Duración de 12 semanas.</strong>
				</div>
			</div>

			<div class="service__price-container">
				<div class="service__price">
					<ul>
						<li>1250€.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">
			"En 3 meses he visto mejores resultados que en 10 años entrenando por mi cuenta."
		</div>
		<div class="quote__name">David B.</div>
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
