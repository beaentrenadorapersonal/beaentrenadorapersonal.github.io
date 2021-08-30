<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<div class="first-screen">
	<div class="screen__wrapper">
		<img class="first-screen__img" src="/inicio/01.jpg" alt="Ha Llegado la Hora de Cuidarse" />
		<div class="text">
			<strong>Ha Llegado la Hora de Cuidarse</strong>
		</div>
	</div>
</div>

<div class="screen__wrapper">
	<img
		class="wide"
		src="/inicio/02.jpg"
		alt="Si la falta de motivación te ha llevado a una vida sedentaria ha llegado el momento de dar el salto"
	/>
	<div class="text">
		<strong
			>Si la falta de motivación te ha llevado a una vida sedentaria ha llegado el momento de dar el
			salto</strong
		>
	</div>
</div>

<div class="screen__wrapper">
	<img
		class="wide"
		src="/inicio/03.jpg"
		alt="Cuidar tu salud física y mental es la mejor manera de llevar una vida plena"
	/>
	<div class="text">
		<strong>Cuidar tu salud física y mental es la mejor manera de llevar una vida plena </strong>
	</div>
</div>

<style>
	.first-screen {
		text-align: center;
	}

	.screen__wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.first-screen > .screen__wrapper > .text {
		font-size: 2em;
	}

	.text {
		padding: 1em;
	}
</style>
