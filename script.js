// Basit form gönderim bildirimi (backend yoksa)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("interestForm");
    if (form) {
        form.addEventListener("submit", function(e){
            e.preventDefault();
            alert("Bilgileriniz başarıyla gönderildi! Teşekkürler.");
            form.reset();
        });
    }
});