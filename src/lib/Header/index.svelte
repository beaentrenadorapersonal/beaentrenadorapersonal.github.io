<script lang="ts">
</script>

<header>
	<div class="header">
		<div class="corner">TBD</div>

		<nav>
			<a class="left" sveltekit:prefetch href="/">Inicio</a>
			<div class="submenu">
				<div class="submenu-header">Servicios</div>
				<div class="submenu-content">
					<a sveltekit:prefetch href="/servicios/individual">Entrenamiento Individual</a>
					<a class="bottom" sveltekit:prefetch href="/servicios/grupos">Entrenamiento en Grupos</a>
				</div>
			</div>
			<a class="right" sveltekit:prefetch href="/about">Contacto</a>
		</nav>

		<div class="corner">Instagram/Facebook</div>
	</div>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		margin-top: 0.5em;
	}

	.corner {
		min-width: 10em;
		width: 10em;
		height: 3em;
		display: flex;
		align-items: center;
	}

	nav {
		display: flex;
		justify-content: space-between;
		--background: rgba(255, 255, 255, 1);
		background: var(--background);
		border-radius: 10px;
	}

	nav * {
		text-align: center;
		min-width: 5em;
	}

	.submenu-content {
		display: none;
		background: var(--background);
		border-radius: 0 0 10px 10px;
		top: 3.7em;
	}

	nav a,
	nav .submenu {
		padding: 1em;
		color: black;
	}

	nav a:hover,
	nav .submenu:hover {
		background-color: red;
		background: rgba(240, 240, 240, 1);
		text-decoration: none;
	}

	.left:hover {
		border-radius: 10px 0 0 10px;
	}

	.right:hover {
		border-radius: 0 10px 10px 0;
	}

	.bottom:hover {
		border-radius: 0 0 10px 10px;
	}

	.submenu:hover > .submenu-content {
		display: flex;
		flex-direction: column;
		position: absolute;
		transform: translate(-30%, -2%);
	}
</style>
