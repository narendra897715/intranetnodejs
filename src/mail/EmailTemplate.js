

exports.sendBirthdayWishes = (data) => {

    var template = "<html><body><label style='font-family : Calibri; font-size:10px;'>Hi " + data.employeeName + ","
        + "<br/><br/>Wish you a very happy birthday. Have a great year ahead."

        + "<br/><br/>Regards" + "<br/>Merilytics.</label></body></html>"
        + "<label style='font-family : Arial; font-size:10px;'><font color='#585858'><br/><br/>The information contained in this e-mail is confidential "
        + "and proprietary to Merilytics Inc. and/or its affiliates."
        + "The information transmitted herewith is intended only for use by the individual or entity to which it is addressed."
        + " If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, "
        + "dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited."
        + "If you have received this communication in error, please contact the sender and delete the material from your computer.</font></label></body></html>";
    return template;


}

exports.sendWorkAnniversaryWishes = (data) => {
    var years = data.yearsOfExperience > 1 ? 'years' : 'year'
    var template = "<html><body><label style='font-family : Calibri; font-size:10px;'>Hi " + data.employeeName + ","
        + "<br/><br/>Congratulations for completing " + data.yearsOfExperience + " " + years + " with Merilytics."

        + "<br/><br/>Regards" + "<br/>Merilytics.</label></body></html>"
        + "<label style='font-family : Arial; font-size:10px;'><font color='#585858'><br/><br/>The information contained in this e-mail is confidential "
        + "and proprietary to Merilytics Inc. and/or its affiliates."
        + "The information transmitted herewith is intended only for use by the individual or entity to which it is addressed."
        + " If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, "
        + "dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited."
        + "If you have received this communication in error, please contact the sender and delete the material from your computer.</font></label></body></html>";
    return template;
}

exports.emailToOrgForPostUpdate = (employeeName, eventName) => {
    return `<html><body><label style='font-family : Calibri; font-size:10px;'>Hi All,
   <br/><br/> A new company update has been posted on the Intranet portal. 
   <br/><br/>Post Subject: ${eventName}.
   <br/>Post Link: <a href='http://172.16.10.51:1233/#/intranet/newsupdates/recentlyposted'>Click here</a>

    <br/><br/>Regards <br/>Merilytics.</label></body></html>
    <label style='font-family : Arial; font-size:10px;'><font color='#585858'><br/><br/>The information contained in this e-mail is confidential 
    and proprietary to Merilytics Inc. and/or its affiliates.
    The information transmitted herewith is intended only for use by the individual or entity to which it is addressed.
     If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, 
    dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited.
    If you have received this communication in error, please contact the sender and delete the material from your computer.</font></label></body></html>`
}

exports.emailForAppreciation = (employeeName, message) => {
    return `<html><body><label style='font-family : Calibri; font-size:10px;'>Hi ${employeeName},
   <br/><br/> You have been appreciated by your colleague on the Intranet Portal, please <a href='http://172.16.10.51:1233/#/intranet/newsupdates/recentlyposted'>login</a> to the portal to know more in detail. 


    <br/><br/>Regards <br/>Merilytics.</label></body></html>
    <label style='font-family : Arial; font-size:10px;'><font color='#585858'><br/><br/>The information contained in this e-mail is confidential 
    and proprietary to Merilytics Inc. and/or its affiliates.
    The information transmitted herewith is intended only for use by the individual or entity to which it is addressed.
     If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, 
    dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited.
    If you have received this communication in error, please contact the sender and delete the material from your computer.</font></label></body></html>`
}

