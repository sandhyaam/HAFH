import renter from '../Common/renterModel'
import owner from '../Common/ownerModel'
import property from '../Common/propertyModel'
import payment from '../Common/paymentModel'
import feedback from '../Common/feedbackModel'
import { sendEmail } from '../Common/email';
import booking from '../Common/bookingsModel'


export const renterLogin = (req, res) => {
  renter.findOne({ "userName": req.query.userName, "password": req.query.password }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}

export const renterRegistration = (req, res) => {
  renter.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Home Away From Home<br><br>userName: ${req.body.userName}<br>Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const addpayment = (req, res) => {
  payment.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      booking.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          req.body.status = 1;
          property.findByIdAndUpdate(req.body.property, req.body, { new: true }, (err, result) => {
            if (err) {
              res.send(err);
            }
            else {
              property.findById(req.body.property, (err, property) => {
                if (err) {
                  res.send(err);
                }
                else {
                  owner.findById(req.body.owner, (err, owner) => {
                    if (err) {
                      res.send(err);
                    }
                    else {
                      renter.findById(req.body.renter, (err, renter) => {
                        if (err) {
                          res.send(err);
                        }
                        else {
                          //sending mail to owner
                          const subject = 'Room Booking Details';
                          const body = `Ur Property Has Been Booking  <br><br>PropertyName: ${property.propertyName}<br>TypeOfHouse: ${property.typeOfHouse}<br>HouseNo: ${property.houseNo}<br>roomType:${property.roomType}<br>amount:${property.amount}<br>address:${property.address}<br><br>Renter Details<br>Renter:${renter.userName}<br>EmailId:${renter.email}<br>PhoneNo:${renter.phoneNo}<br>Thank You.`;
                          sendEmail(owner.email, subject, body);
                          //sending mail to renter
                          const subject1 = 'Room Booking Details';
                          const body1 = `Ur Property Has Been Booking  <br><br>PropertyName: ${property.propertyName}<br>TypeOfHouse: ${property.typeOfHouse}<br>HouseNo: ${property.houseNo}<br>roomType:${property.roomType}<br>amount:${property.amount}<br>address:${property.address}<br><br>Owner Details<br>Renter:${owner.userName}<br>EmailId:${owner.email}<br>PhoneNo:${owner.phoneNo}<br>Thank You.`;
                          sendEmail(req.body.renterEmail, subject1, body1);
                          res.send(result);
                        }
                      })
                    }
                  })
                }
              })
            }

          })

        }
      })
    }
  })
}


export const renterProfile = (req, res) => {
  renter.find({ "userName": req.query.userName }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result.map(record => {
        return record;
      }));
  })
}

export const updateProfile = (req, res) => {
  renter.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const forgotpassword = (req, res) => {
  renter.findOne({ "email": req.query.email }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const subject = 'Credentials Recived';
      const body = `userName: ${result.userName}<br>password: ${result.password}<br>Please Login  Using these Credentials<br>Thank You.`;
      sendEmail(req.query.email, subject, body);
      res.send(result);
    }
  })
}

export const searchLocations = (req, res) => {
  property.find({ $or: [{ "location": req.query.search, "status": "0" }, { "roomType": req.query.search, "status": "0" }] }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const propertyNames = (req, res) => {
  property.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const renterFeedBack = (req, res) => {
  feedback.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })


}

export const bookingHistory = (req, res) => {
  booking.find({ "renter": req.query.renter, "status": "0" }).populate('owner property renter').exec((err, owner) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = owner.map(data => {
        return { id: data._id, owner: data.owner.lastName, ownerid: data.owner._id, propertyid: data.property._id, property: data.property.propertyName, renter: data.renter.lastName, houseNo: data.houseNo, roomType: data.roomType, amount: data.amount,amount: data.amount }
      })
      res.send(ress);
    }
  })
}

export const editPayment = (req, res) => {
  booking.findById({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}


export const getPaymentData = (req, res) => {
  payment.find({ "renter": req.query.renter, "property": req.query.propertyid, "owner": req.query.ownerid }).populate('property renter').exec((err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = result.map(data => {
        return { id: data._id, property: data.property.propertyName, renter: data.renter.lastName, amount: data.amount, address: data.address, cardtype: data.cardtype, cardHolderName: data.cardHolderName, cardNo: data.cardNo, cvv: data.cvv, date: data.date, month: data.month }
      })
      res.send(ress);
    }
  })
}
