import icon_arcade from '../assets/images/icon-arcade.svg';
import icon_advanced from '../assets/images/icon-advanced.svg';
import icon_pro from '../assets/images/icon-pro.svg';

export const navitems = [
	{ id: '1', label: 'Your Info' },
	{ id: '2', label: 'Select Plan' },
	{ id: '3', label: 'Add-Ons' },
	{ id: '4', label: 'Summary' },
];

export const form_fields = [
	{ id: 'name', label: 'Name', placeholder: 'e.g. Stephen King', type: 'text' },
	{
		id: 'email',
		label: 'Email Address',
		placeholder: 'e.g. stephenking@lorem.com',
		type: 'email',
	},
	{
		id: 'phone',
		label: 'Phone Number',
		placeholder: 'e.g. +1 234 567 890',
		type: 'tel',
	},
];

export const alphabets = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

export const options_list = new Map([
	[
		'plans',
		[
			{
				id: '0',
				label: 'Arcade',
				cost: { monthly: 9, yearly: 90 },
				icon: icon_arcade,
			},
			{
				id: '1',
				label: 'Advance',
				cost: { monthly: 12, yearly: 120 },
				icon: icon_advanced,
			},
			{
				id: '2',
				label: 'Pro',
				cost: { monthly: 15, yearly: 150 },
				icon: icon_pro,
			},
		],
	],
	[
		'add-ons',
		[
			{
				id: '0',
				label: 'Online service',
				sub: 'Access to multiplayer games',
				cost: { monthly: 1, yearly: 10 },
			},
			{
				id: '1',
				label: 'Larger storage',
				sub: 'Extra 1TB of cloud save',
				cost: { monthly: 2, yearly: 20 },
			},
			{
				id: '2',
				label: 'Customizable profile',
				sub: 'Custom theme on your profile',
				cost: { monthly: 2, yearly: 20 },
			},
		],
	],
]);

export const get_form_data = () => {
	const form_data = localStorage.getItem('form_data');
	if (form_data) return JSON.parse(form_data);
	return {};
};

export const save_form_data = (changes: any) => {
	let new_data = {};
	const form_data = localStorage.getItem('form_data');

	if (form_data) new_data = { ...JSON.parse(form_data), ...changes };
	else new_data = { ...changes };

	localStorage.setItem('form_data', JSON.stringify(new_data));
};

export const reset_form_data = () => {
	localStorage.removeItem('form_data');
};
