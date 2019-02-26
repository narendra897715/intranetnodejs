var express = require('express');
var router = express.Router();
var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('controller');

var InteractionForumsService = require('../service/InteractionForumsService');

router.post('/getInteractionForumsTrendingDetails', async (req, res) => {
    try {
       // console.log(req.body);
        var data = await InteractionForumsService.getInteractionForumsTrendingData(req.body);
       // console.log(data);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});


router.get('/getCategoryDropDown', async (req, res) => {
    try {

        var data = await InteractionForumsService.getCategoryDropDownList();
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.get('/getCategoryDropDownSelection', async (req, res) => {
    try {

        var data = await InteractionForumsService.getCategoryDropDownListSelection();
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.get('/getSubMenu', async (req, res) => {
    try {

        var data = await InteractionForumsService.getSubMenuList();
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.post('/getInteractionForumsNewlyAddedDetails', async (req, res) => {
    try {
       // console.log(req.body);
        var data = await InteractionForumsService.getInteractionForumsNewlyAddedData(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});


router.post('/getInteractionForumsMostCommentedDetails', async (req, res) => {
    try {
       // console.log(req.body);
        var data = await InteractionForumsService.getInteractionForumsMostCommentedData(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.post('/getInteractionForumsDataByID', async (req, res) => {
    try {
       // console.log(req.body);
        var data = await InteractionForumsService.getInteractionForumsDataByIdService(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});
 
router.post('/getCommentsDataById',async(req,res)=>{
    try{
        var data = await InteractionForumsService.getCommentesDataById(req.body);
        res.send(data);
    }catch(err){
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
})

router.post('/postAnDiscussion', async (req, res) => {

    try {
        var result = await InteractionForumsService.startDiscussionService(req.body)
        res.json(result);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
        // res.status(400).send('failed');
    }
});


router.post('/uploadImageToExistingDiscussion', async (req, res) => {

    try {
       // console.log(req.body);
        var result = await InteractionForumsService.uploadNewImage(req.body)


        res.json(result);



    } catch (err) {
       // console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/savePollingOption', async (req, res) => {

    try {
        var result = await InteractionForumsService.saveOrUpdatePollingOption(req.body)
        res.json(result);
    } catch (err) {
       // console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/savePollingSuggestion', async (req, res) => {

    try {
        var result = await InteractionForumsService.savePollingSuggestionsService(req.body)
        res.json(result);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/getPollingEmployeeInfo', async (req, res) => {

    try {

        var result = await InteractionForumsService.pollingEmployeeInfo(req.body);

        res.json(result);
    } catch (err) {
      //  console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/likeOrDislike', async (req, res) => {

    try {
        var result = await InteractionForumsService.likeOrDislike(req.body);
        res.json(req.body);

    } catch (err) {
      //  console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/comments', async(req, res)=>{
    try {
        var result = await InteractionForumsService.comments(req.body);
        io.emit('newComment', req.body.interactionForumsId);
        res.json(req.body);

    } catch (err) {
       // console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/startOrJoinDiscussion', async (req, res) => {

    try {
        var result = await InteractionForumsService.startOrJoinDiscussion(req.body);
        res.json(result);

    } catch (err) {
       // console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});
router.post('/deleteOption', async (req, res) => {

    try {
        var result = await InteractionForumsService.deleteFromOption(req.body);
        res.json("Option deleted successfully.");

    } catch (err) {
      //  console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});
router.post('/pollingExcelDownload', async (req, res) => {
    try {

        var data = await InteractionForumsService.fetchPollingInfoById(req.body);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/pollingSuggestions', async (req, res) => {
    try {

        var data = await InteractionForumsService.fetchPollingSuggestions(req.body);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});
module.exports = router;
