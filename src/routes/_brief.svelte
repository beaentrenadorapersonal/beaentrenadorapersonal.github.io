<script lang="ts">
	export let title: string;
	export let description: string;
	export let imgSrc: string;
	export let imgAlt: string;
	export let position: string;
	let left = position === 'left';
	let right = !left;
</script>

<div class:right class:left class="flex-container-row service">
	<img class="flex-item-50" src={imgSrc} alt={imgAlt} />
	<div class="flex-item-50">
		<h3 class="content">{title}</h3>
		<p class="content">{description}</p>
	</div>
</div>

<style>
	.left {
		background: #ffebcc;
		flex-direction: row-reverse;
	}

	.right {
		background: #ccccff;
		align-content: right;
		align-items: right;
	}

	.content {
		padding-left: 1em;
		padding-right: 1em;
	}

	@media (max-width: 700px) {
		.left,
		.right {
			flex-direction: column;
		}
	}
</style>
