const pg = require('pg');
const connectionstring = process.env.DATABASE_URL || 'postgres://139.162.84.23:5432/wechat_public_account';

const client = new pg.client(connectionstring);
client.connect();
const query = client.query('');