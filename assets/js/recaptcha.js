let captchas = [];

let onloadCallback = function() {
    document.querySelectorAll('.g-recaptcha').forEach(function(el) {
        captchas[el.id] = grecaptcha.render(el, el.dataset.id);
    });
}

function resetReCaptcha(id) {
    let widget = captchas[id];
    grecaptcha.reset(widget);
}
