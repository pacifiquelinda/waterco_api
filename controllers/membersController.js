import Member from "../models/members.model.js";

// Add a Member
export async function addMember(req, res) {
    console.log(req.body);
    try {
        let member = await Member.create(req.body);  
        if (member) {
            res.status(200).json({
                success: true,
                message: 'Member created successfully',
                data: member
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Member could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View a member
export async function viewMember(res, req) {
    try {
        let allmembers = await Member.findAll({ where: { member_id: req.params.id } });
        if (allmembers) {
            res.json({
                success: true,
                message: 'Member records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View all members
export async function viewAllMembers(req, res) {
    try {
        let allmembers = await Member.findAll();
        if (allmembers) {
            res.json({
                success: true,
                message: 'Member records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Update member record
export async function updateMember(req, res) {
    try {
        let record = await Member.update(req.body, {
            where: { CustomerId: req.params.id },
          });
        if (record) {
            res.status(200).json({
                success: true,
                message: 'Member records updated successfully',
                data: record,
            })
        } else {
            res.json({
                success: true,
                message: 'Member not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Delete a member
export async function deleteMember(req, res) {
    try {
        let member = await Member.delete({ where: { CustomerId: req.params.id } });
        if (member) {
            res.json({
                success: true,
                message: 'Member was successfully deleted',
                data: member
            })
        } else {
            res.json({
                success: true,
                message: 'Member not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}