const { sql, poolPromise } = require('./../utils/db/connpool');


function getData(callback) {
    new sql.Request(poolPromise).query('select * from tbl_static_category where typeId = 1', (err, result) => {
        if (err) {
            console.log('inside data fetch method');
            console.log(err);
        }
        // poolPromise.close();
        callback(result.recordsets[0]);
        //return;
    })
}

var fetchDataWithID = (id, callback) => {

    console.log(typeof id);
    new sql.Request(poolPromise)
        .input('id', sql.NVarChar, id)
        .query('select * from person where pid = @id', (err, result) => {
            if (err) {
                console.log('inside data fetch method');
                console.log(err);
            }
            // poolPromise.close();
            callback(result.recordsets[0]);
            return;
        })
}


var savePersonData = (person, callback) => {
    const transaction = poolPromise.transaction();
    transaction.begin(err => {
        // ... error checks

        let rolledBack = false

        transaction.on('rollback', aborted => {
            // emited with aborted === true

            rolledBack = true
        })

        new sql.Request(transaction)
            .input('pid', sql.NVarChar, person.pid)
            .input('name', sql.NVarChar, person.name)
            .input('designation', sql.NVarChar, person.designation)
            .input('dept', sql.NVarChar, person.dept)
            .query('insert into person (pid,name,designation,dept) values (@pid,@name,@designation,@dept)', (err, result) => {
                // insert should fail because of invalid value
                if (err) {
                    console.log('in error block');
                   // throw new Error('something bad happened');
                    //throw(err);
                    //return;
                    //throw new Error('listId does not exist');
                }
                if (err) {
                    if (!rolledBack) {
                        transaction.rollback(err => {
                            // ... error checks
                            console.log('in rollback');
                            throw new Error('something bad happened');
                            //callback('error occured while saving');
                        })
                    }
                } else {
                    transaction.commit(err => {
                        // ... error checks
                        callback(undefined,result);
                    })
                }
            })
    })
}

var getDataFromProc = (id, callback) => {

    console.log(typeof id);
    new sql.Request(poolPromise)
        .input('id', sql.NVarChar, id)
        .execute('get_person_data', (err, result) => {
            if (err) {
                console.log('inside data fetch method');
                console.log(err);
            }
            // poolPromise.close();
            callback(result.recordsets[0]);
            //return;
        })
}

module.exports = { getData, fetchDataWithID, savePersonData ,getDataFromProc}