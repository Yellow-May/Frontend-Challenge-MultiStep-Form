<script lang="ts">
	import AddOns from './components/AddOns.svelte';
	import PersonalInfo from './components/PersonalInfo.svelte';
	import SelectPlan from './components/SelectPlan.svelte';
	import Summary from './components/Summary.svelte';
	import ThankYou from './components/ThankYou.svelte';
	import { navitems, reset_form_data } from './helpers';

	const curr_stage = localStorage.getItem('curr_stage');
	$: stage = curr_stage ?? '1';
	const next = () => {
		stage = (+stage + 1).toString();
		localStorage.setItem('curr_stage', stage);
	};
	const back = (payload?: string) => {
		if (payload && typeof payload === 'string') {
			stage = payload;
			localStorage.setItem('curr_stage', payload);
		}
		stage = (+stage - 1).toString();
		localStorage.setItem('curr_stage', stage);
	};
	const reset = () => {
		stage = '1';
		reset_form_data();
	};
</script>

<div
	class="font-ubuntu h-full md:flex md:items-center md:justify-center md:bg-magnolia"
>
	<!-- card -->
	<div
		class="p-2 rounded-md bg-magnolia md:max-w-[95%] md:max-h-[90%] md:w-[878px] md:min-h-[568px] md:grid md:grid-cols-3 md:gap-8 md:p-3 md:bg-white md:shadow-lg"
	>
		<!-- left -->
		<div
			class="bg-[image:url('/assets/bg-sidebar-mobile.svg')] md:bg-[image:url('/assets/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover absolute top-0 left-0 w-full h-[20%] max-h-[172px] md:relative md:col-span-1 md:h-full md:min-h-full md:rounded-lg"
		>
			<ul
				class="flex items-center justify-center gap-5 mt-[7%] md:mt-0 md:flex-col md:justify-start md:items-start md:gap-8 md:py-8 md:px-[10%] md:h-full"
			>
				{#each navitems as navitem}
					<li class="md:flex md:gap-3 md:items-center">
						<span
							class={`${
								navitem.id === stage
									? 'text-blue-300 bg-blue-50'
									: 'text-white border'
							} font-semibold text-sm w-9 h-9 flex items-center justify-center rounded-full md:w-10 md:h-10`}
							>{navitem.id}</span
						>
						<div
							class="hidden md:block md:space-y-1 md:uppercase md:tracking-wider"
						>
							<span class="text-gray-100 text-xs font-semibold block"
								>{`Step ${navitem.id}`}</span
							>
							<h5 class="text-white font-bold text-sm">{navitem.label}</h5>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<!-- right -->
		<div
			class="relative z-10 md:col-span-2 w-full rounded-lg bg-white px-5 pt-8 pb-[10%] mt-[25%] md:mt-0 md:h-full md:bg-[transparent] md:pl-10 md:pr-12 small-screen:mb-[30%]"
		>
			{#if stage === '1'}
				<PersonalInfo {stage} {next} {back} />
			{/if}
			{#if stage === '2'}
				<SelectPlan {stage} {next} {back} />
			{/if}
			{#if stage === '3'}
				<AddOns {stage} {next} {back} />
			{/if}
			{#if stage === '4'}
				<Summary {stage} {next} {back} />
			{/if}
			{#if stage === '5'}
				<ThankYou {reset} />
			{/if}
		</div>
	</div>
</div>
