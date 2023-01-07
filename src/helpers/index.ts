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
		'plan',
		[
			{ id: '0', label: 'Arcade', sub: '$9/mo', icon: icon_arcade },
			{ id: '1', label: 'Advance', sub: '$12/mo', icon: icon_advanced },
			{ id: '2', label: 'Pro', sub: '$15/mo', icon: icon_pro },
		],
	],
	[
		'add-ons',
		[
			{ id: '0', label: 'Arcade', sub: '$9/mo', icon: icon_arcade },
			{ id: '1', label: 'Advance', sub: '$12/mo', icon: icon_advanced },
			{ id: '2', label: 'Pro', sub: '$15/mo', icon: icon_pro },
		],
	],
]);
