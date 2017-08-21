import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import { user } from './schemas/user';

const json = JSON.stringify(jsf(user));

fs.writeFile('app/api/db.json', json, (err) => {
  if (err) {
    chalk.red(err);
  } else {
    chalk.green('Mock data generated');
  }
});
