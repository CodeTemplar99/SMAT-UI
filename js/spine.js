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

let bal= 0
function showBar() {
    bal++
    if (bal % 2 != 0) {
        $('#exampleModal').modal('show')
    }
    else {
        $('#exampleModal').modal('hide')
    }
}