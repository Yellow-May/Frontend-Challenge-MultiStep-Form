<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';
	import Switch from './UI/Switch.svelte';
	import { get_form_data, options_list, save_form_data } from '../helpers';

	const title = 'Select your plan';
	const desc = 'You have the option of monthly or yearly billing.';
	let plan: string | null = get_form_data()?.['plan'] ?? null;
	let monthly = get_form_data()?.['monthly'] ?? true;

	const options = options_list.get('plans') as {
		id: string;
		label: string;
		cost: { monthly: number; yearly: number };
		icon: string;
	}[];

	export let back: any;
	export let next: any;
	export let stage: string;

	const toggle_switch = () => {
		monthly = !monthly;
		save_form_data({ monthly });
	};

	const handle_change = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		plan = e.currentTarget.id;
		save_form_data({ plan });
	};

	const handle_submit = () => {
		if (plan) next();
	};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit}>
	<div class="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-5">
		{#each options as option}
			<div
				class={`relative border border-gray-50 rounded-lg hover:border-gray-100 ${
					plan === option.id ? 'border-gray-100 bg-magnolia' : ''
				}`}
			>
				<input
					type="radio"
					name="plan"
					id={option.id}
					checked={option.id === plan}
					on:change={handle_change}
					class="absolute w-full h-full opacity-0 cursor-pointer"
				/>
				<div class="p-4 flex items-start gap-5 w-full md:flex-col md:gap-10">
					<img src={option.icon} alt={option.label} class="w-11 h-11" />

					<div class="flex flex-col items-start">
						<h3 class="text-lg font-medium text-blue-300">
							{option.label}
						</h3>
						<span class="text-sm text-gray-100"
							>${monthly
								? `${option.cost.monthly}/mo`
								: `${option.cost.yearly}/yr`}</span
						>
						{#if !monthly}
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
