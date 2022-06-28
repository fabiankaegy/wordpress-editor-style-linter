const program = require( 'commander' );
const { version } = require( '../package.json' );
const log = require( './log' );
const fs = require('fs');
const parser = require('./parser');

const commandName = 'verify-editor-style';

program
    .version( version )
    .name( commandName )
    .arguments('[filename]')
	.action( ( filename ) => {

		try {
			const content = fs.readFileSync(filename).toString();
			parser( content );
		} catch (error) {
			log.error( error );
			throw error;
		}
	} )
	.parse(process.argv)
