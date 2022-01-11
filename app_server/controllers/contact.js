/* GET contact view */
const about = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways'});
};

module.exports = {
    contact
};