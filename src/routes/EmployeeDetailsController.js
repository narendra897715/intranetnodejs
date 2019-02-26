var express = require('express');
var router = express.Router();

var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('controller');

var EmployeeDetailsService = require('./../service/EmployeeDetailsService');

router.post('/getEmployeeDetails', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchEmployeeDetails(req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});


router.post('/getEmployeeDetailsById', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchEmployeeDetailsById(req.body.employeeId);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.get('/getEmployeeDetailsWithToken', async (req, res) => {
    try {
          console.log(req.header('token'));
        var data = await EmployeeDetailsService.fetchEmployeeDetailsWithToken(req.header('token'));
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/getEmployeeDetailsDropDown', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchEmployeeDetailsDropDown(req.body);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/getAppreciations', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchAllAppreciations(req.body);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});
router.post('/getAppreciationsById', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchAppreciationsId(req.body.employeeId);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/sendAppreciations', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.sendAppreciations(req.body);
        res.json('Appreciations sent successfully.');
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});
router.get('/employeeSorting', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.employeeSortingDropDown();
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/projectsList', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.getProjectsList(req.body);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/employeeSiloView', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchSiloViewById(req.body.employeeId);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.get('/domainList', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchDomainList();
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});

router.post('/designationList', async (req, res) => {
    try {

        var data = await EmployeeDetailsService.fetchDesignationList(req.body.domainId);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});


module.exports = router;

