new Vue({
    el: '#app',
    data: {
        sign_up_con: true,
        login_btn:true,
        login_con: false,
        sign_up_btn:false,
        recovery_con:false

    },
    methods: {
        to_login: function () {
            if (this.sign_up_con = true) {
                this.sign_up_btn = true;
                this.login_con = true;
                this.login_btn = false;
                this.sign_up_con = false;
                this.recovery_con = false;
            }
            
        },

        to_sign_up: function () {
            if (this.login_con = true) {
                 this.sign_up_btn = false;
                this.login_con = false;
                this.recovery_con = false;
                this.login_btn = true;
                this.sign_up_con = true;
            }
            
        },
        recovery_mode: function () {
            this.login_con = false;
            this.recovery_con = true;
            console.log("clicked");
            
        }
        
    }
})

let a= 0
function show_Dm_options() {
    a++
    (a % 2 != 0) ? $('#DM_preference_modal').modal('show') : $('#DM_preference_modal').modal('hide');
}

let b= 0
function showWhatsApp() {
    b++
    (b % 2 != 0) ? $('#whatsApp_account_modal').modal('show') : $('#whatsApp_account_modal').modal('hide');
}

let c= 0
function showTwitter() {
    c++
    (c % 2 != 0) ? $('#twitter_account_modal').modal('show') : $('#twitter_account_modal').modal('hide');
}

let d= 0
function showBar() {
    d++
    (d % 2 != 0) ? $('#delete_account_modal').modal('show') : $('#delete_account_modal').modal('hide');
}
