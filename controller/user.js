const user = require("../model/user");
const User = require("../model/user");

async function handleAddmembers(req, res) {
    try {
        let gen = 1;
        let isMemberExist = await User.find({userName: req.body.userName});
        console.log(isMemberExist[0]);

        if(isMemberExist[0] === undefined) {
            let parent = req.body.fatherName;
            let temp = await User.findOne({ userName: parent });
            if (!temp) {
                const user = await User.create({
                    fatherName: req.body.fatherName,
                    userName: req.body.userName,
                    generation: gen,
                })
                return res.sendStatus(200);
            }
            else {
                const user = await User.create({
                    fatherName: req.body.fatherName,
                    userName: req.body.userName,
                    generation: temp.generation + 1,
                });
                return res.sendStatus(200);
            }
        }
        else {
            return res.json({msg: 'exist'});
            
        }


    } catch (error) {
        return res.sendStatus(error);
    }

}

async function handleNameSearch(req, res) {
    const name = req.body.userName;

    const user = await User.findOne({ userName: name });
    if (user) {
        return res.json(user);
    }
    else {
        return res.sendStatus(404);
    }
}

async function handlechildNameSearch(req, res) {
    const name = req.body.userName;
    const childs = await User.find({ fatherName: name });

    let childData = [];

    childs.forEach((doc) => {
        childData.push(doc);
    })

    if (childData[0] === undefined) {
        return res.send("No childrens...");
    }
    else {
        return res.json(childData);
    }
}

async function getAllMembers(req, res) {
    const Members = await User.find();
    let allMembersData = [];

    Members.forEach((doc) => {
        allMembersData.push(doc);
    })

    return res.json(allMembersData);
}

module.exports = { handleAddmembers, handleNameSearch, handlechildNameSearch, getAllMembers };