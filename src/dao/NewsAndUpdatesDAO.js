const { sql, poolPromise } = require('./../utils/db/connpool');
var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('database');

//try to create class and use the object style of programming like java

exports.getSubMenu = (callback) => {
    new sql.Request(poolPromise).execute('[dbo].[IntranetPortal_sp_getNewsAndUpdatesSubMenu]', (err, result) => {
        if (err) {
            logger.fatal(err);
            callback(err)
        }

        return callback(null, result.recordsets[0]);

    })
};


exports.getCategory = (data,callback) => {
    new sql.Request(poolPromise)
    .input('employeeId', sql.Numeric, data.employeeId)
    .execute('[dbo].[IntranetPortal_sp_getNewsAndUpdatesCategoryList]', (err, result) => {
        if (err) {
            logger.fatal(err);
            callback(err)
        }

        return callback(null, result.recordsets[0]);

    })
}
exports.getCategoryFilter = (callback) => {
    new sql.Request(poolPromise).execute('[dbo].[IntranetPortal_sp_getNewsAndUpdatesCategoryListFilter]', (err, result) => {
        if (err) {
            logger.fatal(err);
            callback(err)
        }

        return callback(null, result.recordsets[0]);

    })
}


exports.postAnUpdate = (data, callback) => {
    //null check and insert if id is null else update

    //console.log('inside if block');
    const transaction = poolPromise.transaction();
    transaction.begin(err => {
        // ... error checks

        let rolledBack = false

        transaction.on('rollback', aborted => {
            // emited with aborted === true

            rolledBack = true
        })

        const request = new sql.Request(transaction)
            .input('categoryId', sql.Int, data.categoryId)
            .input('eventStartDate', sql.DateTime, data.eventStartDate)
            .input('eventEndDate', sql.DateTime, data.eventEndDate)
            .input('eventName', sql.NVarChar, data.eventName)
            .input('eventDescription', sql.NVarChar, data.eventDescription)
            .input('updatedBy', sql.Int, data.updatedBy)
            .input('createdDate', sql.DateTime, data.createdDate)
            .input('updatedDate', sql.DateTime, data.updatedDate)
            .input('createdBy', sql.Int, data.createdBy)
            .query('insert into tbl_news_and_updates (categoryId,eventStartDate,eventEndDate,eventName,eventDescription,createdBy,updatedBy,createdDate,updatedDate)' +
                ' values (@categoryId,@eventStartDate,@eventEndDate,@eventName,@eventDescription,@createdBy,@updatedBy,@createdDate,@updatedDate);SELECT SCOPE_IDENTITY() AS id;', (err, result) => {


                    if (err) {
                        logger.fatal(err);
                        return callback(err);

                    }
                    if (err) {
                        if (!rolledBack) {
                            transaction.rollback(err => {
                                // ... error checks
                                logger.fatal(err);
                                return callback(err);

                            })
                        }
                    } else {
                        transaction.commit(err => {
                            // ... error checks
                            return callback(undefined, result);
                        });
                    };
                });
    });

};

