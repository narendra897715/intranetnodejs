var InteractionForumsDAO = require('../dao/InteractionForumsDAO');
var NewsAndUpdatesDAO = require('../dao/NewsAndUpdatesDAO');
var { convertFromStringToDate, convertFromObjToTimestamp, convertFromMilliToDate } = require('./../utils/date/DateFormat');
var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('error');
exports.getInteractionForumsTrendingData = async (data) => {
    try {
        var pageNo = 0;
        var startPos = 0;
        var pagesCount = 0;
        var rowCount = 0;
        var pageSize = 0;
        var loginId = null;
        loginId = data.employeeId;
        pageNo = data.pageNo;
        pageSize = data.pageSize;
        //get STart Position to begin the report
        startPos = (pageNo * pageSize) - pageSize;
        //get records to display
        var data = await InteractionForumsDAO.getInteractionForumsTrending(data.search, data.categoryId, startPos + 1, pageSize + startPos);
        if (data.length != 0) {
            var singleObj = data[0];
            rowCount = singleObj.totalCount;
        }
        pagesCount = Math.ceil(rowCount / pageSize);

        if (pagesCount == 0 || rowCount % pageSize < 0) {
            pagesCount++;
            //keep List, pageCount in request attributes
        }
        var finalData = await ObjectConversion(data, loginId);
        // var finalObj = [];

        // for(var i=0;i<finalData.length;i++){
        //     if(finalData[i].categoryId===7||finalData[i].categoryName==="Polling"){
        //         var mainObj = {};
        //         mainObj.polling = finalData[i];
        //         finalObj.push(mainObj);
        //     }else{
        //         var mainObj = {};
        //         mainObj.normal = finalData[i];
        //         finalObj.push(mainObj);
        //     }
        // }
        //  var finalData = await ObjectConversion(data);

        var obj = {};
        obj.result = finalData;
        obj.pages = pagesCount;
        obj.rowCount = rowCount;

        return obj;
    } catch (error) {
        // console.log(error);
        logger.fatal(error);
        throw new Error(error);
        // console.log(error.message);
    }
}

var getPaginationDatat = async (data) => {
    return new Promise((resolve, reject) => {

    })
}


var ObjectConversion = async (data, loginId) => {
    // return new Promise((resolve, reject) => {
    var finalData = [];
    //modify the object to get in the desired form 
    const unique = [...new Set(data.map((item) => item.interactionForumsId))];
    for (var i = 0; i < unique.length; i++) {
        var filetredData = data.filter((res) => res.interactionForumsId === unique[i]);
        //console.log(filetredData); 
        //finalData.push(filetredData); 
        var mainObj = {};
        var subObject = [];
        for (var x = 0; x < filetredData.length; x++) {
            mainObj.interactionForumsId = filetredData[x].interactionForumsId;
            mainObj.newsAndUpdatesId = filetredData[x].newsAndUpdatesId;
            mainObj.categoryId = filetredData[x].categoryId;
            mainObj.categoryName = filetredData[x].categoryName;
            mainObj.eventName = filetredData[x].eventName;
            mainObj.colourCode = filetredData[x].colourCode;
            mainObj.eventDescription = filetredData[x].eventDescription;
            mainObj.eventStartDate = convertFromObjToTimestamp(filetredData[x].eventStartDate);
            mainObj.eventEndDate = convertFromObjToTimestamp(filetredData[x].eventEndDate);
            mainObj.createdBy = filetredData[x].createdBy;
            mainObj.createdByName = filetredData[x].createdByName;
            mainObj.updatedBy = filetredData[x].updatedBy;
            mainObj.updatedByName = filetredData[x].updatedByName;
            mainObj.email = filetredData[x].email;
            mainObj.skype = filetredData[x].skype;
            mainObj.mail = filetredData[x].mail;
            mainObj.totalPollingCount = filetredData[x].totalPollingCount;
            mainObj.totalResponsesCount = filetredData[x].totalResponsesCount;
            mainObj.activeEmployeesCount = filetredData[x].activeEmployeesCount;
            mainObj.createdDate = convertFromObjToTimestamp(filetredData[x].createdDate);
            //console.log(`type of ${typeof filetredData[x].createdDate}`,convertFromObjToTimestamp(filetredData[x].createdDate));
            mainObj.updatedDate = convertFromObjToTimestamp(filetredData[x].updatedDate)
            mainObj.enteredTheDiscussion = filetredData[x].enteredTheDiscussion;
            //check for image data available or not
            if (filetredData[x].imageId != 0) {
                var newObj = {};
                newObj.imageId = filetredData[x].imageId;
                newObj.imageName = filetredData[x].imageName;
                newObj.imageType = filetredData[x].imageType;
                newObj.image = filetredData[x].image;
                subObject.push(newObj);
            }
            //check for CLD and poling
            if (filetredData[x].categoryId === 7 || filetredData[x].categoryName === "Polling") {
                mainObj.pollingOptions = await InteractionForumsDAO.getCommentsPollingInfo(filetredData[x].interactionForumsId, loginId);
                if (mainObj.pollingOptions.length > 0) {

                    mainObj.overallPercentage = mainObj.pollingOptions[0].overallPercentage;
                }
            } else {
                CLDData = await InteractionForumsDAO.getCommentsAndLikesCount(filetredData[x].interactionForumsId, loginId);
                if (CLDData.length < 0) {
                    mainObj.CLDData = [{
                        "commentsCount": null,
                        "likesCount": null,
                        "dislikesCount": null,
                        "optionOptedId": null
                    }];
                } else {
                    mainObj.CLDData = CLDData;
                }
            }

        }
        mainObj.imageData = subObject;
        finalData.push(mainObj);
    }
    return (finalData);
    // })
};

