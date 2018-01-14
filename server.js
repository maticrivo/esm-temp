import Koa from 'koa';

export const start = async () => {
	const app = new Koa();

	const { initModules } = await import('./api/modules')
	await initModules(app)

	app.use(async ctx => {
	  ctx.body = 'Hello World';
	});

	app.listen(3000, () => {
		console.log('Server started: http://localhost:3000/')
	});
}
