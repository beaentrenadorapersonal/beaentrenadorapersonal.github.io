<script lang="ts">
	import Icon from 'svelte-awesome';
	import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

	let hambMenu: HTMLDivElement;
	let sideBar: HTMLDivElement;

	let opening = false;

	function handleClick() {
		if (!opening) {
			sideBar.classList.add('sidebar-closed');
			hambMenu.classList.add('hambMenuClosed');
		}
		opening = false;
	}
</script>

<svelte:body on:click={handleClick} />

<div
	bind:this={hambMenu}
	class="hambMenu hambMenuClosed"
	on:click={() => {
		sideBar.classList.toggle('sidebar-closed');
		hambMenu.classList.toggle('hambMenuClosed');
		opening = true;
	}}
>
	<Icon data={faBars} />
</div>

<div class="sidebar sidebar-closed" bind:this={sideBar}>
	<div class="links">
		<a sveltekit:prefetch href="/">Inicio</a>
		<a sveltekit:prefetch href="/servicios">Servicios</a>
		<a sveltekit:prefetch href="/sobre">Sobre Mí</a>
	</div>
	<div class="social-media">
		<div class="social-media-item">
			<a href="mailto:beagomez.entrenadora1982@gmail.com">
				<Icon data={faEnvelope} scale="1.5" /></a
			>
		</div>
		<div class="social-media-item">
			<a href="https://api.whatsapp.com/send?phone=+34640292078">
				<Icon data={faWhatsapp} scale="1.5" />
			</a>
		</div>
		<div class="social-media-item">
			<a href="https://www.instagram.com/beagomez.entrenadorapersonal/"
				><Icon data={faInstagram} scale="1.5" /></a
			>
		</div>
	</div>
</div>

<style>
	.hambMenu {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 0;
		right: 10px;
		transform: rotate(90deg);
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
		z-index: 999;
		border-radius: 50%;
		width: 3em;
		height: 3em;
	}

	.hambMenuClosed {
		transform: rotate(0deg);
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	.sidebar {
		background-color: var(--sidebar-bg-color);
		color: var(--sidebar-color);
		position: fixed;
		top: 0;
		right: 0;
		width: 200px;
		height: 100%;
		z-index: 1;
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		opacity: 0.95;
		justify-content: space-between;
	}

	.sidebar-closed {
		width: 0;
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	a {
		padding-top: 1em;
		padding-bottom: 1em;
		padding-left: 1em;
		padding-right: 1em;
		text-decoration: none;
		color: var(--sidebar-color);
	}

	a:hover {
		background-color: #ddd;
	}

	.links {
		display: flex;
		flex-direction: column;
	}

	.social-media {
		display: flex;
		flex-direction: row;
	}

	.social-media-item {
		padding: 5px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
</style>
