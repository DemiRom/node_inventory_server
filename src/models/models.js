'use strict';

module.exports = {
    /**
     * The user object model
     */
    User : {
        user_id : null,
        first_name : "",
        last_name : "",
        email : "",
        phone_number : "",
        hashed_password : "",

        sanitize_phone_number : function()
        {
            if(this.phone_number.contains(' ') || this.phone_number.contains('-'))
                this.phone_number = this.phone_number.replace('-', '').replace(' ', '');
        },
    },

    /**
     * The inventory object model
     */
    Inventory : {

    }
};