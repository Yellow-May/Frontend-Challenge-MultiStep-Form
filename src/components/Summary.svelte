<script lang="ts">
	import { get_form_data, options_list } from '../helpers';
	import Wrapper from './layouts/Wrapper.svelte';

	let title = 'Finishing Up';
	let desc = 'Double-check everything looks OK before confirming.';

	export let back: any;
	export let next: any;
	export let stage: string;

	const handle_submit = () => {
		next();
	};

	const data = get_form_data();
	const addOnsOptions = options_list.get('add-ons') as any[];
	const planOptions = options_list.get('plans') as any[];
	const selectedAdOns = data.add_ons.map((o: string) =>
		addOnsOptions?.find((e: { id: string }) => e.id === o)
	) as any[];
	const selectedPlan = planOptions?.find(
		(e: { id: string }) => e.id === data.plan
	);
	const monthlyTotal =
		selectedPlan.cost.monthly +
		selectedAdOns.reduce((a, b) => a + b.cost.monthly, 0);
	const yearlyTotal =
		selectedPlan.cost.yearly +
		selectedAdOns.reduce((a, b) => a + b.cost.yearly, 0);
</script>

<Wrapper {title} {desc} {back} {stage} {handle_submit} okText="Confirm">
	<div class="bg-magnolia rounded-lg px-4 mb-4">
		<div class="py-4 border-b border-gray-50 flex justify-between items-center">
			<div>
				<h5 class="text-sm font-semibold text-blue-300">
					{selectedPlan.label}
					{data.monthly ? '(Monthly)' : '(Yearly)'}
				</h5>
				<button
					type="button"
					class="text-sm underline text-gray-100"
					on:click={() => {
						back('3');
					}}>Change</button
				>
			</div>

			<span class="text-blue-300 text-sm font-extrabold"
				>${data.monthly
					? `${selectedPlan.cost.monthly}/mo`
					: `${selectedPlan.cost.yearly}/yr`}</span
			>
		</div>
		<div class="py-4 space-y-4">
			{#each selectedAdOns as adOn}
				<div class="flex items-center justify-between">
					<span class="text-sm text-gray-100">{adOn.label}</span>
					<span class="text-blue-300 text-sm"
						>${data.monthly
							? `${adOn.cost.monthly}/mo`
							: `${adOn.cost.yearly}/yr`}</span
					>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex items-center justify-between p-2">
		<span class="text-sm text-gray-100"
			>Total {data.monthly ? '(per month)' : '(per year)'}</span
		>

		<span class="text-blue-200 text-xl font-extrabold"
			>${data.monthly ? `${monthlyTotal}/mo` : `${yearlyTotal}/yr`}</span
		>
	</div>
</Wrapper>
