<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';

	let title = 'Finishing Up';
	let desc = 'Double-check everything looks OK before confirming.';

	export let back: any;
	export let next: any;
	export let stage: string;

	const handle_submit = () => {
		next();
	};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit} okText="Confirm" />
