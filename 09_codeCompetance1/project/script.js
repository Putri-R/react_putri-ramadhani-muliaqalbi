// menampilkan data yang diinput user
function formData() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const questionInput = document.getElementById("question").value;
  
    const dataDetails = `
      Your Data

      First Name    : ${firstName}
      Last Name     : ${lastName}
      Email Address : ${email}
      Your Question : ${questionInput}
  
      Thank you for contacting us!
    `;
    alert(dataDetails);
  }