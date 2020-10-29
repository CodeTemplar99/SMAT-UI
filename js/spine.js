new Vue({
    el: '#app',
    data: {
        sign_up_con: true,
        login_btn:true,
        login_con: false,
        sign_up_btn:false

    },
    methods: {
        to_login: function () {
            if (this.sign_up_con = true) {
                this.sign_up_btn = true;
                this.login_con = true;
                this.login_btn = false;
                this.sign_up_con = false;
            }
            
        },

        to_sign_up: function () {
            if (this.login_con = true) {
                 this.sign_up_btn = false;
                this.login_con = false;
                this.login_btn = true;
                this.sign_up_con = true;
            }
            
        }
    }
})