exports.sendBirthdayWishesPic = (data) => {

    var template = `<!DOCTYPE html>
    <html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <!-- NAME: 1 COLUMN -->
        <!--[if gte mso 15]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>*|MC:SUBJECT|*</title>
        <style type="text/css">
            p {
                margin: 10px 0;
                padding: 0;
            }
    
            table {
                border-collapse: collapse;
            }
    
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                display: block;
                margin: 0;
                padding: 0;
            }
    
            img,
            a img {
                border: 0;
                height: auto;
                outline: none;
                text-decoration: none;
            }
    
            body,
            #bodyTable,
            #bodyCell {
                height: 100%;
                margin: 0;
                padding: 0;
                width: 100%;
            }
    
            .mcnPreviewText {
                display: none !important;
            }
    
            #outlook a {
                padding: 0;
            }
    
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            table {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
    
            .ReadMsgBody {
                width: 100%;
            }
    
            .ExternalClass {
                width: 100%;
            }
    
            p,
            a,
            li,
            td,
            blockquote {
                mso-line-height-rule: exactly;
            }
    
            a[href^=tel],
            a[href^=sms] {
                color: inherit;
                cursor: default;
                text-decoration: none;
            }
    
            p,
            a,
            li,
            td,
            body,
            table,
            blockquote {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
    
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass td,
            .ExternalClass div,
            .ExternalClass span,
            .ExternalClass font {
                line-height: 100%;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            #bodyCell {
                padding: 10px;
            }
    
            .templateContainer {
                max-width: 600px !important;
            }
    
            a.mcnButton {
                display: block;
            }
    
            .mcnImage {
                vertical-align: bottom;
            }
    
            .mcnTextContent {
                word-break: break-word;
            }
    
            .mcnTextContent img {
                height: auto !important;
            }
    
            .mcnDividerBlock {
                table-layout: fixed !important;
            }
    
            /*
            @tab Page
            @section Background Style
            @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
            */
    
            body,
            #bodyTable {
                /*@editable*/
                background-color: #FAFAFA;
            }
    
            /*
            @tab Page
            @section Background Style
            @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
            */
    
            #bodyCell {
                /*@editable*/
                border-top: 0;
            }
    
            /*
            @tab Page
            @section Email Border
            @tip Set the border for your email.
            */
    
            .templateContainer {
                /*@editable*/
                border: 0;
            }
    
            /*
            @tab Page
            @section Heading 1
            @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
            @style heading 1
            */
    
            h1 {
                /*@editable*/
                color: #202020;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 26px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
    
            /*
            @tab Page
            @section Heading 2
            @tip Set the styling for all second-level headings in your emails.
            @style heading 2
            */
    
            h2 {
                /*@editable*/
                color: #202020;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 22px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
    
            /*
            @tab Page
            @section Heading 3
            @tip Set the styling for all third-level headings in your emails.
            @style heading 3
            */
    
            h3 {
                /*@editable*/
                color: #202020;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 20px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
    
            /*
            @tab Page
            @section Heading 4
            @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
            @style heading 4
            */
    
            h4 {
                /*@editable*/
                color: #202020;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 18px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                letter-spacing: normal;
                /*@editable*/
                text-align: left;
            }
    
            /*
            @tab Preheader
            @section Preheader Style
            @tip Set the background color and borders for your email's preheader area.
            */
    
            #templatePreheader {
                /*@editable*/
                background-color: #FAFAFA;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
                /*@editable*/
                padding-top: 9px;
                /*@editable*/
                padding-bottom: 9px;
            }
    
            /*
            @tab Preheader
            @section Preheader Text
            @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
            */
    
            #templatePreheader .mcnTextContent,
            #templatePreheader .mcnTextContent p {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 12px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: left;
            }
    
            /*
            @tab Preheader
            @section Preheader Link
            @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
            */
    
            #templatePreheader .mcnTextContent a,
            #templatePreheader .mcnTextContent p a {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
    
            /*
            @tab Header
            @section Header Style
            @tip Set the background color and borders for your email's header area.
            */
    
            #templateHeader {
                /*@editable*/
                background-color: #FFFFFF;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
                /*@editable*/
                padding-top: 9px;
                /*@editable*/
                padding-bottom: 0;
            }
    
            /*
            @tab Header
            @section Header Text
            @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
            */
    
            #templateHeader .mcnTextContent,
            #templateHeader .mcnTextContent p {
                /*@editable*/
                color: #202020;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 16px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: left;
            }
    
            /*
            @tab Header
            @section Header Link
            @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
            */
    
            #templateHeader .mcnTextContent a,
            #templateHeader .mcnTextContent p a {
                /*@editable*/
                color: #2BAADF;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
    
            /*
            @tab Body
            @section Body Style
            @tip Set the background color and borders for your email's body area.
            */
    
            #templateBody {
                /*@editable*/
                background-color: #FFFFFF;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 2px solid #EAEAEA;
                /*@editable*/
                padding-top: 0;
                /*@editable*/
                padding-bottom: 9px;
            }
    
            /*
            @tab Body
            @section Body Text
            @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
            */
    
            #templateBody .mcnTextContent,
            #templateBody .mcnTextContent p {
                /*@editable*/
                color: #202020;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 16px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: left;
            }
    
            /*
            @tab Body
            @section Body Link
            @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
            */
    
            #templateBody .mcnTextContent a,
            #templateBody .mcnTextContent p a {
                /*@editable*/
                color: #2BAADF;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
    
            /*
            @tab Footer
            @section Footer Style
            @tip Set the background color and borders for your email's footer area.
            */
    
            #templateFooter {
                /*@editable*/
                background-color: #FAFAFA;
                /*@editable*/
                background-image: none;
                /*@editable*/
                background-repeat: no-repeat;
                /*@editable*/
                background-position: center;
                /*@editable*/
                background-size: cover;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
                /*@editable*/
                padding-top: 9px;
                /*@editable*/
                padding-bottom: 9px;
            }
    
            /*
            @tab Footer
            @section Footer Text
            @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
            */
    
            #templateFooter .mcnTextContent,
            #templateFooter .mcnTextContent p {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 12px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
            }
    
            /*
            @tab Footer
            @section Footer Link
            @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
            */
    
            #templateFooter .mcnTextContent a,
            #templateFooter .mcnTextContent p a {
                /*@editable*/
                color: #656565;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
            }
    
            @media only screen and (min-width:768px) {
                .templateContainer {
                    width: 600px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                body,
                table,
                td,
                p,
                a,
                li,
                blockquote {
                    -webkit-text-size-adjust: none !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                body {
                    width: 100% !important;
                    min-width: 100% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                #bodyCell {
                    padding-top: 10px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnImage {
                    width: 100% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnCartContainer,
                .mcnCaptionTopContent,
                .mcnRecContentContainer,
                .mcnCaptionBottomContent,
                .mcnTextContentContainer,
                .mcnBoxedTextContentContainer,
                .mcnImageGroupContentContainer,
                .mcnCaptionLeftTextContentContainer,
                .mcnCaptionRightTextContentContainer,
                .mcnCaptionLeftImageContentContainer,
                .mcnCaptionRightImageContentContainer,
                .mcnImageCardLeftTextContentContainer,
                .mcnImageCardRightTextContentContainer,
                .mcnImageCardLeftImageContentContainer,
                .mcnImageCardRightImageContentContainer {
                    max-width: 100% !important;
                    width: 100% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnBoxedTextContentContainer {
                    min-width: 100% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnImageGroupContent {
                    padding: 9px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnCaptionLeftContentOuter .mcnTextContent,
                .mcnCaptionRightContentOuter .mcnTextContent {
                    padding-top: 9px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnImageCardTopImageContent,
                .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
                .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                    padding-top: 18px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnImageCardBottomImageContent {
                    padding-bottom: 9px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnImageGroupBlockInner {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnImageGroupBlockOuter {
                    padding-top: 9px !important;
                    padding-bottom: 9px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnTextContent,
                .mcnBoxedTextContentColumn {
                    padding-right: 18px !important;
                    padding-left: 18px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcnImageCardLeftImageContent,
                .mcnImageCardRightImageContent {
                    padding-right: 18px !important;
                    padding-bottom: 0 !important;
                    padding-left: 18px !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                .mcpreview-image-uploader {
                    display: none !important;
                    width: 100% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 1
            @tip Make the first-level headings larger in size for better readability on small screens.
            */
                h1 {
                    /*@editable*/
                    font-size: 18px !important;
                    /*@editable*/
                    line-height: 125% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 2
            @tip Make the second-level headings larger in size for better readability on small screens.
            */
                h2 {
                    /*@editable*/
                    font-size: 16px !important;
                    /*@editable*/
                    line-height: 125% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 3
            @tip Make the third-level headings larger in size for better readability on small screens.
            */
                h3 {
                    /*@editable*/
                    font-size: 16px !important;
                    /*@editable*/
                    line-height: 125% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 4
            @tip Make the fourth-level headings larger in size for better readability on small screens.
            */
                h4 {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Boxed Text
            @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
            */
                .mcnBoxedTextContentContainer .mcnTextContent,
                .mcnBoxedTextContentContainer .mcnTextContent p {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Preheader Visibility
            @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
            */
                #templatePreheader {
                    /*@editable*/
                    display: block !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Preheader Text
            @tip Make the preheader text larger in size for better readability on small screens.
            */
                #templatePreheader .mcnTextContent,
                #templatePreheader .mcnTextContent p {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Header Text
            @tip Make the header text larger in size for better readability on small screens.
            */
                #templateHeader .mcnTextContent,
                #templateHeader .mcnTextContent p {
                    /*@editable*/
                    font-size: 16px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Body Text
            @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
            */
                #templateBody .mcnTextContent,
                #templateBody .mcnTextContent p {
                    /*@editable*/
                    font-size: 16px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
    
            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Footer Text
            @tip Make the footer content text larger in size for better readability on small screens.
            */
                #templateFooter .mcnTextContent,
                #templateFooter .mcnTextContent p {
                    /*@editable*/
                    font-size: 14px !important;
                    /*@editable*/
                    line-height: 150% !important;
                }
            }
        </style>
    </head>
    
    <body>
        <center>&nbsp;&nbsp;
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" id="bodyTable" width="100%">
                <tbody>
                    <tr>
                        <td align="center" id="bodyCell" valign="top">
                            <!-- BEGIN TEMPLATE // -->
                            <!--[if (gte mso 9)|(IE)]>
                                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                <tr>
                                <td align="center" valign="top" width="600" style="width:600px;">
                                <![endif]-->&nbsp;
                            <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" width="100%">
                                <tbody>
                                    <tr>
                                        <td id="templatePreheader" valign="top">
                                            <br>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="templateHeader" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                <tbody class="mcnTextBlockOuter">
                                                    <tr>
                                                        <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                            <!--[if mso]>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                        <tr>
                        <![endif]-->
                                                            <!--[if mso]>
                        <td valign="top" width="600" style="width:600px;">
                        <![endif]-->&nbsp;
                                                            <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="mcnTextContent" style="padding-top:0px; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                            valign="top">
                                                                            <span style="color:#98b243;">
                                                                                <span style="font-size:24px;">
                                                                                    <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                        <strong>Merilytics</strong>
                                                                                    </span>
                                                                                </span>&nbsp;</span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>&nbsp;
                                                            <!--[if mso]>
                        </td>
                        <![endif]-->
                                                            <!--[if mso]>
                        </tr>
                        </table>
                        <![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                <tbody class="mcnDividerBlockOuter">
                                                    <tr>
                                                        <td class="mcnDividerBlockInner" style="min-width:100%; padding:0px;">
                                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EAEAEA;"
                                                                width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <br>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>&nbsp;
                                                            <!--            
                        <td class="mcnDividerBlockInner" style="padding: 0px;">
                        <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
        -->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                <tbody class="mcnTextBlockOuter">
                                                    <tr>
                                                        <td class="mcnTextBlockInner" style="padding-top:9px;" valign="top">
                                                            <!--[if mso]>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                        <tr>
                        <![endif]-->
                                                            <!--[if mso]>
                        <td valign="top" width="600" style="width:600px;">
                        <![endif]-->&nbsp;
                                                            <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                            valign="top">
                                                                            <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                <span style="color:#696969;">
                                                                                    <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">Hi ${data.employeeName},</span>
                                                                                </span>
                                                                            </p>
                                                                            <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                <span style="color:#696969;">
                                                                                    <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                        <em>Wish you a very happy birthday. Have a great year ahead.</em>
                                                                                    </span>
                                                                                </span>
                                                                            </p>
                                                                            <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                <span style="color:#696969;">
                                                                                    <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                        <em>&nbsp;</em>
                                                                                    </span>
                                                                                </span>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>&nbsp;
                                                            <!--[if mso]>
                        </td>
                        <![endif]-->
                                                            <!--[if mso]>
                        </tr>
                        </table>
                        <![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnImageBlock" style="min-width:100%;" width="100%">
                                                <tbody class="mcnImageBlockOuter">
                                                    <tr>
                                                        <td class="mcnImageBlockInner" style="padding:0px;" valign="top">
                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer"
                                                                style="min-width:100%;" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="mcnImageContent" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;"
                                                                            valign="top">
                                                                            <img align="center" alt="Happy Birthday" src="${process.env.BIRTHDAY_IMAGE}"
                                                                                width="564" style="max-width:700px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                                                                                class="mcnImage">
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="templateBody" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;"
                                                width="100%">
                                                <tbody class="mcnTextBlockOuter">
                                                    <tr>
                                                        <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                            <!--[if mso]>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                        <tr>
                        <![endif]-->
                                                            <!--[if mso]>
                        <td valign="top" width="600" style="width:600px;">
                        <![endif]-->&nbsp;
                                                            <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                            valign="top">
                                                                            <p>For Any Queries Write To Us At <a href="mailto:appsupport@merilytics.com">appsupport@merilytics.com</a>&nbsp;</p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <span style="color: rgb(102, 102, 102);">&nbsp;
                                                                <!--[if mso]>
                        </td>
                        <![endif]-->
                                                                <!--[if mso]>
                        </tr>
                        </table>
                        <![endif]-->
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="templateFooter" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowBlock" style="min-width:100%;" width="100%">
                                                <tbody class="mcnFollowBlockOuter">
                                                    <tr>
                                                        <td align="center" class="mcnFollowBlockInner" style="padding:9px;" valign="top">
                                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContentContainer"
                                                                style="min-width:100%;" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center" style="padding-left:9px;padding-right:9px;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContent"
                                                                                style="min-width:100%;" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" style="padding-top:9px; padding-right:9px; padding-left:9px;"
                                                                                            valign="top">
                                                                                            <table align="center" border="0" cellpadding="0"
                                                                                                cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" valign="top">
                                                                                                            <!--[if mso]>
                                            <table align="center" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                            <![endif]-->
                                                                                                            <!--[if mso]>
                                                <td align="center" valign="top">
                                                <![endif]-->&nbsp;
                                                                                                            <table align="left"
                                                                                                                border="0" cellpadding="0"
                                                                                                                cellspacing="0" style="display:inline;">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="mcnFollowContentItemContainer"
                                                                                                                            style="padding-right:10px; padding-bottom:9px;"
                                                                                                                            valign="top">
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                class="mcnFollowContentItem"
                                                                                                                                width="100%">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                            valign="middle">
                                                                                                                                            <table
                                                                                                                                                align="left"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                width="">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <!-- <td
                                                                                                                                                            align="center"
                                                                                                                                                            class="mcnFollowIconContent"
                                                                                                                                                            valign="middle"
                                                                                                                                                            width="24">
                                                                                                                                                            <a
                                                                                                                                                                href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/ec534869-dec5-4c33-b430-6856055c793c/event"
                                                                                                                                                                target="_blank">
                                                                                                                                                                <img
                                                                                                                                                                    src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png"
                                                                                                                                                                    style="display:block;"
                                                                                                                                                                    height="24"
                                                                                                                                                                    width="24">
                                                                                                                                                            </a>
                                                                                                                                                        </td> -->
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>&nbsp;
                                                                                                            <!--[if mso]>
                                                </td>
                                                <![endif]-->
                                                                                                            <!--[if mso]>
                                                <td align="center" valign="top">
                                                <![endif]-->&nbsp;
                                                                                                            <table align="left"
                                                                                                                border="0" cellpadding="0"
                                                                                                                cellspacing="0" style="display:inline;">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="mcnFollowContentItemContainer"
                                                                                                                            style="padding-right:10px; padding-bottom:9px;"
                                                                                                                            valign="top">
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                class="mcnFollowContentItem"
                                                                                                                                width="100%">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                            valign="middle">
                                                                                                                                            <table
                                                                                                                                                align="left"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                width="">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td
                                                                                                                                                            align="center"
                                                                                                                                                            class="mcnFollowIconContent"
                                                                                                                                                            valign="middle"
                                                                                                                                                            width="24">
                                                                                                                                                            <a
                                                                                                                                                                href="${process.env.HYPER_LINK}"
                                                                                                                                                                target="_blank">
                                                                                                                                                                <img
                                                                                                                                                                    src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png"
                                                                                                                                                                    style="display:block;"
                                                                                                                                                                    height="24"
                                                                                                                                                                    width="24">
                                                                                                                                                            </a>
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>&nbsp;
                                                                                                            <!--[if mso]>
                                                </td>
                                                <![endif]-->
                                                                                                            <!--[if mso]>
                                                <td align="center" valign="top">
                                                <![endif]-->&nbsp;
                                                                                                            <table align="left"
                                                                                                                border="0" cellpadding="0"
                                                                                                                cellspacing="0" style="display:inline;">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="mcnFollowContentItemContainer"
                                                                                                                            style="padding-right:0; padding-bottom:9px;"
                                                                                                                            valign="top">
                                                                                                                            <table
                                                                                                                                border="0"
                                                                                                                                cellpadding="0"
                                                                                                                                cellspacing="0"
                                                                                                                                class="mcnFollowContentItem"
                                                                                                                                width="100%">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            align="left"
                                                                                                                                            style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                            valign="middle">
                                                                                                                                            <table
                                                                                                                                                align="left"
                                                                                                                                                border="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                cellspacing="0"
                                                                                                                                                width="">
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <!-- <td
                                                                                                                                                            align="center"
                                                                                                                                                            class="mcnFollowIconContent"
                                                                                                                                                            valign="middle"
                                                                                                                                                            width="24">
                                                                                                                                                            <a
                                                                                                                                                                href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/9eb0d248-cf6e-4a6b-a255-6ffca80519ed/event"
                                                                                                                                                                target="_blank">
                                                                                                                                                                <img
                                                                                                                                                                    src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png"
                                                                                                                                                                    style="display:block;"
                                                                                                                                                                    height="24"
                                                                                                                                                                    width="24">
                                                                                                                                                            </a>
                                                                                                                                                        </td> -->
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>&nbsp;
                                                                                                            <!--[if mso]>
                                                </td>
                                                <![endif]-->
                                                                                                            <!--[if mso]>
                                            </tr>
                                            </table>
                                            <![endif]-->
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                <tbody class="mcnDividerBlockOuter">
                                                    <tr>
                                                        <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                                                            <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EEEEEE;"
                                                                width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <br>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>&nbsp;
                                                            <!--            
                        <td class="mcnDividerBlockInner" style="padding: 18px;">
                        <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
        -->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>&nbsp;
                            <!--[if (gte mso 9)|(IE)]>
                                </td>
                                </tr>
                                </table>
                                <![endif]-->
                            <!-- // END TEMPLATE -->
                        </td>
                    </tr>
                </tbody>
            </table>&nbsp;</center>
        <div>
            <img src="https://falcon.listmanager2.com/open/cf1e0d8f-ae3a-4393-9799-7195210c3653/event" alt="_t" width="1" height="1">
        </div>
    </body>
    
    </html>`;
    return template;
        }
