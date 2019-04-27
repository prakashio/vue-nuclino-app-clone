import MainApp from '../src/layouts/main.vue';

export const routes = [
	{
		path: '/:workspace',
		name: 'workspace',
		component: MainApp,
	},
	{
		name: 'cluster',
		path: '/:workspace/:cluster',
		component: MainApp
	}
]
