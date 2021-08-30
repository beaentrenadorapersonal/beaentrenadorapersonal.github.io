<script lang="ts">
	// @ts-ignore
	import Icon from 'svelte-awesome'; // @ts-ignore
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	export let data: IconDefinition;
	export let scale = '1';
	export let spin = false;
	export let pulse = false;
</script>

<Icon {data} {scale} {spin} {pulse} />
