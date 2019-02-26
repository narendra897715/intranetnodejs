const { auth_sql, auth_poolPromise } = require('./../utils/db/connpool_auth');
var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('database');


exports.checkForToken = (validationToken) => {
    return new Promise((resolve, reject) => {
        new auth_sql.Request(auth_poolPromise)
        .input('validationToken', auth_sql.VarChar, validationToken)
            .query('select cast (count(1) as bit) as flag from employee.tbl_login_details where validationToken=@validationToken', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }

                resolve(result.recordsets[0]);

            });
    })
};



exports.saveToken = (validationToken,userToken) => {

    return new Promise((resolve, reject) => {
        const transaction = auth_poolPromise.transaction();
        transaction.begin(err => {
            // ... error checks

            let rolledBack = false

            transaction.on('rollback', aborted => {
                // emited with aborted === true

                rolledBack = true;
            })

            const ps = new auth_sql.PreparedStatement(transaction)
            ps.input('validationToken', auth_sql.VarChar)
            ps.input('userToken', auth_sql.VarChar)
            ps.prepare('update employee.tbl_login_details set validationToken = @validationToken where userToken = @userToken', err => {
                if (err) {
                    reject(err);
                }

                const request = ps.execute({'validationToken':validationToken,'userToken':userToken}, (err, result) => {
                    // ... error checks
                    if (err) {
                        reject(err);
                    }
                    ps.unprepare(err => {
                        // ... error checks
                        if (err) {
                            if (!rolledBack) {
                                transaction.rollback(err => {
                                    // ... error checks
                                    logger.fatal(err);
                                    reject(err);
                                })
                            }
                        } else {
                            transaction.commit(err => {
                                // ... error checks                            
                                resolve(result);

                            })
                        }

                    })
                })


            })
        })
    });

}
