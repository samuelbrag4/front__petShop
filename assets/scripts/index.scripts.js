const public_key = "210LyZFrbHs4Wi7BO";
const secret_key = "tJuOGAtKBQG05EKVxZANP";

(function () {
  emailjs.init(public_key);
})();

document
  .getElementById("contatoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const params = {
      nome: nome,
      email: email,
      mensagem: mensagem,
    };

    const serviceID = "service_8gfzkks";
    const templateID = "template_65nvz59";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
        console.log("Email enviado com sucesso!", res);
        alert("Email enviado com sucesso!");
      })
      .catch((err) => console.error("Erro ao enviar email:", err));
  });
