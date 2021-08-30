declare module 'svelte-awesome' {
	import type { SvelteComponentTyped } from 'svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	class Icon extends SvelteComponentTyped<{
		data: IconDefinition;
		scale?: string;
		spin?: boolean;
		pulse?: boolean;
	}> {}
	export default Icon;
}
