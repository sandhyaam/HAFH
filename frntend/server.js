const express = require('express')
const app = express()
var image = require('path').join(__dirname, '/images');
app.use(express.static(image));
app.get('/', loadstdHtml);
app.get('/home',homepage);
app.get('/admin', adminLoginPage);
app.get('/owner', ownerLogin);
app.get('/renter', renterlogin);


app.get('/adminpage', adminpage);
app.get('/ownerPage',ownerpage);
app.get('/renterpage',renterpage);
app.get('/ownerRegistration',ownerRegistration);
app.get('/renterRegistration',renterRegistration);
app.get('/renterforgetpwd',renterforgetpwd);
app.get('/ownerforgetpwd',ownerforgetpwd);

app.get('/Admin/viewOwners',viewOwners);
app.get('/Admin/viewRenterfeedback',viewRenterfeedback);
app.get('/Admin/viewPropertyDetails',viewPropertyDetails);

app.get('/Owner/addproperty',addproperty);
app.get('/Owner/viewPropertydetails',viewPropertydetails);
app.get('/Owner/ownerProfile',ownerProfile);
app.get('/Owner/viewfeedback',viewfeedback);
app.get('/Owner/viewVacateDetails',viewVacateDetails);
app.get('/Renter/renterProfile',renterProfile);
app.get('/Renter/searchProperty',searchProperty);
app.get('/Renter/bookingHiostory',bookingHiostory);
app.get('/Renter/sendFeedback',sendFeedback);
app.get('/Renter/paymentamount',paymentamount);
app.get('/Renter/payments',payments);
app.get('/Renter/feedback',feedback);
app.get('/Renter/monthlyPayment',monthlyPayment);

function loadstdHtml(req,res){
res.sendFile('index.html',{root:__dirname});
}
function homepage(req,res){
    res.sendFile('home.html',{root:__dirname});
}

function adminLoginPage(req,res){
    res.sendFile('adminlogin.html',{root:__dirname});
}

function ownerLogin(req,res){
    res.sendFile('ownerlogin.html',{root:__dirname});
}
function renterlogin(req,res){
    res.sendFile('renterlogin.html',{root:__dirname});
}

function adminpage(req, res) {
    res.sendFile('Admin/adminhome.html', { root: __dirname });
}

function viewPropertyDetails(req,res){
    res.sendFile('Admin/View Property Details.html',{root:__dirname});
}
function viewRenterfeedback(req,res){
    res.sendFile('Admin/View Feedback.html',{root:__dirname});
}
function ownerpage(req,res){
    res.sendFile('Owner/owner.html',{root:__dirname});
}
function renterpage(req,res){
    res.sendFile('Renter/renter.html',{root:__dirname});
}

function ownerRegistration(req,res){
    res.sendFile('ownerRegistration.html',{root:__dirname});
}
function renterRegistration(req,res){
    res.sendFile('renterRegistration.html',{root:__dirname});
}
function renterforgetpwd(req,res){
    res.sendFile('renterforgetpwd.html',{root:__dirname});
}
function ownerforgetpwd(req,res){
    res.sendFile('ownerforgetpwd.html',{root:__dirname});
}

function addproperty(req,res){
    res.sendFile('Owner/addProperty.html',{root:__dirname});
}
function viewfeedback(req,res){
    res.sendFile('Owner/View Feedback.html',{root:__dirname});
}
function viewPropertydetails(req,res){
    res.sendFile('Owner/View Property Details.html',{root:__dirname});
}

function viewOwners(req,res){
    res.sendFile('Admin/viewowner.html',{root:__dirname});
}

function ownerProfile(req,res){
    res.sendFile('Owner/ownerProfile.html',{root:__dirname});
}

function viewVacateDetails(req,res){
    res.sendFile('Owner/roomVacateDetails.html',{root:__dirname});
}
function monthlyPayment(req,res){
    res.sendFile('Renter/monthlyPayment.html',{root:__dirname});
}
function renterProfile(req,res){
    res.sendFile('Renter/renterProfile.html',{root:__dirname});
}
function searchProperty(req,res){
    res.sendFile('Renter/Search Property Details.html',{root:__dirname});
}
function bookingHiostory(req,res){
    res.sendFile('Renter/My Booking.html',{root:__dirname});
}
function sendFeedback(req,res){
    res.sendFile('Renter/feedback.html',{root:__dirname});
}
function paymentamount(req,res){
res.sendFile('Renter/paymentamount.html',{root:__dirname});
}
function payments(req,res){
    res.sendFile('Renter/payments.html',{root:__dirname});
}
function feedback(req,res){
    res.sendFile('Renter/feedback.html',{root:__dirname});
}
app.listen(3000, () => console.log(`Example app listening on port number 3000!`))