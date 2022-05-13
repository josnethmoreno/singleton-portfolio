import * as icon  from 'react-icons/si'

const profile = {
	name: 'Carlos Montenegro',
	role: 'Front End Developer',
	description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facere, itaque excepturi, necessitatibus cum ex nisi.',
};

const email = 'josnethmoreno@gmail.com';

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com' },
	{ icon: icon.SiMedium, link: 'https://www.medium.com/' },
	{ icon: icon.SiTwitter, link: 'https://www.twitter.com/' },
	{ icon: icon.SiInstagram, link: 'https://www.instagram.com/' },
];

const work = [
	{
		name: 'Todo app',
		description: 'Vestibulum mattis tincidunt ligula in tem vestibulum tristique sapien at odio euis condimentum condimentum.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Pokedex',
		description: 'Vestibulum mattis tincidunt ligula in tem vestibulum tristique sapien at odio euis condimentum condimentum.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'E-Commerce',
		description: 'Vestibulum mattis tincidunt ligula in tem vestibulum tristique sapien at odio euis condimentum condimentum.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
	{
		name: 'Twitter Clon',
		description: 'Vestibulum mattis tincidunt ligula in tem vestibulum tristique sapien at odio euis condimentum condimentum.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiReact, name: 'ReactJS' },
		],
		linkProject: 'https://example.com',
		linkGithub: 'https://github.com',
	},
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiTailwindcss, name: 'Tailwind', },
			{ icon: icon.SiVuedotjs, name: 'VueJS', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiDeno, name: 'Deno' },
			{ icon: icon.SiGraphql, name: 'Graphql' },
			{ icon: icon.SiFirebase, name: 'Firebase', },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
		],
	},
]

export { profile, social, work, stack, email, icon }