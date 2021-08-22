<script lang="ts">
	export let title: string;
	export let description: string;
	export let imgSrc: string;
	export let imgAlt: string;
	export let position: string;
	let left = position === 'left';
	let right = !left;
</script>

<div class:right class:left class="flex-container service">
	<img src={imgSrc} alt={imgAlt} />
	<div class="content'}}">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
	:global(.bx--accordion__item--active .bx--accordion__content) {
		padding-top: 0;
		padding-bottom: 0;
	}

	:global(.bx--accordion__content) {
		padding-top: 0;
		padding-bottom: 0;
		padding-right: 0;
		padding-left: 0;
	}

	.flex-container {
		display: flex;
		flex-direction: column;
	}

	.left {
		background: #ffebcc;
		flex-direction: row-reverse;
	}

	.right {
		flex-direction: row;
		background: #ccccff;
		align-content: right;
		align-items: right;
	}

	.service > div {
		width: 50%;
		padding: 1em;
	}

	.service > img {
		width: 50%;
	}

	@media (max-width: 700px) {
		.service > img {
			width: 100%;
		}

		.service > div {
			width: 100%;
		}

		.left,
		.right {
			flex-direction: column;
		}
	}
</style>
