<script lang="ts">
	import Icon from '$lib/Icon/index.svelte';
	import {
		faDumbbell,
		faStopwatch,
		faUser,
		faPencilAlt,
		faUtensils
	} from '@fortawesome/free-solid-svg-icons';
	import Service from '$lib/service/Service.svelte';
	import ServicePoint from '$lib/service/ServicePoint.svelte';
	import Image from '$lib/Image/index.svelte';
</script>

<div class="first-screen">
	<Image src="/servicios/title.jpg" alt="Sea cual sea tu objetivo estamos aqu√≠ para ayudar" />
	<div class="first-screen__text-container">
		<div class="first-screen__text">
			<strong>Sea cual sea tu objetivo estamos aquí para ayudar</strong>
		</div>
	</div>
</div>

<div class="service">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Entrenamientos personales individuales y nutrición
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Image src="/servicios/05.jpg" alt="Entrenamientos personales individuales y nutrición" />
		</div>

		<div class="flex-item-50 service__info">
			<Service>
				<ServicePoint
					icon={faUser}
					emphasis="Entrenamiendo individual 100% personalizado"
					additional="para las necesidades y objetivos del cliente"
				/>
				<ServicePoint icon={faStopwatch} emphasis="Horario flexible" />
				<ServicePoint
					icon={faPencilAlt}
					emphasis="Evaluación y asesoramiento"
					additional="donde se toman medidas anatómicas, peso y composición"
				/>
				<ServicePoint
					icon={faUtensils}
					emphasis="Dieta incluída gratuita"
					additional=" si contrata dos sesiones o más a la semana corporal"
				/>
			</Service>
			<div class="service__price">
				<ul>
					<li>1 sesión 80 euros</li>
					<li>Bono 5 sesiones 70 euros (350)</li>
					<li>Bono 10 sesiones 60 euros (600)</li>
					<li>Bono 20 sesiones 45 euros (900)</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">"Lo mejor es el bocadillo de jamón y la cerveza de después"</div>
		<div class="quote__name">Marilú, 49 años, 12 hijos</div>
	</div>
</div>

<div class="service">
	<h3 class="service__title">
		<Icon data={faDumbbell} /> Entrenamientos en grupo reducido y nutrición
	</h3>

	<div class="flex-container-row">
		<div class="flex-item-50 service__img">
			<Image src="/servicios/06.jpg" alt="Entrenamientos en grupo reducido y nutrición" />
		</div>

		<div class="flex-item-50 service__info">
			<Service>
				<ServicePoint
					icon={faUser}
					emphasis="Entrenamiendo en grupo reducido de 2-4 personas y 100% personalizado"
					additional="para las necesidades y objetivos de cada cliente"
				/>
				<ServicePoint icon={faStopwatch} emphasis="Horario flexible" />
				<ServicePoint
					icon={faPencilAlt}
					emphasis="Evaluación y asesoramiento"
					additional="donde se toman medidas anatómicas, peso y composición"
				/>
				<ServicePoint
					icon={faUtensils}
					emphasis="Dieta incluída gratuita"
					additional=" si contrata dos sesiones o más a la semana corporal"
				/>
			</Service>
			<div class="service__price">
				<ul>
					<li>25 euros por persona y sesión</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="service__quote">
		<div class="quote__content">"Y luego nos vamos de tapas a criticar a Bea!!!"</div>
		<div class="quote__name">Pepi, 52 años, 3 ex-maridos</div>
	</div>
</div>

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

	.service__img {
		height: 70vw;
	}

	.service__info {
		background-color: sienna;
		color: white;
	}

	.service__price {
		background-color: #eccdbe;
		color: black;
		margin: 1em;
		border-radius: 5px;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
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

	@media (max-width: 700px) {
		.service__img {
			height: 100vw;
		}
	}
</style>
