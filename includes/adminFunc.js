//index function 
export const authAdmin = async (req, res) => {

    //store form data to variable data
    let data = req.body
    res.render("/dashboard")
};

