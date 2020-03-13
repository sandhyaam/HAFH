import admin from './adminModel';
import owner from '../Common/ownerModel';
import property from '../Common/propertyModel';
import feedback from '../Common/feedbackModel';
import { sendEmail } from '../Common/email';

export const adminLogin = (req, res) => {
    admin.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const getOwnersData = (req, res) => {
    owner.find((err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const editOwnersData = (req, res) => {
    owner.findById({ "_id": req.params.id }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}


export const updateOwners = (req, res) => {
    owner.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            const subject = 'YOUR PROPERTY STATUS DETAILS';
            const body = `we are activated your request: <br>userName:${req.body.userName}<br>status: ${req.body.status}<br><br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}

export const getPropertyDetails = (req, res) => {
    property.find({}).populate('owner').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const result = user.map(data => {
                return { id: data._id, owner: data.owner.owner, typeOfHouse: data.typeOfHouse, houseNo: data.houseNo, roomType: data.roomType, amount: data.amount, description: data.description, location: data.location, address: data.address, image: data.image }
            })
            res.send(result);
        }
    })
}

export const getFeedBack = (req, res) => {
    feedback.find({}).populate('renter').exec((err, result) => {
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