exports.getCategoryDropDownList = async () => {
    return await InteractionForumsDAO.getCategoryDropDown();
}
exports.getCategoryDropDownListSelection = async () => {
    return await InteractionForumsDAO.getCategoryDropDownSelection();
}
exports.getSubMenuList = async () => {
    return await InteractionForumsDAO.getSubMenu();
}

exports.getInteractionForumsNewlyAddedData = async (data) => {
    try {
        var pageNo = 0;
        var startPos = 0;
        var pagesCount = 0;
        var rowCount = 0;
        var pageSize = 0;

        pageNo = data.pageNo;
        pageSize = data.pageSize;
        var loginId = null;
        loginId = data.employeeId;
        //get STart Position to begin the report
        startPos = (pageNo * pageSize) - pageSize;
        //get records to display
        var data = await InteractionForumsDAO.getInteractionForumsNewlyAdded(data.search, data.categoryId, data.filterId, startPos + 1, pageSize + startPos);
        if (data.length != 0) {
            var singleObj = data[0];
            rowCount = singleObj.totalCount;
        }
        pagesCount = Math.ceil(rowCount / pageSize);

        if (pagesCount == 0 || rowCount % pageSize < 0) {
            pagesCount++;
            //keep List, pageCount in request attributes
        }
        var finalData = await ObjectConversion(data, loginId);
        // var finalObj = [];

        // for(var i=0;i<finalData.length;i++){
        //     if(finalData[i].categoryId===7||finalData[i].categoryName==="Polling"){
        //         var mainObj = {};
        //         mainObj.polling = finalData[i];
        //         finalObj.push(mainObj);
        //     }else{
        //         var mainObj = {};
        //         mainObj.normal = finalData[i];
        //         finalObj.push(mainObj);
        //     }
        // }
        // var finalData = await ObjectConversion(data);

        var obj = {};
        obj.result = finalData;
        obj.pages = pagesCount;
        obj.rowCount = rowCount;

        return obj;
    } catch (error) {
        // console.log(error);
        logger.fatal(error);
        throw new Error(error);
        // console.log(error.message);
    }
}


exports.getInteractionForumsMostCommentedData = async (data) => {
    try {
        var pageNo = 0;
        var startPos = 0;
        var pagesCount = 0;
        var rowCount = 0;
        var pageSize = 0;

        pageNo = data.pageNo;
        pageSize = data.pageSize;
        var loginId = null;
        loginId = data.employeeId;
        //get STart Position to begin the report
        startPos = (pageNo * pageSize) - pageSize;
        //get records to display
        var data = await InteractionForumsDAO.getInteractionForumsMostCommentedAdded(data.search, data.categoryId, startPos + 1, pageSize + startPos);
        if (data.length != 0) {
            var singleObj = data[0];
            rowCount = singleObj.totalCount;
        }
        pagesCount = Math.ceil(rowCount / pageSize);

        if (pagesCount == 0 || rowCount % pageSize < 0) {
            pagesCount++;
            //keep List, pageCount in request attributes
        }
        var finalData = await ObjectConversion(data, loginId);
        // var finalObj = [];

        // for(var i=0;i<finalData.length;i++){
        //     if(finalData[i].categoryId===7||finalData[i].categoryName==="Polling"){
        //         var mainObj = {};
        //         mainObj.polling = finalData[i];
        //         finalObj.push(mainObj);
        //     }else{
        //         var mainObj = {};
        //         mainObj.normal = finalData[i];
        //         finalObj.push(mainObj);
        //     }
        // }
        //var finalData = await ObjectConversion(data);

        var obj = {};
        obj.result = finalData;
        obj.pages = pagesCount;
        obj.rowCount = rowCount;

        return obj;
    } catch (error) {
        // console.log(error);
        logger.fatal(error);
        throw new Error(error);
        // console.log(error.message);
    }
}