exports.updateThePost = (data, callback) => {
    //null check and insert if id is null else update
    try {
        const transaction = poolPromise.transaction();
        transaction.begin(err => {
            // ... error checks

            let rolledBack = false

            transaction.on('rollback', aborted => {
                // emited with aborted === true

                rolledBack = true;
            })

            const ps = new sql.PreparedStatement(transaction)
            ps.input('newsAndUpdatesId', sql.Int)
            ps.input('categoryId', sql.Int)
            ps.input('eventStartDate', sql.DateTime)
            ps.input('eventEndDate', sql.DateTime)
            ps.input('eventName', sql.NVarChar)
            ps.input('eventDescription', sql.NVarChar)
            ps.input('updatedBy', sql.Int)
            ps.input('createdDate', sql.DateTime)
            ps.input('updatedDate', sql.DateTime)
            ps.input('createdBy', sql.Int)
            ps.prepare('update  tbl_news_and_updates set categoryId=@categoryId,eventStartDate=@eventStartDate,eventEndDate=@eventEndDate,eventName=@eventName,eventDescription=@eventDescription,updatedBy=@updatedBy,updatedDate=@updatedDate where newsAndUpdatesId =@newsAndUpdatesId', err => {


                const request = ps.execute(data, (err, result) => {




                    // ... error checks
                    if (err) {
                        logger.fatal(err);
                        return callback(err);

                    }

                    ps.unprepare(err => {
                        // ... error checks
                        if (err) {
                            if (!rolledBack) {
                                transaction.rollback(err => {
                                    // ... error checks
                                    logger.fatal(err);
                                    return callback(err);
                                })
                            }
                        } else {
                            transaction.commit(err => {

                                // ... error checks
                                return callback(undefined, result);





                            })
                        }

                    })
                })


            })
        })

    } catch (error) {
        logger.fatal(err);
        throw error;


    }
}
exports.uploadImages = (imageData) => {
    //console.log('i am checkin g here',pk);
   
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

                ps.input('imageType', sql.NVarChar)
                ps.input('imageName', sql.NVarChar)
                ps.input('interactionForumsId', sql.Int)
                ps.input('newsAndUpdatesId', sql.Int)
                ps.input('Image', sql.NVarChar)
                ps.input('updatedBy', sql.Int)
                ps.input('createdDate', sql.DateTime)
                ps.input('updatedDate', sql.DateTime)
                ps.input('createdBy', sql.Int)
                ps.prepare('insert into tbl_images (imageType,imageName,interactionForumsId,newsAndUpdatesId,Image,createdBy,updatedBy,createdDate,updatedDate)' +
                    ' values (@imageType,@imageName,@interactionForumsId,@newsAndUpdatesId,@Image,@createdBy,@updatedBy,@createdDate,@updatedDate);SELECT SCOPE_IDENTITY() AS id;', err => {
                        // insert should fail because of invalid value
                        const request = ps.execute(imageData, (err, result) => {

                            if (err) {
                               // console.log(err);
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
           // console.log(error);
            logger.fatal(err);

            throw error;
        }
    });
};

exports.getTodayHighlights = (callback) => {

    new sql.Request(poolPromise)
        // .input('id', sql.NVarChar, id)
        .execute('IntranetPortal_sp_getEmployeesTodayHighLights', (err, result) => {
            if (err) {
                logger.fatal(err);
                callback(err);
            }
            // poolPromise.close();
            // console.log(result.recordsets[0]);
            return callback(null, result.recordsets[0]);
            //return;
        })
}

exports.getUpcomingHighlights = (callback) => {

    new sql.Request(poolPromise)
        // .input('id', sql.NVarChar, id)
        .execute('IntranetPortal_sp_getEmployeesUpComingHighLights', (err, result) => {
            if (err) {
                logger.fatal(err);
                callback(err);
            }
            // poolPromise.close();
            //console.log(result.recordsets[0]);
            return callback(null, result.recordsets[0]);
            //return;
        })
}

exports.getPreviousHighlights = (callback) => {

    new sql.Request(poolPromise)
        //  .input('id', sql.NVarChar, id)
        .execute('IntranetPortal_sp_getEmployeesPreviousHighLights', (err, result) => {
            if (err) {
                logger.fatal(err);
                callback(err);
            }
            // poolPromise.close();
            //console.log(result.recordsets[0]);
            return callback(null, result.recordsets[0]);
            //return;
        })
}



exports.getRecentlyPostedDetails = (searchData, filterId, categoryId, rowStart, rowEnd) => {
   // console.log(searchData+'--'+filterId+'--'+categoryId+'--'+rowStart+'--'+rowEnd);
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('filterId', sql.Numeric, filterId)
            .input('categoryId', sql.Numeric, categoryId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getNewsAndUpdatesRecentlyPosted_copy]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }

                resolve(result.recordsets[0]);

            })
    })
};


exports.getEventsDetails = (searchData, filterId, rowStart, rowEnd) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('filterId', sql.Numeric, filterId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getNews&UpdatesEvents]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }

                resolve(result.recordsets[0]);

            })
    })
};

exports.getManagementCommunicationDetails = (searchData, filterId, rowStart, rowEnd) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('filterId', sql.Numeric, filterId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getNews&UpdatesManagementCommunications]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }

                resolve(result.recordsets[0]);

            })
    })
};

exports.getCEODetails = (searchData, filterId, rowStart, rowEnd) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('filterId', sql.Numeric, filterId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getNews&UpdatesGetCeoDesk]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }

                resolve(result.recordsets[0]);

            })
    })
};

exports.getAwardsDetails = (searchData, filterId, rowStart, rowEnd) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('filterId', sql.Numeric, filterId)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getNews&UpdatesAwards]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }

                resolve(result.recordsets[0]);

            })
    })
};

exports.getNewJoineesDetails = (searchData, filterId, rowStart, rowEnd) => {
   // console.log(searchData+'--'+filterId+'--'+rowStart+'--'+rowEnd);
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('searchData', sql.NVarChar, searchData)
            .input('rowStart', sql.Numeric, rowStart)
            .input('rowEnd', sql.Numeric, rowEnd)
            .execute('[dbo].[IntranetPortal_sp_getNewJoinees]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }

                resolve(result.recordsets[0]);

            })
    })
};


exports.getNewsAndUpdatesFilter = () => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise).query('select * from tbl_static_newsAndUpdatesFilter', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }

            resolve(result.recordsets[0]);

        })
    })
};

