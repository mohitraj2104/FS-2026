const userDetails = (req, res) => {
    res.send({
        name: "Mohit Rajput",
        age: 22,
        city: "Bhubaneshwar",
        country: "India"
    });
}
const createUser = (req, res) => {
    let data = req.body;
    res.send(data);
}
let obj={
    "india":"Hey i am Indian",
    "usa":"Hey i am American",
    "china":"Hey i am Chinese",
}
const getUser = (req, res) => {
    let paramData = req.params;
    let queryData = req.query;
    console.log(queryData);
    console.log(obj[paramData.name]);
    res.send({ status: "okay", intro: obj[paramData.name], name:queryData.name });
}
export {userDetails, createUser, getUser};