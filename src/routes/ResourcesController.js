var express = require('express');
var router = express.Router();

var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('controller');

var ResourcesService = require('../service/ResourcesService');



router.post('/getResourcesPolicies', async (req, res) => {
    try {

        var data = await ResourcesService.getResourcesPoliciesData(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.post('/getResourcesForms', async (req, res) => {
    try {

        var data = await ResourcesService.getResourcesFormsData(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.post('/getResourcesL&D', async (req, res) => {
    try {

        var data = await ResourcesService.getResourcesLD(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.get('/getCategoryDropDown', async (req, res) => {
    try {

        var data = await ResourcesService.getCategoryDropDown();
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.get('/getResourcesCategory', async (req, res) => {
    try {

        var data = await ResourcesService.getResourcesCategory();
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});


router.post('/getFileByID', async (req, res) => {
    try {

        var data = await ResourcesService.getFileData(req.body);
        res.send(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});


router.post('/uploadFile', async (req, res) => {
    try {
        var data = await ResourcesService.uploadNewFile(req.body);
        res.json(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.post('/deleteFile', async (req, res) => {
    try {

        var data = await ResourcesService.deleteFileById(req.body);
        res.json(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});

router.post('/getUserApps', async (req, res) => {
    try {
        var data = await ResourcesService.getUserApps(req.body);
        res.json(data);
    } catch (error) {
        res.status(404).json(`${error}`);
        logger.fatal(error);
    }
});
module.exports = router;