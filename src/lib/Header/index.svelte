<script lang="ts">
	import { page } from '$app/stores';

	import Icon from 'svelte-awesome';
	import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
</script>

<svelte:head>
	<title>Bea - {$page.path}</title>
</svelte:head>

<header>
	<div class="header">
		<div class="corner" />

		<nav>
			<a class:active={$page.path === '/'} class="left" sveltekit:prefetch href="/">Inicio</a>
			<div class="submenu">
				<div class="submenu-header">
					<a class:active={$page.path.startsWith('/servicios')} sveltekit:prefetch href="/servicios"
						>Servicios</a
					>
				</div>
				<div class="submenu-content">
					<a
						class:active={$page.path === '/servicios/individual'}
						sveltekit:prefetch
						href="/servicios/individual">Entrenamiento Individual</a
					>
					<a
						class:active={$page.path === '/servicios/grupos'}
						class="bottom"
						sveltekit:prefetch
						href="/servicios/grupos">Entrenamiento en Grupos</a
					>
				</div>
			</div>
			<a class:active={$page.path === '/nosotros'} sveltekit:prefetch href="/nosotros">Nosotros</a>
			<a class:active={$page.path === '/contacto'} class="right" sveltekit:prefetch href="/contacto"
				>Contacto</a
			>
		</nav>

		<div class="corner">
			<a class="social-media" href="https://facebook.com">
				<Icon scale="2" data={faFacebookSquare} />
			</a>
			<a class="social-media" href="https://instagram.com">
				<Icon scale="2" data={faInstagram} />
			</a>
		</div>
	</div>
</header>

<style>
	a.social-media {
		color: black;
	}

	.header {
		display: flex;
		justify-content: space-between;
		margin-top: 0.5em;
	}

	.corner {
		justify-content: space-between;
		min-width: 4em;
		width: 4em;
		height: 3em;
		display: flex;
		align-items: center;
		text-align: right;
		margin: 0 40px 0 0;
	}

	nav {
		display: flex;
		justify-content: space-between;
		--background: rgba(255, 255, 255, 1);
		background: var(--background);
		border-radius: 10px;

		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	nav * {
		text-align: center;
		min-width: 5em;
	}

	a {
		text-decoration: none;
	}

	.active {
		text-decoration: underline;
		text-decoration-color: var(--accent-color);
		text-underline-position: under;
		text-decoration-thickness: 2px;
	}

	.submenu-content {
		display: none;
		background: var(--background);
		border-radius: 0 0 10px 10px;
		top: 3.7em;

		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
		transform: translate(-28%, -2%);
	}
</style>