exports.getInteractionForumsDataByIdService = async (data) => {
    try {
        var result = await InteractionForumsDAO.getInteractionForumsDataById(data.interactionForumsId, data.newsAndUpdatesId);
        var finalData = await ObjectConversion(result, data.employeeId);
        // if (data.categoryId === 7 || data.categoryName === 'Polling') {
        //     // var pollingEmployeeInfo = await InteractionForumsDAO.getPollingEmployeeInfo(data.interactionForumsId)
        //     // if (pollingEmployeeInfo !== null) {
        //     //     finalData[0].pollingEmployeeInfo = pollingEmployeeInfo;
        //     // }
        // } else {
        var commentsData = await InteractionForumsDAO.getInteractionForumsComments(finalData[0].interactionForumsId)
        if (commentsData !== null) {
            finalData[0].commentsData = commentsData;
        }
        //  }

        //should comments data for the final obj
        return finalData;
    } catch (error) {
        // console.log(error);
        logger.fatal(error);
        throw new Error(error);
        // console.log(error.message);
    }

}

exports.startDiscussionService = async (data) => {
    try {
        //console.log(data.interactionForumsId);
        var currentDate = new Date(Date.now());
        data.eventStartDate = convertFromMilliToDate(data.eventStartDate);
        data.eventEndDate = convertFromMilliToDate(data.eventEndDate);
        data.createdDate = currentDate;
        data.updatedDate = currentDate;
        if (data.interactionForumsId == null) {

            var result = await InteractionForumsDAO.startDiscussion(data);
            //save polling options if category id 7 or category name is polling
            if (data.categoryId === 7 || data.categoryName === 'Polling') {
                for (var i = 0; i < data.pollingOptions.length; i++) {
                    data.pollingOptions[i].interactionForumsId = result.recordset[0].id;
                    data.pollingOptions[i].createdDate = currentDate;
                    data.pollingOptions[i].updatedDate = currentDate;


                    await InteractionForumsDAO.savePollingOptions(data.pollingOptions[i])



                    //console.log('inside for loop',data.imageData[i].createdDate);


                }
            }
            //iterate the loop to upload images
            for (var i = 0; i < data.imageData.length; i++) {
                data.imageData[i].interactionForumsId = result.recordset[0].id;
                data.imageData[i].createdDate = currentDate;
                data.imageData[i].updatedDate = currentDate;
                await InteractionForumsDAO.uploadImages(data.imageData[i])

                //console.log('inside for loop',data.imageData[i].createdDate);


            }
            //send email code for the org about post
            // sendEmailForPost(data.eventName);
            return 'Posted successfully';




        } else {
            if (data.newsAndUpdatesId == null) {

                var result = await InteractionForumsDAO.updateTheDiscussion(data)
            } else {
                NewsAndUpdatesDAO.updateThePost(data, (err, result) => {
                    if (err) {

                        logger.fatal(error);
                    }
                });
            }
            //update polling options
            if (data.categoryId === 7 || data.categoryName === 'Polling') {
                for (var i = 0; i < data.pollingOptions.length; i++) {
                    data.pollingOptions[i].interactionForumsId = data.interactionForumsId;
                    data.pollingOptions[i].updatedDate = currentDate;
                    data.pollingOptions[i].updatedBy = data.updatedBy;
                    
                    if (data.pollingOptions[i].optionId == null) {
                        data.pollingOptions[i].createdDate = currentDate;
                        await InteractionForumsDAO.savePollingOptions(data.pollingOptions[i]);
                    } else {

                        await InteractionForumsDAO.updatePollingOptions(data.pollingOptions[i])
                    }



                    //console.log('inside for loop',data.imageData[i].createdDate);


                }
            }

            return 'Updated successfully';


        }
    } catch (error) {
        // console.log(error);
        logger.fatal(error);
        throw new Error(error);
        // console.log(error.message);
    }

};

