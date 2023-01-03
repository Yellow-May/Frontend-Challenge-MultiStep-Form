<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';
	import Switch from './UI/Switch.svelte';
	import { options_list } from '../helpers';

	const title = 'Select your plan';
	const desc = 'You have the option of monthly or yearly billing.';
	let selected: string | null = null;
	let monthly = true;

	export let back: any;
	export let next: any;
	export let stage: string;

	const toggle_switch = () => (monthly = !monthly);

	const handle_submit = () => {
		if (selected) next();
	};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit}>
	<div class="flex flex-col gap-3">
		{#each options_list as option}
			<div class="relative">
				<input
					type="radio"
					name="plan"
					id={option.id}
					value={option.id}
					bind:group={selected}
					class="absolute w-full h-full opacity-0 cursor-pointer"
				/>
				<div
					class={`p-4 border border-gray-100 rounded-lg flex items-start gap-5 w-full ${
						selected === option.id ? 'border-blue-200 bg-magnolia' : ''
					}`}
				>
					<img src={option.icon} alt={option.label} class="w-11 h-11" />

					<div class="flex flex-col items-start">
						<h3 class="text-lg font-medium text-blue-300">
							{option.label}
						</h3>
						<span class="text-sm text-gray-100">{option.sub}</span>
						{#if monthly}
							<span class="text-sm text-blue-200">2 months free</span>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<Switch
		binder={monthly}
		options={['Monthly', 'Yearly']}
		toggle={toggle_switch}
	/>
</Wrapper>
