$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    function windowOnload() {
        gsap.to(".signin_wrap", {
            delay: 0.3,
            opacity: 1,
            y: 0,

        })

    }
    window.onload = windowOnload;




    // click off alert message!

    $('.alert-success').click(function () {
        $(this).fadeOut();
    })

    // onblur/focus events for register page
    let registerUsernameInput = document.getElementById("id_username");
    let registerPasswordInput = document.getElementById("id_password1");
    let registerPasswordConfirmInput = document.getElementById("id_password2");

    registerUsernameInput.onblur = usernameBlur;
    registerUsernameInput.onfocus = usernameFocus;

    registerPasswordInput.onblur = passwordBlur;
    registerPasswordInput.onfocus = passwordFocus;

    registerPasswordConfirmInput.onblur = passwordConfirmBlur;
    registerPasswordConfirmInput.onfocus = passwordConfirmFocus;

    function usernameFocus() {
        $('#hint_id_username').addClass('show_hint')
    }

    function usernameBlur() {
        $('#hint_id_username').removeClass('show_hint')
    }

    function passwordFocus() {
        $('#hint_id_password1').addClass('show_hint')
    }

    function passwordBlur() {
        $('#hint_id_password1').removeClass('show_hint')
    }

    function passwordConfirmFocus() {
        $('#hint_id_password2').addClass('show_hint')
    }

    function passwordConfirmBlur() {
        $('#hint_id_password2').removeClass('show_hint')
    }





})