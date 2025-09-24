function perguntou() {
    const input1 = document.querySelector(".input1").value;
    const input2 = document.querySelector(".input2").value;
    
    if (!input1.trim() && !input2.trim()) {
        mostrarModal("Ops! 🤔", "Por favor, preencha pelo menos uma das opções para que a foca possa escolher!");
        return;
    }
    
    if (!input1.trim()) {
        mostrarModal("Escolha Óbvia! 😄", `A foca escolheu: "${input2}"`);
        return;
    }
    
    if (!input2.trim()) {
        mostrarModal("Escolha Óbvia! 😄", `A foca escolheu: "${input1}"`);
        return;
    }
    
    const escolha = Math.floor(Math.random() * 2);
    const opcaoEscolhida = escolha === 0 ? input1 : input2;
    
    mostrarModal("A Foca Decidiu!", `A sábia foca escolheu: "${opcaoEscolhida}"`);
}

function mostrarModal(titulo, mensagem) {
    document.querySelector(".modal-title").innerHTML = titulo;
    document.getElementById("modal-message").textContent = mensagem;
    document.getElementById("modal-overlay").classList.add("show");
}

function fecharModal() {
    document.getElementById("modal-overlay").classList.remove("show");
}

document.getElementById("modal-overlay").addEventListener("click", function(e) {
    if (e.target === this) {
        fecharModal();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        fecharModal();
    }
});
