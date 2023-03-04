import pg from "pg"
//or native libpq bindings
//var pg = require('pg').native
var conString = "postgres://ndwklvsy:m3Vg_aff7tgBvW-Ghb31bSUoGStzu0o1@batyr.db.elephantsql.com/ndwklvsy" //Can be found in the Details page
export const client = new pg.Client(conString);

const connectDb = () => {
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT NOW() AS "theTime"', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
        // >> output: 2018-08-23T14:02:57.117Z
      });
    });

}

export default connectDb