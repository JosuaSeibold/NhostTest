// In functions/hello/[name].js
export default (req, res) => {
    res.status(200).send(`Hello ${req.query.name}!`);
};