exports.uploadNewImage = async (data) => {
    try {
        // return new Promise((resolve, reject) => {
        var currentDate = new Date(Date.now());
        data.createdDate = currentDate;
        data.updatedDate = currentDate;

        for (var i = 0; i < data.imageData.length; i++) {
            data.imageData[i].interactionForumsId = data.interactionForumsId;
            data.imageData[i].createdDate = currentDate;
            data.imageData[i].updatedDate = currentDate;
            await InteractionForumsDAO.uploadImages(data.imageData[i]);

            //console.log('inside for loop',data.imageData[i].createdDate);


        }
        //send email code for the org about post
        // sendEmailForPost(data.eventName);
        return 'Posted successfully';
    } catch (error) {
        // console.log(error);
        logger.fatal(error);
        throw new Error(error);
        // console.log(error.message);
    }


    //  })

}



exports.savePollingSuggestionsService = async (data) => {
    try {
        var currentDate = new Date(Date.now());
        data.suggestedDate = currentDate;


        var result = await InteractionForumsDAO.savePollingSuggestions(data);

        if (result != null) {
            return 'Suggestion sent successfully';
        } else {
            return 'Failed to save';
        }

    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }

}

exports.saveOrUpdatePollingOption = async (data) => {
    try {
        var currentDate = new Date(Date.now());
        data.eventStartDate = convertFromMilliToDate(data.eventStartDate);
        data.eventEndDate = convertFromMilliToDate(data.eventEndDate);
        data.createdDate = currentDate;
        data.updatedDate = currentDate;
        if (data.optionOptedId == null) {
            var result = await InteractionForumsDAO.savePollingChoice(data);

            if (result != null) {
                return 'Option saved successfully';
            } else {
                return 'Failed to save';
            }
        } else {
            var result = await InteractionForumsDAO.updatePollingChoice(data);
            if (result != null) {
                return 'Option saved successfully';
            } else {
                return 'Failed to save';
            }
        }
    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }

}

exports.likeOrDislike = async (data) => {
    try {
        var result = await InteractionForumsDAO.likeOrDislike(data);
        if (result != null && data.liked === true) {
            return 'Liked';
        } else if (result != null && data.liked === false) {
            return 'Disliked';
        }
    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }
}

exports.comments = async (data) => {
    try {
        var currentDate = new Date(Date.now());
        data.createdDate = currentDate;
        data.updatedDate = currentDate;
        var result = await InteractionForumsDAO.comments(data);
        return result;
    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }
}

exports.getCommentesDataById = async (data) => {
    try {
        var commentsData = await InteractionForumsDAO.getInteractionForumsComments(data.interactionForumsId)
        return commentsData;
    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }
}
exports.pollingEmployeeInfo = async (data) => {
    try {
        var pollingEmployeeInfo = await InteractionForumsDAO.getPollingEmployeeInfo(data);
        for (var i = 0; i < pollingEmployeeInfo.length; i++) {
            pollingEmployeeInfo[i].createdDate = convertFromObjToTimestamp(pollingEmployeeInfo[i].createdDate);
        }
        return pollingEmployeeInfo;

    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }
}
exports.startOrJoinDiscussion = async (data) => {
    try {
        var subData = {};
        subData.newsAndUpdatesId = data.newsAndUpdatesId;
        var currentDate = new Date(Date.now());
        //data.eventStartDate = convertFromMilliToDate(data.eventStartDate);
        // data.eventEndDate = convertFromMilliToDate(data.eventEndDate);
        subData.createdDate = currentDate;
        subData.updatedDate = currentDate;
        subData.createdBy = data.createdBy;
        subData.updatedBy = data.updatedBy;
        var subSet = {};
        subSet.employeeId = data.employeeId;
        subSet.newsAndUpdatesId = data.newsAndUpdatesId;
        if (data.interactionForumsId == null) {
            //save the record and fetch the data from same PK returned
            //subSet.interactionForumsId=result.recordset[0].id;
            try {

                var finalResult = await exports.getInteractionForumsDataByIdService(subSet);
                return finalResult;
            } catch (error) {
                var result = await InteractionForumsDAO.startDiscussion(subData);
                var finalResult = await exports.getInteractionForumsDataByIdService(subSet);
                return finalResult;
            }
        } else {
            //get the data from news and updates id also
            var finalResult = await exports.getInteractionForumsDataByIdService(subSet);
            return finalResult;
        }
    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }
}

exports.deleteFromOption = async (data) => {
    return await InteractionForumsDAO.deleteOption(data);
};


exports.fetchPollingInfoById = async (data) => {
    try {

        var data = await InteractionForumsDAO.pollingExcelDownload(data.interactionForumsId);
        return data;

    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }

};

exports.fetchPollingSuggestions = async (data) => {
    try {

        var data = await InteractionForumsDAO.pollingSuggestions(data.interactionForumsId);
        return data;

    } catch (error) {
        logger.fatal(error);
        throw new Error(error);
    }

};