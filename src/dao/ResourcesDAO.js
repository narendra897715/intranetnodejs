const { sql, poolPromise } = require('./../utils/db/connpool');
var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('database');

exports.getResourcesPolicies = (searchData, categoryId, rowStart, rowEnd) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('sortById', sql.Numeric, categoryId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getResourcesPolicies]', (err, result) => {
                if (err) {
                   // console.log(err);
                    logger.fatal(err);
                    reject(err);
                }
                // poolPromise.close();
                resolve(result.recordsets[0]);

            })
    })
};

exports.getResourcesForms = (searchData, categoryId, rowStart, rowEnd) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('sortById', sql.Numeric, categoryId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getResourcesForms]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }
                // poolPromise.close();
                resolve(result.recordsets[0]);

            })
    })
};

exports.getResourcesLD = (searchData, categoryId, rowStart, rowEnd) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('sortById', sql.Numeric, categoryId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getResourcesLD]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }
                // poolPromise.close();
                resolve(result.recordsets[0]);

            })
    })
};

exports.getAppsData = (employeeId) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('employeeID', sql.Numeric, employeeId)
            .execute('[dbo].[IntranetPortal_sp_getUserApplications]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }
                // poolPromise.close();
                resolve(result.recordsets[0]);

            })
    })
};


exports.getCategoryDropDown = () => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise).query('select * from tbl_static_resources_filter', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }

            resolve(result.recordsets[0]);

        })
    })
};

exports.getResourcesCategory = () => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise).query('select * from tbl_static_resourcesCategory', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }

            resolve(result.recordsets[0]);

        })
    })
};
exports.getFileByID = (fileId) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
        .input('fileId', sql.Int, fileId)
        .query('select * from tbl_resources_files where fileId=@fileId', (err, result) => {
            if (err) {
              //  console.log(err);
                logger.fatal(err);
                reject(err);
            }

            resolve(result.recordsets[0]);

        })
    })
};


exports.uploadFiles = (imageData) => {
    //console.log('i am checkin g here',pk);
    //console.log('data', imageData);
    return new Promise((resolve, reject) => {
        try {
            const transaction = poolPromise.transaction();
            transaction.begin(err => {
                // ... error checks

                let rolledBack = false

                transaction.on('rollback', aborted => {
                    // emited with aborted === true

                    rolledBack = true
                })

                const ps = new sql.PreparedStatement(transaction)

                ps.input('resourcesCategoryId', sql.Int)
                ps.input('files', sql.NVarChar)
                ps.input('fileName', sql.NVarChar)
                ps.input('fileType', sql.NVarChar)
                ps.input('updatedBy', sql.Int)
                ps.input('createdDate', sql.DateTime)
                ps.input('updatedDate', sql.DateTime)
                ps.input('createdBy', sql.Int)
                ps.prepare('insert into tbl_resources_files (resourcesCategoryId,files,fileName,fileType,createdBy,updatedBy,createdDate,updatedDate)' +
                    ' values (@resourcesCategoryId,@files,@fileName,@fileType,@createdBy,@updatedBy,@createdDate,@updatedDate);SELECT SCOPE_IDENTITY() AS id;', err => {
                        // insert should fail because of invalid value
                        const request = ps.execute(imageData, (err, result) => {
                            if (err) {
                                reject(err);
                                // console.log(err);
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

        } catch (error) {
           // console.log(error);
            logger.fatal(err);

            throw error;
        }
    });
};

exports.deleteFile = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const transaction = poolPromise.transaction();
            transaction.begin(err => {
                // ... error checks

                let rolledBack = false

                transaction.on('rollback', aborted => {
                    // emited with aborted === true

                    rolledBack = true
                })

                const ps = new sql.PreparedStatement(transaction)

                ps.input('fileId', sql.Int)
                ps.prepare('delete from  tbl_resources_files where fileId= @fileId', err => {
                    // insert should fail because of invalid value
                    const request = ps.execute({ fileId: id }, (err, result) => {
                        if (err) {
                            logger.fatal(err);
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

        } catch (error) {
            logger.fatal(err);
            throw new Error('error occured while performing database trasaction');
        }

    })
}
