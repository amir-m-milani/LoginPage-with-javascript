const userbox = document.querySelectorAll("input")[0];
const passbox_hidden = document.querySelectorAll("input")[1];
const passbox_visible = document.querySelectorAll("input")[2];
const eye_closed = document.querySelector(".eye-closed");
const eye_open = document.querySelector(".eye-open");
const subButton = document.querySelector("button");
const warn_text = document.querySelector(".check-pass");
const check_pass_bar = document.querySelector(".backgroundColor");

eye_closed.addEventListener("click", function () {
    passbox_visible.value = passbox_hidden.value;
    passbox_hidden.classList.add("hidden");
    passbox_visible.classList.remove("hidden");
    eye_closed.classList.add("hidden");
    eye_open.classList.remove("hidden");
});

eye_open.addEventListener("click", function () {
    passbox_hidden.value = passbox_visible.value;
    passbox_visible.classList.add("hidden");
    passbox_hidden.classList.remove("hidden");
    eye_open.classList.add("hidden");
    eye_closed.classList.remove("hidden");
});

passbox_hidden.addEventListener("input", function () {
    warn_text.classList.remove("hidden");
    check_pass_bar.className = "";
    switch (check_pass(passbox_hidden.value)) {
        case 3:
            warn_text.textContent = "weak...";
            check_pass_bar.classList.add("backgroundColor-weak");
            break;
        case 2:
            warn_text.textContent = "medium...";
            check_pass_bar.classList.add("backgroundColor-medium");
            break;
        case 1:
            warn_text.textContent = "good...";
            check_pass_bar.classList.add("backgroundColor-good");
            break;
        case 0:
            warn_text.textContent = "excelent...";
            check_pass_bar.classList.add("backgroundColor-excelent");
            break;
        default:
            warn_text.textContent = "empty...";
    }
    // console.log(passbox_hidden.value);
});
passbox_visible.addEventListener("input", function () {
    warn_text.classList.remove("hidden");
    check_pass_bar.className = "";
    switch (check_pass(passbox_visible.value)) {
        case 3:
            warn_text.textContent = "weak...";
            check_pass_bar.classList.add("backgroundColor-weak");
            break;
        case 2:
            warn_text.textContent = "medium...";
            check_pass_bar.classList.add("backgroundColor-medium");
            break;
        case 1:
            warn_text.textContent = "good...";
            check_pass_bar.classList.add("backgroundColor-good");
            break;
        case 0:
            warn_text.textContent = "excelent...";
            check_pass_bar.classList.add("backgroundColor-excelent");
            break;
        default:
            warn_text.textContent = "empty...";
    }
    // console.log(passbox_hidden.value);
});

function check_pass(str) {


    let count_u = 0, count_l = 0, count_s = 0, count_n = 0, count_zero = 0;
    let counting = [0, 0, 0, 0];
    //             [n,u,l,s] 

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            count_n++;
            counting[0] = count_n;
        }
        else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            count_u++;
            counting[1] = count_u;
        }
        else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            count_l++;
            counting[2] = count_l;
        }
        else {
            count_s++;
            counting[3] = count_s;
        }
    }
    //[2,3,0,1]
    for (let i = 0; i < 4; i++) {
        if (counting[i] == 0)
            count_zero++;
    }
    return count_zero;
}


