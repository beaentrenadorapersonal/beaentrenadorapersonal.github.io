<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

	import { title } from '../../stores';

	let hambMenu: HTMLDivElement;
	let sideBar: HTMLDivElement;

	let opening = false;

	let nav_title = '';
	title.subscribe((value) => {
		nav_title = value;
	});

	function handleClick() {
		if (!opening) {
			sideBar.classList.add('sidebar-closed');
			hambMenu.classList.add('hambMenuClosed');
		}
		opening = false;
	}
</script>

<svelte:head>
	<title>Bea - {nav_title}</title>
</svelte:head>

<svelte:body on:click={handleClick} />

<header>
	<div class="header">
		<div class="left">
			<div
				bind:this={hambMenu}
				class="baritem hambMenu hambMenuClosed"
				on:click={() => {
					sideBar.classList.toggle('sidebar-closed');
					hambMenu.classList.toggle('hambMenuClosed');
					opening = true;
				}}
			>
				<Icon data={faBars} />
			</div>
			<div class="baritem">
				<a sveltekit:prefetch class="bar-link" href="/">Bea Entrenadora Personal</a>
				&gt; {nav_title}
			</div>
		</div>

		<div class="right">
			<div class="baritem"><Icon data={faInstagram} /></div>
			<div class="baritem"><Icon data={faFacebookSquare} /></div>
		</div>
	</div>
</header>

<div class="sidebar sidebar-closed" bind:this={sideBar}>
	<a sveltekit:prefetch class="sidebar-link" href="/">Inicio</a>
	<a sveltekit:prefetch class="sidebar-link" href="/servicios">Servicios</a>
	<a sveltekit:prefetch class="sidebar-link" href="/sobre">Sobre Mí</a>
	<a sveltekit:prefetch class="sidebar-link" href="/contacto">Contacto</a>
</div>

<style>
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		overflow: auto;
		height: var(--header-height);
		background-color: var(--header-bg-color);
		color: var(--header-color);
		display: flex;
		align-items: center;
		z-index: 1; /* Stay on top */
	}

	.left,
	.right {
		flex-grow: 1;
	}

	.left {
		display: flex;
	}

	.right {
		display: flex;
		direction: rtl;
		padding-right: 1em;
	}

	.baritem {
		padding-left: 1em;
	}

	.bar-link {
		text-decoration: none;
		color: var(--header-color);
	}

	.hambMenu {
		width: 1em;
		transform: rotate(90deg) translate(-0.6em, -0.3em);
		transition: all 0.2s linear;
	}

	.hambMenuClosed {
		transform: rotate(0deg);
		transition: all 0.2s linear;
	}

	.sidebar {
		background-color: var(--sidebar-bg-color);
		color: var(--sidebar-color);
		position: fixed;
		top: var(--header-height);
		width: 200px;
		height: 100%;
		z-index: 1; /* Stay on top */
		transition: all 0.2s linear;
		overflow-x: hidden; /* Disable horizontal scroll */
		display: flex;
		flex-direction: column;
		opacity: 0.95;
	}

	.sidebar-closed {
		width: 0;
		transition: all 0.2s linear;
	}

	.sidebar-link {
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		padding-left: 1em;
		padding-right: 1em;
		text-decoration: none;
		color: var(--sidebar-color);
	}

	.sidebar-link:hover {
		background-color: #ddd;
	}
</style>
