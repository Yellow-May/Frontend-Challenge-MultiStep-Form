<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';
	import { options_list } from '../helpers';

	let title = 'Pick add-ons';
	let desc = 'Add-ons help enhance your gaming experience.';
	let add_ons: string[] = [];

	export let back: any;
	export let next: any;
	export let stage: string;

	const handle_submit = () => {
		if (add_ons) next();
	};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit}>
	<div class="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-5">
		{#each options_list.get('add-ons') as option}
			<div
				class={`relative border border-gray-50 rounded-lg hover:border-gray-100 ${
					add_ons.includes(option.id) ? 'border-gray-100 bg-magnolia' : ''
				}`}
			>
				<input
					type="checkbox"
					name="plan"
					id={option.id}
					value={option.id}
					bind:group={add_ons}
					class="absolute w-full h-full opacity-0 cursor-pointer"
				/>
				<div class="p-4 flex items-start gap-5 w-full md:flex-col md:gap-10">
					<img src={option.icon} alt={option.label} class="w-11 h-11" />

					<div class="flex flex-col items-start">
						<h3 class="text-lg font-medium text-blue-300">
							{option.label}
						</h3>
						<span class="text-sm text-gray-100">{option.sub}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Wrapper>
