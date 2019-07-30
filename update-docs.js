const shell = require('shelljs');

shell.rm("-rf", "./docs");
shell.exec('yarn run clean');
shell.exec('yarn run build');
shell.cp("-r", "public", "docs");
