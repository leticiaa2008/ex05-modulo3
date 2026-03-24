function iniciarJornada() {
      const nome = document.getElementById("nome").value;
      
      
      let cosmo = +document.getElementById("cosmo").value;

      
      const sacrificar = document.getElementById("sacrificio").checked;
      cosmo = sacrificar ? cosmo * 2 : cosmo;

      let casas = 12;
      let danoPorCasa = 100;

      
      for (let i = 1; i <= casas; i++) {
        cosmo = cosmo >= danoPorCasa ? cosmo - danoPorCasa : cosmo;
      }

    
      let status = cosmo >= 1000 ? "Vivo" : "Derrotado";

    
      let mensagem = (cosmo >= 1000 && status === "Vivo")
        ? `Parabéns, ${nome}! Você salvou Athena com ${cosmo} de cosmo restante!`
        : `Que pena, ${nome}... você falhou. Cosmo final: ${cosmo}`;

      document.getElementById("resultado").innerText = mensagem;
    }