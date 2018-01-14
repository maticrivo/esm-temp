import { start } from './server';

process.on('unhandledRejection', e => console.error('Unhandled rejection', e));

const main = async (...params) => {
	try {
		await start();
	} catch (e) {
		logger.error('Error during startup:', e);
		process.exit(1);
	}
}

main();
