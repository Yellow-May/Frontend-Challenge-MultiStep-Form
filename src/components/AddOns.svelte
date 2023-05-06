<script lang="ts">
	import Wrapper from './layouts/Wrapper.svelte';
	import { get_form_data, options_list, save_form_data } from '../helpers';
	import icon_checkmark from '../assets/images/icon-checkmark.svg';

	let title = 'Pick add-ons';
	let desc = 'Add-ons help enhance your gaming experience.';
	let add_ons: string[] = get_form_data()?.['add_ons'] ?? [];

	const monthly = get_form_data()?.['monthly'];
	const options = options_list.get('add-ons') as {
		id: string;
		label: string;
		sub: string;
		cost: { monthly: number; yearly: number };
	}[];

	export let back: any;
	export let next: any;
	export let stage: string;

	const handle_change = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		const { id } = e.currentTarget;
		add_ons = add_ons.includes(id)
			? add_ons.filter(e => e !== id)
			: [...add_ons, id];
		save_form_data({ add_ons });
	};

	const handle_submit = () => {
		next();
	};
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit}>
	<div class="flex flex-col gap-3">
		{#each options as option}
			<label
				for={option.id}
				class={`border border-gray-50 rounded-lg hover:border-gray-100 p-3 flex items-center gap-5 w-full md:p-4 ${
					add_ons.includes(option.id) ? 'border-gray-100 bg-magnolia' : ''
				}`}
			>
				{#if add_ons.includes(option.id)}
					<img src={icon_checkmark} alt="checked" class="w-4 h-4" />
				{/if}
				<input
					type="checkbox"
					name="plan"
					id={option.id}
					checked={add_ons.includes(option.id)}
					on:change={handle_change}
					class={`w-4 h-4 ${add_ons.includes(option.id) ? 'hidden' : ''}`}
				/>

				<div class="flex-grow flex flex-col items-start">
					<h3 class="text-base font-medium text-blue-300">
						{option.label}
					</h3>
					<span class="text-[13px] text-gray-100">{option.sub}</span>
				</div>

				<span class="text-xs text-blue-200"
					>${monthly
						? `${option.cost.monthly}/mo`
						: `${option.cost.yearly}/yr`}</span
				>
			</label>
		{/each}
	</div>
</Wrapper>
