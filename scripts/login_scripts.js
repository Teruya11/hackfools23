const usrname_input = document.querySelector("#usrname");
const passwd_input = document.querySelector("#passwd");
const login_btn = document.querySelector("#login")

function submit() {
    let usrname = usrname_input.value;
    let passwd = passwd_input.value;

    login_btn.innerText = "Submitting...";

    if (usrname == "Bathos" && passwd == "acelga") {
        window.location.href = "../index.html";
    }
    else {
        usrname_input.value = "";
        passwd_input.value = "";
        
        setTimeout(alert_call, 300);
    }
}

function alert_call() {
    alert("Nome de usuário ou senha incorretos");
    login_btn.innerText = "Submit";
}