exports.sendWorkAnniversaryWishesPic = (data) => {
        var years = data.yearsOfExperience > 1 ? 'years' : 'year';
        var template = `<!DOCTYPE html>
        <html>
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <!-- NAME: 1 COLUMN -->
            <!--[if gte mso 15]>
                    <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG></o:AllowPNG>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>*|MC:SUBJECT|*</title>
            <style type="text/css">
                p {
                    margin: 10px 0;
                    padding: 0;
                }
        
                table {
                    border-collapse: collapse;
                }
        
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    display: block;
                    margin: 0;
                    padding: 0;
                }
        
                img,
                a img {
                    border: 0;
                    height: auto;
                    outline: none;
                    text-decoration: none;
                }
        
                body,
                #bodyTable,
                #bodyCell {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                }
        
                .mcnPreviewText {
                    display: none !important;
                }
        
                #outlook a {
                    padding: 0;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                table {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                .ReadMsgBody {
                    width: 100%;
                }
        
                .ExternalClass {
                    width: 100%;
                }
        
                p,
                a,
                li,
                td,
                blockquote {
                    mso-line-height-rule: exactly;
                }
        
                a[href^=tel],
                a[href^=sms] {
                    color: inherit;
                    cursor: default;
                    text-decoration: none;
                }
        
                p,
                a,
                li,
                td,
                body,
                table,
                blockquote {
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
        
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass td,
                .ExternalClass div,
                .ExternalClass span,
                .ExternalClass font {
                    line-height: 100%;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                #bodyCell {
                    padding: 10px;
                }
        
                .templateContainer {
                    max-width: 600px !important;
                }
        
                a.mcnButton {
                    display: block;
                }
        
                .mcnImage {
                    vertical-align: bottom;
                }
        
                .mcnTextContent {
                    word-break: break-word;
                }
        
                .mcnTextContent img {
                    height: auto !important;
                }
        
                .mcnDividerBlock {
                    table-layout: fixed !important;
                }
        
                /*
                @tab Page
                @section Background Style
                @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
                */
        
                body,
                #bodyTable {
                    /*@editable*/
                    background-color: #FAFAFA;
                }
        
                /*
                @tab Page
                @section Background Style
                @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
                */
        
                #bodyCell {
                    /*@editable*/
                    border-top: 0;
                }
        
                /*
                @tab Page
                @section Email Border
                @tip Set the border for your email.
                */
        
                .templateContainer {
                    /*@editable*/
                    border: 0;
                }
        
                /*
                @tab Page
                @section Heading 1
                @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
                @style heading 1
                */
        
                h1 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 26px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 2
                @tip Set the styling for all second-level headings in your emails.
                @style heading 2
                */
        
                h2 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 22px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 3
                @tip Set the styling for all third-level headings in your emails.
                @style heading 3
                */
        
                h3 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 20px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 4
                @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
                @style heading 4
                */
        
                h4 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 18px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Preheader
                @section Preheader Style
                @tip Set the background color and borders for your email's preheader area.
                */
        
                #templatePreheader {
                    /*@editable*/
                    background-color: #FAFAFA;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Preheader
                @section Preheader Text
                @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
                */
        
                #templatePreheader .mcnTextContent,
                #templatePreheader .mcnTextContent p {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 12px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Preheader
                @section Preheader Link
                @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
                */
        
                #templatePreheader .mcnTextContent a,
                #templatePreheader .mcnTextContent p a {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Header
                @section Header Style
                @tip Set the background color and borders for your email's header area.
                */
        
                #templateHeader {
                    /*@editable*/
                    background-color: #FFFFFF;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 0;
                }
        
                /*
                @tab Header
                @section Header Text
                @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
                */
        
                #templateHeader .mcnTextContent,
                #templateHeader .mcnTextContent p {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 16px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Header
                @section Header Link
                @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
                */
        
                #templateHeader .mcnTextContent a,
                #templateHeader .mcnTextContent p a {
                    /*@editable*/
                    color: #2BAADF;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Body
                @section Body Style
                @tip Set the background color and borders for your email's body area.
                */
        
                #templateBody {
                    /*@editable*/
                    background-color: #FFFFFF;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 2px solid #EAEAEA;
                    /*@editable*/
                    padding-top: 0;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Body
                @section Body Text
                @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
                */
        
                #templateBody .mcnTextContent,
                #templateBody .mcnTextContent p {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 16px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Body
                @section Body Link
                @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
                */
        
                #templateBody .mcnTextContent a,
                #templateBody .mcnTextContent p a {
                    /*@editable*/
                    color: #2BAADF;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Footer
                @section Footer Style
                @tip Set the background color and borders for your email's footer area.
                */
        
                #templateFooter {
                    /*@editable*/
                    background-color: #FAFAFA;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Footer
                @section Footer Text
                @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
                */
        
                #templateFooter .mcnTextContent,
                #templateFooter .mcnTextContent p {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 12px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: center;
                }
        
                /*
                @tab Footer
                @section Footer Link
                @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
                */
        
                #templateFooter .mcnTextContent a,
                #templateFooter .mcnTextContent p a {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                @media only screen and (min-width:768px) {
                    .templateContainer {
                        width: 600px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    body,
                    table,
                    td,
                    p,
                    a,
                    li,
                    blockquote {
                        -webkit-text-size-adjust: none !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    body {
                        width: 100% !important;
                        min-width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    #bodyCell {
                        padding-top: 10px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImage {
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnCartContainer,
                    .mcnCaptionTopContent,
                    .mcnRecContentContainer,
                    .mcnCaptionBottomContent,
                    .mcnTextContentContainer,
                    .mcnBoxedTextContentContainer,
                    .mcnImageGroupContentContainer,
                    .mcnCaptionLeftTextContentContainer,
                    .mcnCaptionRightTextContentContainer,
                    .mcnCaptionLeftImageContentContainer,
                    .mcnCaptionRightImageContentContainer,
                    .mcnImageCardLeftTextContentContainer,
                    .mcnImageCardRightTextContentContainer,
                    .mcnImageCardLeftImageContentContainer,
                    .mcnImageCardRightImageContentContainer {
                        max-width: 100% !important;
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnBoxedTextContentContainer {
                        min-width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupContent {
                        padding: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnCaptionLeftContentOuter .mcnTextContent,
                    .mcnCaptionRightContentOuter .mcnTextContent {
                        padding-top: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardTopImageContent,
                    .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
                    .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                        padding-top: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardBottomImageContent {
                        padding-bottom: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupBlockInner {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupBlockOuter {
                        padding-top: 9px !important;
                        padding-bottom: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnTextContent,
                    .mcnBoxedTextContentColumn {
                        padding-right: 18px !important;
                        padding-left: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardLeftImageContent,
                    .mcnImageCardRightImageContent {
                        padding-right: 18px !important;
                        padding-bottom: 0 !important;
                        padding-left: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcpreview-image-uploader {
                        display: none !important;
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 1
                @tip Make the first-level headings larger in size for better readability on small screens.
                */
                    h1 {
                        /*@editable*/
                        font-size: 18px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 2
                @tip Make the second-level headings larger in size for better readability on small screens.
                */
                    h2 {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 3
                @tip Make the third-level headings larger in size for better readability on small screens.
                */
                    h3 {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 4
                @tip Make the fourth-level headings larger in size for better readability on small screens.
                */
                    h4 {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Boxed Text
                @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
                */
                    .mcnBoxedTextContentContainer .mcnTextContent,
                    .mcnBoxedTextContentContainer .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Preheader Visibility
                @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
                */
                    #templatePreheader {
                        /*@editable*/
                        display: block !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Preheader Text
                @tip Make the preheader text larger in size for better readability on small screens.
                */
                    #templatePreheader .mcnTextContent,
                    #templatePreheader .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Header Text
                @tip Make the header text larger in size for better readability on small screens.
                */
                    #templateHeader .mcnTextContent,
                    #templateHeader .mcnTextContent p {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Body Text
                @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
                */
                    #templateBody .mcnTextContent,
                    #templateBody .mcnTextContent p {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Footer Text
                @tip Make the footer content text larger in size for better readability on small screens.
                */
                    #templateFooter .mcnTextContent,
                    #templateFooter .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
            </style>
        </head>
        
        <body>
            <center>&nbsp;&nbsp;
                <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" id="bodyTable" width="100%">
                    <tbody>
                        <tr>
                            <td align="center" id="bodyCell" valign="top">
                                <!-- BEGIN TEMPLATE // -->
                                <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->&nbsp;
                                <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" width="100%">
                                    <tbody>
                                        <tr>
                                            <td id="templatePreheader" valign="top">
                                                <br>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateHeader" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0px; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <span style="color:#98b243;">
                                                                                    <span style="font-size:24px;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <strong>Merilytics</strong>
                                                                                        </span>
                                                                                    </span>&nbsp;</span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width:100%; padding:0px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EAEAEA;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <br>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--            
                            <td class="mcnDividerBlockInner" style="padding: 0px;">
                            <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
            -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:9px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">Hi ${data.employeeName},</span>
                                                                                    </span>
                                                                                </p>
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <em>Congratulations for completing ${data.yearsOfExperience} ${years} with Merilytics.</em>
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <em>&nbsp;</em>
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnImageBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnImageBlockOuter">
                                                        <tr>
                                                            <td class="mcnImageBlockInner" style="padding:0px;" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer"
                                                                    style="min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnImageContent" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;"
                                                                                valign="top">
                                                                                <img align="center" alt="Anniversary" src="${process.env.ANNIVERSARY_IMAGE}"
                                                                                    width="564" style="max-width:700px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                                                                                    class="mcnImage">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateBody" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;"
                                                    width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <p>For Any Queries Write To Us At <a href="mailto:appsupport@merilytics.com">appsupport@merilytics.com</a>&nbsp;</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <span style="color: rgb(102, 102, 102);">&nbsp;
                                                                    <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                    <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateFooter" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnFollowBlockOuter">
                                                        <tr>
                                                            <td align="center" class="mcnFollowBlockInner" style="padding:9px;" valign="top">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContentContainer"
                                                                    style="min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" style="padding-left:9px;padding-right:9px;">
                                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContent"
                                                                                    style="min-width:100%;" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" style="padding-top:9px; padding-right:9px; padding-left:9px;"
                                                                                                valign="top">
                                                                                                <table align="center" border="0" cellpadding="0"
                                                                                                    cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td align="center" valign="top">
                                                                                                                <!--[if mso]>
                                                <table align="center" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:10px; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <!-- <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/ec534869-dec5-4c33-b430-6856055c793c/event"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td> -->
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:10px; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="${process.env.HYPER_LINK}"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:0; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <!-- <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/9eb0d248-cf6e-4a6b-a255-6ffca80519ed/event"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td> -->
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                </tr>
                                                </table>
                                                <![endif]-->
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EEEEEE;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <br>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--            
                            <td class="mcnDividerBlockInner" style="padding: 18px;">
                            <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
            -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>&nbsp;
                                <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                <!-- // END TEMPLATE -->
                            </td>
                        </tr>
                    </tbody>
                </table>&nbsp;</center>
            <div>
                <img src="https://falcon.listmanager2.com/open/cf1e0d8f-ae3a-4393-9799-7195210c3653/event" alt="_t" width="1" height="1">
            </div>
        </body>
        
        </html>`;
        return template;
    }



    exports.emailToOrgForPostUpdatePic = (employeeName, eventName) => {
        return `<!DOCTYPE html>
        <html>
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <!-- NAME: 1 COLUMN -->
            <!--[if gte mso 15]>
                    <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG></o:AllowPNG>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>*|MC:SUBJECT|*</title>
            <style type="text/css">
                p {
                    margin: 10px 0;
                    padding: 0;
                }
        
                table {
                    border-collapse: collapse;
                }
        
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    display: block;
                    margin: 0;
                    padding: 0;
                }
        
                img,
                a img {
                    border: 0;
                    height: auto;
                    outline: none;
                    text-decoration: none;
                }
        
                body,
                #bodyTable,
                #bodyCell {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                }
        
                .mcnPreviewText {
                    display: none !important;
                }
        
                #outlook a {
                    padding: 0;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                table {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                .ReadMsgBody {
                    width: 100%;
                }
        
                .ExternalClass {
                    width: 100%;
                }
        
                p,
                a,
                li,
                td,
                blockquote {
                    mso-line-height-rule: exactly;
                }
        
                a[href^=tel],
                a[href^=sms] {
                    color: inherit;
                    cursor: default;
                    text-decoration: none;
                }
        
                p,
                a,
                li,
                td,
                body,
                table,
                blockquote {
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
        
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass td,
                .ExternalClass div,
                .ExternalClass span,
                .ExternalClass font {
                    line-height: 100%;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                #bodyCell {
                    padding: 10px;
                }
        
                .templateContainer {
                    max-width: 600px !important;
                }
        
                a.mcnButton {
                    display: block;
                }
        
                .mcnImage {
                    vertical-align: bottom;
                }
        
                .mcnTextContent {
                    word-break: break-word;
                }
        
                .mcnTextContent img {
                    height: auto !important;
                }
        
                .mcnDividerBlock {
                    table-layout: fixed !important;
                }
        
                /*
                @tab Page
                @section Background Style
                @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
                */
        
                body,
                #bodyTable {
                    /*@editable*/
                    background-color: #FAFAFA;
                }
        
                /*
                @tab Page
                @section Background Style
                @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
                */
        
                #bodyCell {
                    /*@editable*/
                    border-top: 0;
                }
        
                /*
                @tab Page
                @section Email Border
                @tip Set the border for your email.
                */
        
                .templateContainer {
                    /*@editable*/
                    border: 0;
                }
        
                /*
                @tab Page
                @section Heading 1
                @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
                @style heading 1
                */
        
                h1 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 26px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 2
                @tip Set the styling for all second-level headings in your emails.
                @style heading 2
                */
        
                h2 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 22px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 3
                @tip Set the styling for all third-level headings in your emails.
                @style heading 3
                */
        
                h3 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 20px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 4
                @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
                @style heading 4
                */
        
                h4 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 18px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Preheader
                @section Preheader Style
                @tip Set the background color and borders for your email's preheader area.
                */
        
                #templatePreheader {
                    /*@editable*/
                    background-color: #FAFAFA;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Preheader
                @section Preheader Text
                @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
                */
        
                #templatePreheader .mcnTextContent,
                #templatePreheader .mcnTextContent p {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 12px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Preheader
                @section Preheader Link
                @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
                */
        
                #templatePreheader .mcnTextContent a,
                #templatePreheader .mcnTextContent p a {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Header
                @section Header Style
                @tip Set the background color and borders for your email's header area.
                */
        
                #templateHeader {
                    /*@editable*/
                    background-color: #FFFFFF;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 0;
                }
        
                /*
                @tab Header
                @section Header Text
                @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
                */
        
                #templateHeader .mcnTextContent,
                #templateHeader .mcnTextContent p {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 16px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Header
                @section Header Link
                @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
                */
        
                #templateHeader .mcnTextContent a,
                #templateHeader .mcnTextContent p a {
                    /*@editable*/
                    color: #2BAADF;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Body
                @section Body Style
                @tip Set the background color and borders for your email's body area.
                */
        
                #templateBody {
                    /*@editable*/
                    background-color: #FFFFFF;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 2px solid #EAEAEA;
                    /*@editable*/
                    padding-top: 0;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Body
                @section Body Text
                @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
                */
        
                #templateBody .mcnTextContent,
                #templateBody .mcnTextContent p {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 16px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Body
                @section Body Link
                @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
                */
        
                #templateBody .mcnTextContent a,
                #templateBody .mcnTextContent p a {
                    /*@editable*/
                    color: #2BAADF;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Footer
                @section Footer Style
                @tip Set the background color and borders for your email's footer area.
                */
        
                #templateFooter {
                    /*@editable*/
                    background-color: #FAFAFA;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Footer
                @section Footer Text
                @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
                */
        
                #templateFooter .mcnTextContent,
                #templateFooter .mcnTextContent p {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 12px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: center;
                }
        
                /*
                @tab Footer
                @section Footer Link
                @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
                */
        
                #templateFooter .mcnTextContent a,
                #templateFooter .mcnTextContent p a {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                @media only screen and (min-width:768px) {
                    .templateContainer {
                        width: 600px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    body,
                    table,
                    td,
                    p,
                    a,
                    li,
                    blockquote {
                        -webkit-text-size-adjust: none !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    body {
                        width: 100% !important;
                        min-width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    #bodyCell {
                        padding-top: 10px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImage {
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnCartContainer,
                    .mcnCaptionTopContent,
                    .mcnRecContentContainer,
                    .mcnCaptionBottomContent,
                    .mcnTextContentContainer,
                    .mcnBoxedTextContentContainer,
                    .mcnImageGroupContentContainer,
                    .mcnCaptionLeftTextContentContainer,
                    .mcnCaptionRightTextContentContainer,
                    .mcnCaptionLeftImageContentContainer,
                    .mcnCaptionRightImageContentContainer,
                    .mcnImageCardLeftTextContentContainer,
                    .mcnImageCardRightTextContentContainer,
                    .mcnImageCardLeftImageContentContainer,
                    .mcnImageCardRightImageContentContainer {
                        max-width: 100% !important;
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnBoxedTextContentContainer {
                        min-width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupContent {
                        padding: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnCaptionLeftContentOuter .mcnTextContent,
                    .mcnCaptionRightContentOuter .mcnTextContent {
                        padding-top: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardTopImageContent,
                    .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
                    .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                        padding-top: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardBottomImageContent {
                        padding-bottom: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupBlockInner {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupBlockOuter {
                        padding-top: 9px !important;
                        padding-bottom: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnTextContent,
                    .mcnBoxedTextContentColumn {
                        padding-right: 18px !important;
                        padding-left: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardLeftImageContent,
                    .mcnImageCardRightImageContent {
                        padding-right: 18px !important;
                        padding-bottom: 0 !important;
                        padding-left: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcpreview-image-uploader {
                        display: none !important;
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 1
                @tip Make the first-level headings larger in size for better readability on small screens.
                */
                    h1 {
                        /*@editable*/
                        font-size: 18px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 2
                @tip Make the second-level headings larger in size for better readability on small screens.
                */
                    h2 {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 3
                @tip Make the third-level headings larger in size for better readability on small screens.
                */
                    h3 {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 4
                @tip Make the fourth-level headings larger in size for better readability on small screens.
                */
                    h4 {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Boxed Text
                @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
                */
                    .mcnBoxedTextContentContainer .mcnTextContent,
                    .mcnBoxedTextContentContainer .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Preheader Visibility
                @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
                */
                    #templatePreheader {
                        /*@editable*/
                        display: block !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Preheader Text
                @tip Make the preheader text larger in size for better readability on small screens.
                */
                    #templatePreheader .mcnTextContent,
                    #templatePreheader .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Header Text
                @tip Make the header text larger in size for better readability on small screens.
                */
                    #templateHeader .mcnTextContent,
                    #templateHeader .mcnTextContent p {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Body Text
                @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
                */
                    #templateBody .mcnTextContent,
                    #templateBody .mcnTextContent p {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Footer Text
                @tip Make the footer content text larger in size for better readability on small screens.
                */
                    #templateFooter .mcnTextContent,
                    #templateFooter .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
            </style>
        </head>
        
        <body>
            <center>&nbsp;&nbsp;
                <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" id="bodyTable" width="100%">
                    <tbody>
                        <tr>
                            <td align="center" id="bodyCell" valign="top">
                                <!-- BEGIN TEMPLATE // -->
                                <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->&nbsp;
                                <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" width="100%">
                                    <tbody>
                                        <tr>
                                            <td id="templatePreheader" valign="top">
                                                <br>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateHeader" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0px; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <span style="color:#98b243;">
                                                                                    <span style="font-size:24px;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <strong>Merilytics</strong>
                                                                                        </span>
                                                                                    </span>&nbsp;</span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width:100%; padding:0px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EAEAEA;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <br>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--            
                            <td class="mcnDividerBlockInner" style="padding: 0px;">
                            <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
            -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:9px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">Hi All,</span>
                                                                                    </span>
                                                                                </p>
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <em>A new company update has been posted on the Intranet portal.</em>
                                                                                           <br> <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                               <a href='${process.env.HYPER_LINK}'>${eventName}</a></span>
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <em>&nbsp;</em>
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnImageBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnImageBlockOuter">
                                                        <tr>
                                                            <td class="mcnImageBlockInner" style="padding:0px;" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer"
                                                                    style="min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnImageContent" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;"
                                                                                valign="top">
                                                                                <img align="center" alt="Update" src="${process.env.UPDATE_IMAGE}"
                                                                                    width="564" style="max-width:700px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                                                                                    class="mcnImage">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateBody" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;"
                                                    width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <p>For Any Queries Write To Us At <a href="mailto:appsupport@merilytics.com">appsupport@merilytics.com</a>&nbsp;</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <span style="color: rgb(102, 102, 102);">&nbsp;
                                                                    <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                    <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateFooter" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnFollowBlockOuter">
                                                        <tr>
                                                            <td align="center" class="mcnFollowBlockInner" style="padding:9px;" valign="top">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContentContainer"
                                                                    style="min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" style="padding-left:9px;padding-right:9px;">
                                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContent"
                                                                                    style="min-width:100%;" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" style="padding-top:9px; padding-right:9px; padding-left:9px;"
                                                                                                valign="top">
                                                                                                <table align="center" border="0" cellpadding="0"
                                                                                                    cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td align="center" valign="top">
                                                                                                                <!--[if mso]>
                                                <table align="center" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:10px; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <!-- <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/ec534869-dec5-4c33-b430-6856055c793c/event"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td> -->
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:10px; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="${process.env.HYPER_LINK}"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:0; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <!-- <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/9eb0d248-cf6e-4a6b-a255-6ffca80519ed/event"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td> -->
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                </tr>
                                                </table>
                                                <![endif]-->
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EEEEEE;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <br>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--            
                            <td class="mcnDividerBlockInner" style="padding: 18px;">
                            <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
            -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>&nbsp;
                                <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                <!-- // END TEMPLATE -->
                            </td>
                        </tr>
                    </tbody>
                </table>&nbsp;</center>
            <div>
                <img src="https://falcon.listmanager2.com/open/cf1e0d8f-ae3a-4393-9799-7195210c3653/event" alt="_t" width="1" height="1">
            </div>
        </body>
        
        </html>`
        
    }


    exports.emailForAppreciationPic = (employeeName, message) => {
        return `<!DOCTYPE html>
        <html>
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <!-- NAME: 1 COLUMN -->
            <!--[if gte mso 15]>
                    <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG></o:AllowPNG>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>*|MC:SUBJECT|*</title>
            <style type="text/css">
                p {
                    margin: 10px 0;
                    padding: 0;
                }
        
                table {
                    border-collapse: collapse;
                }
        
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    display: block;
                    margin: 0;
                    padding: 0;
                }
        
                img,
                a img {
                    border: 0;
                    height: auto;
                    outline: none;
                    text-decoration: none;
                }
        
                body,
                #bodyTable,
                #bodyCell {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                }
        
                .mcnPreviewText {
                    display: none !important;
                }
        
                #outlook a {
                    padding: 0;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                table {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                .ReadMsgBody {
                    width: 100%;
                }
        
                .ExternalClass {
                    width: 100%;
                }
        
                p,
                a,
                li,
                td,
                blockquote {
                    mso-line-height-rule: exactly;
                }
        
                a[href^=tel],
                a[href^=sms] {
                    color: inherit;
                    cursor: default;
                    text-decoration: none;
                }
        
                p,
                a,
                li,
                td,
                body,
                table,
                blockquote {
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
        
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass td,
                .ExternalClass div,
                .ExternalClass span,
                .ExternalClass font {
                    line-height: 100%;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                #bodyCell {
                    padding: 10px;
                }
        
                .templateContainer {
                    max-width: 600px !important;
                }
        
                a.mcnButton {
                    display: block;
                }
        
                .mcnImage {
                    vertical-align: bottom;
                }
        
                .mcnTextContent {
                    word-break: break-word;
                }
        
                .mcnTextContent img {
                    height: auto !important;
                }
        
                .mcnDividerBlock {
                    table-layout: fixed !important;
                }
        
                /*
                @tab Page
                @section Background Style
                @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
                */
        
                body,
                #bodyTable {
                    /*@editable*/
                    background-color: #FAFAFA;
                }
        
                /*
                @tab Page
                @section Background Style
                @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
                */
        
                #bodyCell {
                    /*@editable*/
                    border-top: 0;
                }
        
                /*
                @tab Page
                @section Email Border
                @tip Set the border for your email.
                */
        
                .templateContainer {
                    /*@editable*/
                    border: 0;
                }
        
                /*
                @tab Page
                @section Heading 1
                @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
                @style heading 1
                */
        
                h1 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 26px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 2
                @tip Set the styling for all second-level headings in your emails.
                @style heading 2
                */
        
                h2 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 22px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 3
                @tip Set the styling for all third-level headings in your emails.
                @style heading 3
                */
        
                h3 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 20px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Page
                @section Heading 4
                @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
                @style heading 4
                */
        
                h4 {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 18px;
                    /*@editable*/
                    font-style: normal;
                    /*@editable*/
                    font-weight: bold;
                    /*@editable*/
                    line-height: 125%;
                    /*@editable*/
                    letter-spacing: normal;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Preheader
                @section Preheader Style
                @tip Set the background color and borders for your email's preheader area.
                */
        
                #templatePreheader {
                    /*@editable*/
                    background-color: #FAFAFA;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Preheader
                @section Preheader Text
                @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
                */
        
                #templatePreheader .mcnTextContent,
                #templatePreheader .mcnTextContent p {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 12px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Preheader
                @section Preheader Link
                @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
                */
        
                #templatePreheader .mcnTextContent a,
                #templatePreheader .mcnTextContent p a {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Header
                @section Header Style
                @tip Set the background color and borders for your email's header area.
                */
        
                #templateHeader {
                    /*@editable*/
                    background-color: #FFFFFF;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 0;
                }
        
                /*
                @tab Header
                @section Header Text
                @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
                */
        
                #templateHeader .mcnTextContent,
                #templateHeader .mcnTextContent p {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 16px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Header
                @section Header Link
                @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
                */
        
                #templateHeader .mcnTextContent a,
                #templateHeader .mcnTextContent p a {
                    /*@editable*/
                    color: #2BAADF;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Body
                @section Body Style
                @tip Set the background color and borders for your email's body area.
                */
        
                #templateBody {
                    /*@editable*/
                    background-color: #FFFFFF;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 2px solid #EAEAEA;
                    /*@editable*/
                    padding-top: 0;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Body
                @section Body Text
                @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
                */
        
                #templateBody .mcnTextContent,
                #templateBody .mcnTextContent p {
                    /*@editable*/
                    color: #202020;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 16px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: left;
                }
        
                /*
                @tab Body
                @section Body Link
                @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
                */
        
                #templateBody .mcnTextContent a,
                #templateBody .mcnTextContent p a {
                    /*@editable*/
                    color: #2BAADF;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                /*
                @tab Footer
                @section Footer Style
                @tip Set the background color and borders for your email's footer area.
                */
        
                #templateFooter {
                    /*@editable*/
                    background-color: #FAFAFA;
                    /*@editable*/
                    background-image: none;
                    /*@editable*/
                    background-repeat: no-repeat;
                    /*@editable*/
                    background-position: center;
                    /*@editable*/
                    background-size: cover;
                    /*@editable*/
                    border-top: 0;
                    /*@editable*/
                    border-bottom: 0;
                    /*@editable*/
                    padding-top: 9px;
                    /*@editable*/
                    padding-bottom: 9px;
                }
        
                /*
                @tab Footer
                @section Footer Text
                @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
                */
        
                #templateFooter .mcnTextContent,
                #templateFooter .mcnTextContent p {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-family: Helvetica;
                    /*@editable*/
                    font-size: 12px;
                    /*@editable*/
                    line-height: 150%;
                    /*@editable*/
                    text-align: center;
                }
        
                /*
                @tab Footer
                @section Footer Link
                @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
                */
        
                #templateFooter .mcnTextContent a,
                #templateFooter .mcnTextContent p a {
                    /*@editable*/
                    color: #656565;
                    /*@editable*/
                    font-weight: normal;
                    /*@editable*/
                    text-decoration: underline;
                }
        
                @media only screen and (min-width:768px) {
                    .templateContainer {
                        width: 600px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    body,
                    table,
                    td,
                    p,
                    a,
                    li,
                    blockquote {
                        -webkit-text-size-adjust: none !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    body {
                        width: 100% !important;
                        min-width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    #bodyCell {
                        padding-top: 10px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImage {
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnCartContainer,
                    .mcnCaptionTopContent,
                    .mcnRecContentContainer,
                    .mcnCaptionBottomContent,
                    .mcnTextContentContainer,
                    .mcnBoxedTextContentContainer,
                    .mcnImageGroupContentContainer,
                    .mcnCaptionLeftTextContentContainer,
                    .mcnCaptionRightTextContentContainer,
                    .mcnCaptionLeftImageContentContainer,
                    .mcnCaptionRightImageContentContainer,
                    .mcnImageCardLeftTextContentContainer,
                    .mcnImageCardRightTextContentContainer,
                    .mcnImageCardLeftImageContentContainer,
                    .mcnImageCardRightImageContentContainer {
                        max-width: 100% !important;
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnBoxedTextContentContainer {
                        min-width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupContent {
                        padding: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnCaptionLeftContentOuter .mcnTextContent,
                    .mcnCaptionRightContentOuter .mcnTextContent {
                        padding-top: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardTopImageContent,
                    .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
                    .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                        padding-top: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardBottomImageContent {
                        padding-bottom: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupBlockInner {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageGroupBlockOuter {
                        padding-top: 9px !important;
                        padding-bottom: 9px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnTextContent,
                    .mcnBoxedTextContentColumn {
                        padding-right: 18px !important;
                        padding-left: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcnImageCardLeftImageContent,
                    .mcnImageCardRightImageContent {
                        padding-right: 18px !important;
                        padding-bottom: 0 !important;
                        padding-left: 18px !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    .mcpreview-image-uploader {
                        display: none !important;
                        width: 100% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 1
                @tip Make the first-level headings larger in size for better readability on small screens.
                */
                    h1 {
                        /*@editable*/
                        font-size: 18px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 2
                @tip Make the second-level headings larger in size for better readability on small screens.
                */
                    h2 {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 3
                @tip Make the third-level headings larger in size for better readability on small screens.
                */
                    h3 {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 125% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Heading 4
                @tip Make the fourth-level headings larger in size for better readability on small screens.
                */
                    h4 {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Boxed Text
                @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
                */
                    .mcnBoxedTextContentContainer .mcnTextContent,
                    .mcnBoxedTextContentContainer .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Preheader Visibility
                @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
                */
                    #templatePreheader {
                        /*@editable*/
                        display: block !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Preheader Text
                @tip Make the preheader text larger in size for better readability on small screens.
                */
                    #templatePreheader .mcnTextContent,
                    #templatePreheader .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Header Text
                @tip Make the header text larger in size for better readability on small screens.
                */
                    #templateHeader .mcnTextContent,
                    #templateHeader .mcnTextContent p {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Body Text
                @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
                */
                    #templateBody .mcnTextContent,
                    #templateBody .mcnTextContent p {
                        /*@editable*/
                        font-size: 16px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
        
                @media only screen and (max-width: 480px) {
                    /*
                @tab Mobile Styles
                @section Footer Text
                @tip Make the footer content text larger in size for better readability on small screens.
                */
                    #templateFooter .mcnTextContent,
                    #templateFooter .mcnTextContent p {
                        /*@editable*/
                        font-size: 14px !important;
                        /*@editable*/
                        line-height: 150% !important;
                    }
                }
            </style>
        </head>
        
        <body>
            <center>&nbsp;&nbsp;
                <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" id="bodyTable" width="100%">
                    <tbody>
                        <tr>
                            <td align="center" id="bodyCell" valign="top">
                                <!-- BEGIN TEMPLATE // -->
                                <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->&nbsp;
                                <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" width="100%">
                                    <tbody>
                                        <tr>
                                            <td id="templatePreheader" valign="top">
                                                <br>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateHeader" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0px; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <span style="color:#98b243;">
                                                                                    <span style="font-size:24px;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <strong>Merilytics</strong>
                                                                                        </span>
                                                                                    </span>&nbsp;</span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width:100%; padding:0px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EAEAEA;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <br>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--            
                            <td class="mcnDividerBlockInner" style="padding: 0px;">
                            <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
            -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:9px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">Hi ${employeeName}</span>
                                                                                    </span>
                                                                                </p>
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <em>You have been appreciated by your colleague on the Intranet Portal, please <a href='${process.env.HYPER_LINK}'>login</a> to the portal to know more in detail.</em>                                                                    
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                                <p data-mce-style="font-size: 12px; line-height: 14px;">
                                                                                    <span style="color:#696969;">
                                                                                        <span style="font-family:lato,helvetica neue,helvetica,arial,sans-serif;">
                                                                                            <em>&nbsp;</em>
                                                                                        </span>
                                                                                    </span>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnImageBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnImageBlockOuter">
                                                        <tr>
                                                            <td class="mcnImageBlockInner" style="padding:0px;" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer"
                                                                    style="min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnImageContent" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;"
                                                                                valign="top">
                                                                                <img align="center" alt="Appreciate" src="${process.env.THANKS_IMAGE}"
                                                                                    width="564" style="max-width:700px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                                                                                    class="mcnImage">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateBody" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="min-width:100%;"
                                                    width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="padding-top:0px;" valign="top">
                                                                <!--[if mso]>
                            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                            <tr>
                            <![endif]-->
                                                                <!--[if mso]>
                            <td valign="top" width="600" style="width:600px;">
                            <![endif]-->&nbsp;
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="max-width:100%; min-width:100%;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                                                                                valign="top">
                                                                                <p>For Any Queries Write To Us At <a href="mailto:appsupport@merilytics.com">appsupport@merilytics.com</a>&nbsp;</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <span style="color: rgb(102, 102, 102);">&nbsp;
                                                                    <!--[if mso]>
                            </td>
                            <![endif]-->
                                                                    <!--[if mso]>
                            </tr>
                            </table>
                            <![endif]-->
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="templateFooter" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnFollowBlockOuter">
                                                        <tr>
                                                            <td align="center" class="mcnFollowBlockInner" style="padding:9px;" valign="top">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContentContainer"
                                                                    style="min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" style="padding-left:9px;padding-right:9px;">
                                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnFollowContent"
                                                                                    style="min-width:100%;" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" style="padding-top:9px; padding-right:9px; padding-left:9px;"
                                                                                                valign="top">
                                                                                                <table align="center" border="0" cellpadding="0"
                                                                                                    cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td align="center" valign="top">
                                                                                                                <!--[if mso]>
                                                <table align="center" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:10px; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <!-- <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/ec534869-dec5-4c33-b430-6856055c793c/event"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td> -->
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:10px; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="${process.env.HYPER_LINK}"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td>
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                    <td align="center" valign="top">
                                                    <![endif]-->&nbsp;
                                                                                                                <table align="left"
                                                                                                                    border="0" cellpadding="0"
                                                                                                                    cellspacing="0" style="display:inline;">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td class="mcnFollowContentItemContainer"
                                                                                                                                style="padding-right:0; padding-bottom:9px;"
                                                                                                                                valign="top">
                                                                                                                                <table
                                                                                                                                    border="0"
                                                                                                                                    cellpadding="0"
                                                                                                                                    cellspacing="0"
                                                                                                                                    class="mcnFollowContentItem"
                                                                                                                                    width="100%">
                                                                                                                                    <tbody>
                                                                                                                                        <tr>
                                                                                                                                            <td
                                                                                                                                                align="left"
                                                                                                                                                style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;"
                                                                                                                                                valign="middle">
                                                                                                                                                <table
                                                                                                                                                    align="left"
                                                                                                                                                    border="0"
                                                                                                                                                    cellpadding="0"
                                                                                                                                                    cellspacing="0"
                                                                                                                                                    width="">
                                                                                                                                                    <tbody>
                                                                                                                                                        <tr>
                                                                                                                                                            <!-- <td
                                                                                                                                                                align="center"
                                                                                                                                                                class="mcnFollowIconContent"
                                                                                                                                                                valign="middle"
                                                                                                                                                                width="24">
                                                                                                                                                                <a
                                                                                                                                                                    href="https://falcon.listmanager2.com/click/cf1e0d8f-ae3a-4393-9799-7195210c3653/9eb0d248-cf6e-4a6b-a255-6ffca80519ed/event"
                                                                                                                                                                    target="_blank">
                                                                                                                                                                    <img
                                                                                                                                                                        src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png"
                                                                                                                                                                        style="display:block;"
                                                                                                                                                                        height="24"
                                                                                                                                                                        width="24">
                                                                                                                                                                </a>
                                                                                                                                                            </td> -->
                                                                                                                                                        </tr>
                                                                                                                                                    </tbody>
                                                                                                                                                </table>
                                                                                                                                            </td>
                                                                                                                                        </tr>
                                                                                                                                    </tbody>
                                                                                                                                </table>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>&nbsp;
                                                                                                                <!--[if mso]>
                                                    </td>
                                                    <![endif]-->
                                                                                                                <!--[if mso]>
                                                </tr>
                                                </table>
                                                <![endif]-->
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerBlock" style="min-width:100%;" width="100%">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnDividerContent" style="min-width: 100%;border-top: 2px solid #EEEEEE;"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <br>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>&nbsp;
                                                                <!--            
                            <td class="mcnDividerBlockInner" style="padding: 18px;">
                            <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
            -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>&nbsp;
                                <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                <!-- // END TEMPLATE -->
                            </td>
                        </tr>
                    </tbody>
                </table>&nbsp;</center>
            <div>
                <img src="https://falcon.listmanager2.com/open/cf1e0d8f-ae3a-4393-9799-7195210c3653/event" alt="_t" width="1" height="1">
            </div>
        </body>
        
        </html>`
        
    }

//module.exports = { sendBirthdayWishes, sendWorkAnniversaryWishes ,emailToOrgForPostUpdate}