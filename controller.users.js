const Users = require("./lendsqr_users.json");


exports.getAllUsers = (_, res) => {
    const allUsersData = Users.map(user => ({
            id:           user.id,
            user_name:    user.user_name,
            email:        user.email,
            phone_number: user.phone_number,
            organization: user.organization,
            status:       user.status,
            date_joined:  user.date_joined,
            loan:         user.ed_and_emp.loan_repayment,
            savings:      user.ed_and_emp.savings,
        })
    )

    res.status(200).json({
        status: true,
        message: null,
        data: allUsersData,
    })
}

exports.getUserDetails = (req, res) => {
    const id = req.params.id;

    const user = Users.find(user => user.id === id)

    if (user) {
        res.status(200).json({
            status: true,
            message: null,
            data: user,
        })
    } else {
        res.status(404).json({
            status: false,
            message: "user not found",
            data: null
        })
    }
}

