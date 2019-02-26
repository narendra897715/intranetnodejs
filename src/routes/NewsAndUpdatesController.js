var express = require('express');
var router = express.Router();
// const redis = require('redis');
// const client = redis.createClient({host: 'redis'});

var { log4js } = require('./../utils/log-conf/logger');
var logger = log4js.getLogger('controller');
var { getSubMenu, getCategory, postAnUpdate } = require('./../dao/NewsAndUpdatesDAO');
var NewsAndUpdatesService = require('./../service/NewsAndUpdatesService');

//var { uploadImages, getTodayHighlights } = require('./../dao/NewsAndUpdatesDAO');

var SendMail = require('./../mail/SendMail');

var EmailTemplate = require('./../mail/EmailTemplate');

/* GET home page. */
router.get('/getSubMenu', (req, res) => {
    NewsAndUpdatesService.fetchSubMenu((err, data) => {
        if (err) {

            logger.fatal(err);
            res.status(404).json(`${err}`);
        }
        //console.log(data);
        res.send(data);
    });
});
//adding a new service
router.post('/getCategoryList', (req, res) => {
    NewsAndUpdatesService.fetchCategoryList(req.body,(err, data) => {
        if (err) {

            logger.fatal(err);
            res.status(404).json(`${err}`);
        }
        res.status(200).send(data);
    });
});

router.get('/getCategoryListFilter', (req, res) => {
    NewsAndUpdatesService.fetchCategoryListFilter((err, data) => {
        if (err) {

            logger.fatal(err);
            res.status(404).json(`${err}`);
        }
        res.status(200).send(data);
    });
});

router.post('/postAnUpdate', (req, res) => {

    try {
        NewsAndUpdatesService.postAnUpdateService(req.body, (err, result) => {
            if (err) {
                logger.fatal(err);
                res.status(404).json(`${err}`);
                // res.status(400).send('some error occured');
            } else {
                res.json(result);
            }

        });
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
        // res.status(400).send('failed');
    }
});


router.post('/uploadImageToExistingPost', async (req, res) => {
    console.log('imageData',req.body.imageData.length);
    try {
       var data= await NewsAndUpdatesService.uploadNewImage(req.body);
       res.json(data);

    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
});



router.get('/eventsInfo', (req, res) => {
    NewsAndUpdatesService.getEventsInfo((err, data) => {
        if (err) {
            logger.fatal(err);
            res.status(404).json(`${err}`);
        }
        res.send(data);
    });
});


router.post('/industryNews', async (req, res) => {

    try {

        var data = await NewsAndUpdatesService.getIndustryNewsInfo(req.body);
        res.send(data);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }


});

router.post('/all', (req, res) => {
    // var key = 'random';
    // client.get(key, (err, result) => {
    //     if(err){
    //         console.log(err);
    //     }
    //     if (result) {
    //         res.send(result);
    //     } else {
    //         NewsAndUpdatesService.fetchRecentlyPostedDetails(req.body).then((data) => {
    //             //const unique = [...new Set(data.map((item) => item))];
    //             client.setex(key, process.env.REDIS_DELAY, JSON.stringify(data));
    //             res.send(data);
    //             // asdas 
    //         }).catch((err) => {
    //             logger.fatal(err);
    //             res.status(404).json(`${err}`);
    //         })
    //     }
    // });

    try {
        NewsAndUpdatesService.fetchRecentlyPostedDetails(req.body).then((data) => {
            //const unique = [...new Set(data.map((item) => item))];
            res.send(data);
            // asdas 
        })
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);

    }



});

router.post('/recentlyPostedDetailsByID', (req, res) => {
    //    var data = await  getIndustryNewsInfo();
    //    res.send(data);
    try {
        NewsAndUpdatesService.fetchRecentlyPosteddDetailsByID(req.body.newsAndUpdatesId).then((data) => {
            //const unique = [...new Set(data.map((item) => item))];
            res.send(data);
            // asdas 
        })
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);

    }

});

router.post('/eventDetails', (req, res) => {

    NewsAndUpdatesService.fetchEventDetails(req.body).then((data) => {
        // const unique = [...new Set(data.map((item) => item))];
        res.send(data);
        // asdas 
    }).catch((err) => {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    })
});

router.post('/managementCommunicationsDetails', (req, res) => {

    NewsAndUpdatesService.fetchManagementCommunicationDetails(req.body).then((data) => {
        // const unique = [...new Set(data.map((item) => item))];
        res.send(data);
        // asdas 
    }).catch((err) => {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    })
});

router.post('/ceoDesk', (req, res) => {

    NewsAndUpdatesService.fetchCEODetails(req.body).then((data) => {
        // const unique = [...new Set(data.map((item) => item))];
        res.send(data);
        // asdas 
    }).catch((err) => {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    })
});

router.post('/awardsDetails', (req, res) => {

    NewsAndUpdatesService.fetchAwardsDetails(req.body).then((data) => {
        // const unique = [...new Set(data.map((item) => item))];
        res.send(data);
        // asdas 
    }).catch((err) => {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    })
});

router.post('/newJoineeDetails', (req, res) => {

    NewsAndUpdatesService.fetchNewJoineesDetails(req.body).then((data) => {
        // const unique = [...new Set(data.map((item) => item))];
        res.send(data);
        // asdas 
    }).catch((err) => {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    })
});


router.get('/newsAndUpdatesFilter', (req, res) => {

    NewsAndUpdatesService.fetchNewsAndUpdatesFilter().then((data) => {
        // const unique = [...new Set(data.map((item) => item))];
        res.send(data);
        // asdas 
    }).catch((err) => {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    })
});

router.post('/sendWishes', async (req, res) => {
    try {
        var template = null;
        var subject = null;
       // console.log(req.body);
        if (req.body.yearsOfExperience === null) {
            subject = "Birthday wishes from " + req.body.firstName;
            template = EmailTemplate.sendBirthdayWishesPic(req.body);
        } else {
            subject = 'Work Anniversary wishes from ' +req.body.firstName;
            template =  EmailTemplate.sendWorkAnniversaryWishesPic(req.body);
        }
        SendMail.sendMail(req.body.email, subject, template).then((data) => {
            res.json("Email sent successfully");
        });
    } catch (error) {
        console.log(error);
    }
    // var data = emailSend.sendMail('','','');
});

router.post('/deleteImage', async (req, res) => {
    try {
        var result = await NewsAndUpdatesService.deleteImagePosted(req.body.imageId)

        res.send({ "imageId": req.body.imageId, "status": "Deleted successfully" });
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
})

router.post('/calendarDetails', async (req, res) => {
    try {
        const result = await NewsAndUpdatesService.fetchCalendarInfo(req.body.date);
        res.send(result);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
})

router.get('/industryNewsFilter', async (req, res) => {
    try {
        const result = await NewsAndUpdatesService.fetchIndustryNewsFilter();
        res.send(result);
    } catch (err) {
        logger.fatal(err);
        res.status(404).json(`${err}`);
    }
})

module.exports = router;