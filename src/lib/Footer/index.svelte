<script lang="ts">
</script>

<div class="footer">
	<div class="location">
		Servicios ofrecidos a domicilio en la zona del Baix Llobregat, en el centro deportivo <a
			href="https://goo.gl/maps/NXwT8A41LDuoS89y6">Pau Gasol de Sant Boi de Llobregat</a
		> y online.
	</div>
	<div class="upper">
		<div class="links">
			<div>Navegación</div>
			<a sveltekit:prefetch href="/">Inicio</a>
			<a sveltekit:prefetch href="/servicios">Servicios</a>
			<a sveltekit:prefetch href="/sobre">Sobre Mí</a>
		</div>
		<div class="links">
			<div>Contacto</div>
			<a href="mailto:beagomez.entrenadora1982@gmail.com">E-Mail</a>
			<a href="https://api.whatsapp.com/send?phone=+34640292078">Whatsapp</a>
			<a href="https://www.instagram.com/beagomez.entrenadorapersonal/">Instagram</a>
		</div>
	</div>
	<div class="bottom">
		<div>Copyright © 2021 Bea Entrenadora Personal.</div>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: lightsalmon;
	}

	.location {
		text-align: center;
	}

	.upper {
		display: flex;
		flex-direction: row;
		padding: 1em;
		text-align: center;
	}

	.upper * {
		padding: 0.2em;
		padding-left: 1em;
		padding-right: 1em;
	}

	.links {
		display: flex;
		flex-direction: column;
	}

	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--header-bg-color);
		color: var(--header-color);
		position: relative;
		padding: 1em;
	}
</style>