exports.deletePostedImage = (id) => {
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

                ps.input('imageID', sql.Int)
                ps.prepare('delete from  tbl_images where imageId= @imageID', err => {
                    // insert should fail because of invalid value
                    const request = ps.execute({ imageID: id }, (err, result) => {
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


exports.getCalendarInfo = (data) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('date', sql.NVarChar, data)
            .execute('[dbo].[IntranetPortal_sp_calenderDetails]', (err, result) => {
                if (err) {
                    logger.fatal(err);
                    reject(err);
                }
                // poolPromise.close();
                resolve(result.recordsets[0]);

            })
    })
};

exports.getEmailDetailsForOrgData = () => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise).execute('[dbo].[IntranetPortal_sp_getactiveEmployeesDetails]', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }
            // poolPromise.close();
            resolve(result.recordsets[0]);

        })
    })
};

exports.getRecentlyPostedDetialsByID = (id) => {
    return new Promise((resolve, reject) => {
       // console.log(id);
        new sql.Request(poolPromise).input('newsAndUpdatesId', sql.NVarChar, id).execute('[dbo].[IntranetPortal_sp_getNews&UpdatesRecentlyPostedByID]', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }
            // poolPromise.close();
            resolve(result.recordsets[0]);

        })
    })
};

exports.getEventsDetialsByID = (id) => {
    return new Promise((resolve, reject) => {
       // console.log(id);
        new sql.Request(poolPromise).input('newsAndUpdatesId', sql.NVarChar, id).execute('[dbo].[IntranetPortal_sp_getNews&UpdatesEventsByID]', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }
            // poolPromise.close();
            resolve(result.recordsets[0]);

        })
    })
};

exports.getManagementCommunicationDetialsByID = (id) => {
    return new Promise((resolve, reject) => {
        //console.log(id);
        new sql.Request(poolPromise).input('newsAndUpdatesId', sql.NVarChar, id).execute('[dbo].[IntranetPortal_sp_getNews&UpdatesManagementCommunicaionsByID]', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }
            // poolPromise.close();
            resolve(result.recordsets[0]);

        })
    })
};

exports.getAwardsDetialsByID = (id) => {
    return new Promise((resolve, reject) => {
       // console.log(id);
        new sql.Request(poolPromise).input('newsAndUpdatesId', sql.NVarChar, id).execute('[dbo].[IntranetPortal_sp_getNews&UpdatesAwardsByID]', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }
            // poolPromise.close();
            resolve(result.recordsets[0]);

        })
    })
};

exports.saveIndustryNews = (data) => {
    //null check and insert if id is null else update

    return new Promise((resolve, reject) => {
        const transaction = poolPromise.transaction();
        transaction.begin(err => {
            // ... error checks

            let rolledBack = false

            transaction.on('rollback', aborted => {
                // emited with aborted === true

                rolledBack = true
            })

            const request = new sql.Request(transaction)
                .input('sourceId', sql.NVarChar, data.sourceId)
                .input('sourceName', sql.NVarChar, data.sourceName)
                .input('author', sql.NVarChar, data.author)
                .input('title', sql.NVarChar, data.title)
                .input('description', sql.NVarChar, data.description)
                .input('url', sql.NVarChar, data.url)
                .input('urlToImage', sql.NVarChar, data.urlToImage)
                .input('publishedAt', sql.NVarChar, data.publishedAt)
                .input('content', sql.NVarChar, data.content)
                .input('creationDate', sql.DateTime, new Date())
                .input('apiId', sql.Int, data.apiId)
                .query('insert into tbl_industry_news (sourceId,sourceName,author,title,description,url,urlToImage,publishedAt,content,creationDate,apiId)' +
                    ' values (@sourceId,@sourceName,@author,@title,@description,@url,@urlToImage,@publishedAt,@content,@creationDate,@apiId);SELECT SCOPE_IDENTITY() AS id;', (err, result) => {

                        if (err) {
                           // console.log(err);
                            reject(err);
                        }

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
                            });
                        };
                    });
        });
    });
};

exports.getIndustryNews = (apiId) => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise)
            .input('apiId', sql.Int, apiId)
            .execute('[dbo].[IntranetPortal_sp_getIndustryNews]', (err, result) => {
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

exports.getIndustryNewsFilter = () => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise).query('select * from tbl_industry_news_api_details', (err, result) => {
            if (err) {
                logger.fatal(err);
                reject(err);
            }

            resolve(result.recordsets[0]);

        })
    })
};
//module.exports = { getSubMenu, getCategory, postAnUpdate, uploadImages, getTodayHighlights, getUpcomingHighlights, getPreviousHighlights, getRecentlyPostedDetails, getEventsDetails, getManagementCommunicationDetails, getAwardsDetails, getNewJoineesDetails, getNewsAndUpdatesFilter, deletePostedImage, updateThePost ,getCalendarInfo,getEmailDetailsForOrgData}