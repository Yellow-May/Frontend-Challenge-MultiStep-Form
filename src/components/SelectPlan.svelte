<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';
	let title = 'Select your plan';
	let desc = 'You have the option of monthly or yearly billing.';

	export let back: any;
	export let next: any;
	export let stage: string;

	const handle_submit = () => {};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit} />
