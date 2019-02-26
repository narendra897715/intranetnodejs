const { sql, poolPromise } = require('./../utils/db/connpool');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');


var getEmailProperties = () => {
    return new Promise((resolve, reject) => {
        new sql.Request(poolPromise).query('select * from tbl_system_parameters', (err, result) => {
            if (err) {
               // console.log('inside data fetch method');
                console.log(err);
                reject(err);
            }
            // poolPromise.close();
            resolve(result.recordset[0]);
            //callback(result.recordsets[0]);
            //return;
        })
    })
}


var prepareMessageBody = (body) => {
    return new Promise((resolve, reject) => {
        var messageBody = {};
        fs.readFile(path.join(__dirname, "./SampleMail.html"), { encoding: "utf-8" }, (err, html) => {
            if (err) { console.log(err); }
            if (!err) { messageBody.html = html.replace("###MSG###", body); }
            resolve(messageBody);
        });
    })
}
exports.sendMail = async (to, subject, body) => {
    //console.log(to + subject + body)
    var emailProperties = await getEmailProperties();
   // var messageBody = await prepareMessageBody(body);
    //console.log('html body',messageBody)
    let transporter = nodemailer.createTransport({
        host: emailProperties.smtpServerIp,
        port: emailProperties.smtpPort,
        secure: false, // true for 465, false for other ports
        auth: {
            user: emailProperties.itSupportEmail, // generated ethereal user
            pass: emailProperties.itSupportPassword // generated ethereal password
        }
    });

    var mailOptions = {
        from: emailProperties.itSupportEmail, // sender address
        to:  process.env.EMAIL_ID, // list of receivers
        subject: subject, // Subject line
        // text: body // plain text body
        html: body // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
           // return 
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    return emailProperties;

    //console.log(emailProperties);
}




// setTimeout(()=>{

//     sendMail('hi','hi','hi');
// },4000)


//module.exports = { getEmailProperties, sendMail };
// var email = new SendMail();

//  await email.sendMail('esf','aed','awd').then((emailProperties)=>{

// });