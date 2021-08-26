<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Icon from '$lib/Icon/index.svelte';

	export let icon: IconDefinition;
	export let emphasis: string;
	export let additional: string = '';
</script>

<div class="container">
	<Icon data={icon} />
	<strong>{emphasis}</strong>
	{additional}
</div>

<style>
	.container {
		padding-bottom: 0.5em;
	}
</style>
