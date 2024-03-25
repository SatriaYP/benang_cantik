document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-contact');
    const submitButton = form.querySelector('.button');

    submitButton.addEventListener('click', function(event) {
      event.preventDefault();

      const inputs = form.querySelectorAll('input, textarea');

      let isFilled = true;
      inputs.forEach(function(input) {
        if (input.value.trim() === '') {
          isFilled = false;
        }
      });

      if (isFilled) {
        alert('Terima kasih telah mengisi formulir ini');
        location.reload()
      } else {
        alert('Mohon isi semua bagian formulir terlebih dahulu');
      }
    });
});
