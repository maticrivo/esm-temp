import glob from 'glob'
import Router from 'koa-router'

export const initModules = async app => {
	const matches = glob.sync(`${__dirname}/*`, { ignore: '**/index.js' })

	const modules = await Promise.all(matches.map(mod => import(`${mod}/router`)))
	modules.forEach(mod => {
		const name = mod.name
		const prefix = mod.prefix
		const routes = mod.routes
		const instance = new Router({ name, prefix })

		routes.forEach(config => {
			const { method = '', route = '', handlers = [] } = config

			const lastHandler = handlers.pop()

			instance[method.toLowerCase()](route, ...handlers, lastHandler)
		})

		app.use(instance.routes()).use(instance.allowedMethods({ throw: true }))
	})
}
