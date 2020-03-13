import owner from '../Common/ownerModel'
import property from '../Common/propertyModel'
import renter from '../Common/renterModel'
import feedback from '../Common/feedbackModel'
import { sendEmail } from '../Common/email';
import booking from '../Common/bookingsModel'


export const ownerlogin = (req, res) => {
  owner.findOne({ "userName": req.query.userName, "password": req.query.password, "status": "Active" }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}


export const ownerRegistration = (req, res) => {
  owner.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered Home Away From Home<br><br>UserName: ${req.body.userName}<br>Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const forgotpassword = (req, res) => {
  owner.findOne({ "email": req.query.email }, (err, result) => {
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

export const ownerProfile = (req, res) => {
  owner.find({ "userName": req.query.userName }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result.map(record => {
        return record;
      }));
  })
}


export const updateProfile = (req, res) => {
  owner.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addProperty = (req, res) => {
  property.findOne({ "owner": req.body.owner, "typeOfHouse": req.body.typeOfHouse }, (err, result) => {
    if (err)
      res.send(err);
    else if (result == null || result == []) {
      property.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          res.send(result);
        }
      })
    }
    else {
      res.send("exists");
    }
  })
}

export const getPropertyData = (req, res) => {
  property.find({ "owner": req.query.owner }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}

export const ownerData = (req, res) => {
  owner.find({}, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const updateProperty = (req, res) => {
  property.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const paymentDetails = (req, res) => {
  booking.find({ "owner": req.query.owner }).populate('renter owner property').exec((err, owner) => {
    if (err) {
      res.send(err);
    }

    else {
      const ress = owner.map(data => {
        return { id: data._id, ownerId: data.owner._id, owner: data.owner.lastName, propertyId: data.property._id, property: data.property.propertyName, renterId: data.renter._id, renter: data.renter.lastName, houseNo: data.houseNo, roomType: data.roomType, amount: data.amount, status: data.status }
      })
      res.send(ress);
    }
  })
}

export const roomVacate = (req, res) => {
  booking.findByIdAndUpdate(req.body.bookingId, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      req.body.status = 0;
      property.findByIdAndUpdate(req.body.propertyId, req.body, { new: true }, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          owner.findById(req.body.ownerId, (err, owner) => {
            if (err) {
              res.send(err);
            }
            else {
              renter.findById(req.body.renterId, (err, renter) => {
                if (err) {
                  res.send(err);
                }
                else {
                  req.body.email = renter.email;
                  //  sending mail to owner
                  const subject = 'Room Vacate Details';
                  const body = `Ur Room Has Been Vacated  <br><br>PropertyName: ${result.propertyName}<br>HouseNo: ${result.houseNo}<br>address:${result.address}<br><br>Renter Details<br>Renter:${renter.userName}<br>EmailId:${renter.email}<br>PhoneNo:${renter.phoneNo}<br>Thank You.`;
                  sendEmail(req.body.ownerEmail, subject, body);
                  // sending mail to renter
                  const subject1 = 'Room vacate Details';
                  const body1 = `Ur Room Has Been Vacated <br><br>PropertyName: ${result.propertyName}<br>HouseNo: ${result.houseNo}<br>address:${result.address}<br><br>Owner Details<br>Renter:${owner.userName}<br>EmailId:${owner.email}<br>PhoneNo:${owner.phoneNo}<br>Thank You.`;
                  sendEmail(req.body.email, subject1, body1);
                  res.send(result);
                }
              }
              )
            }
          })
        }
      })

    }
  })
}

export const editProperty = (req, res) => {
  property.findById({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const deleleProperty = (req, res) => {
  property.findByIdAndRemove({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const getFeedBack = (req, res) => {
  feedback.find({"owner":req.query.owner}).populate('renter').exec((err, result) => {
      if (err) {
          res.send(err);
      }
      else {
          const ress = result.map(data => {
              return { id: data._id, renter: data.renter.userName, feedback: data.feedback }
          })
          res.send(ress);
      }
  })
}