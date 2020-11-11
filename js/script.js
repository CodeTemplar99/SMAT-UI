document.querySelectorAll('.login_tweak_btn').forEach(item => {
  item.addEventListener('click', event => {s
    setTimeout(() => {
        window.location.assign("./auth.html")
        //window.open("./auth.html")
    }, 1000);
  })
})