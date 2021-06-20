<script lang="ts">
	import { page } from '$app/stores';

	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

	let hambMenu: HTMLDivElement;
	let menuBar: HTMLDivElement;

	let opening = false;

	function handleClick() {
		if (!opening) {
			menuBar.classList.add('menu-closed');
		}
		opening = false;
	}
</script>

<svelte:head>
	<title>Bea - {$page.path}</title>
</svelte:head>

<svelte:body on:click={handleClick} />

<header>
	<div class="header">
		<div
			bind:this={hambMenu}
			class="hambmenu"
			on:click={() => {
				menuBar.classList.toggle('menu-closed');
				opening = true;
			}}
		>
			<Icon data={faBars} />
		</div>

		<div bind:this={menuBar} class="menubar menu-closed">
			<nav>
				<a class:active={$page.path === '/'} class="left" sveltekit:prefetch href="/">Inicio</a>
				<div class="submenu">
					<div class="submenu-header">
						<a
							class:active={$page.path.startsWith('/servicios')}
							sveltekit:prefetch
							href="/servicios">Servicios</a
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
				<a class:active={$page.path === '/nosotros'} sveltekit:prefetch href="/nosotros">Nosotros</a
				>
				<a class:active={$page.path === '/contacto'} sveltekit:prefetch href="/contacto">Contacto</a
				>

				<div class="social-media-block">
					<a class="social-media right-first" href="https://facebook.com">
						<Icon data={faFacebookSquare} />
					</a>
					<a class="social-media right-last" href="https://instagram.com">
						<Icon data={faInstagram} />
					</a>
				</div>
			</nav>
		</div>
	</div>
</header>

<style>
	.header {
		position: sticky;
		position: --webkit-sticky;
		top: 0;
	}

	.menubar {
		display: flex;
		justify-content: center;
		margin-top: 1em;
	}

	.hambmenu {
		display: none;
		margin-top: 1em;
	}

	nav {
		display: flex;
		height: 3em;
		justify-content: space-between;
		--background: rgba(255, 255, 255, 1);
		background: var(--background);
		border-radius: 10px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		max-width: 36em;
	}

	nav * {
		text-align: center;
		flex-grow: 1;
		flex-basis: 0;
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
		top: 3em;
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

	.right-last:hover {
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

	.social-media-block {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	a.social-media {
		color: black;
	}

	@media screen and (max-width: 700px) {
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.hambmenu {
			display: block;
		}

		.menu-closed {
			display: none;
			transition: all 2s linear;
		}

		.menubar {
			position: fixed;
			top: 2em;
			z-index: -100;
		}

		nav {
			height: auto;
			width: 20em;
			flex-direction: column;
			justify-content: left;
			align-items: left;
			text-align: left;
			align-content: left;
		}

		nav * {
			text-align: left;
		}

		nav .submenu {
			padding-left: 0;
			width: 95%;
		}

		.submenu-content {
			display: flex;
			flex-direction: column;
			position: relative;
			top: 1em;
			box-shadow: none;
			width: 105%;
		}

		.submenu-content a:before {
			content: '→ ';
		}

		.submenu:hover > .submenu-content {
			flex-direction: column;
			position: relative;
			transform: none;
		}

		.left:hover {
			border-radius: 10px 10px 0 0;
		}

		.right-first {
			border-radius: 0 0 0 10px;
		}

		.right-last {
			border-radius: 0;
		}
	}
</style>
