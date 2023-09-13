const arrayDoadores = [];

const menu = () => {
  let opcao = Number(
    prompt(`
      ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
      1. Cadastrar doador
      2. Listar doadores
      3. Buscar doador por tipo sanguíneo
      4. Buscar doador por data da última doação
      5. Sair
      Escolha uma opção:`)
  );

  switch (opcao) {
    case 1:
      cadastrarDoador();
      break;
    case 2:
      listarDoadores();
      break;
    case 3:
      buscarTipoSangue();
      break;
    case 4:
      buscarPorData();
      break;
    case 5:
      // Sair
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
};

const cadastrarDoador = () => {
  let nome = prompt("Digite seu nome completo:");
  let idade = Number(prompt("Digite sua idade:"));
  let peso = Number(prompt("Digite seu peso:"));
  let tipoSanguineo = prompt("Digite o seu tipo sanguineo");
  let ultimaDoacao = prompt("Digite a data da sua última doação:");

  //const { nome1, idade1, peso1, tipoSanguineo1, ultimaDoacao1 } = doador;

  const doador = {
    nome1: nome,
    idade1: idade,
    peso1: peso,
    tipoSanguineo1: tipoSanguineo,
    ultimaDoacao1: ultimaDoacao,
  };

  arrayDoadores.push(doador);
  menu();
};

const listarDoadores = () => {
  let lista = "---------------------\n";
  lista += "LISTAGEM DE DOADORES:\n";
  lista += "---------------------\n";
  lista += "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n";
  lista +=
    "-----------------------------------------------------------------\n";

  for (let i = 0; i < arrayDoadores.length; i++) {
    const doador = arrayDoadores[i];
    lista += `${doador.nome1.padEnd(17)} | ${doador.idade1
      .toString()
      .padStart(5)} | ${doador.peso1
      .toString()
      .padStart(4)} | ${doador.tipoSanguineo1.padEnd(15)} | ${
      doador.ultimaDoacao1
    }\n`;
  }

  lista +=
    "-----------------------------------------------------------------\n";

  console.log(lista);
  menu();
};

const buscarTipoSangue = () => {
  let tipoSangue = prompt("Digite qual o tipo sanguineo você deseja:");

  if (tipoSangue === "-A" || "+A") {
    console.log(`
    
    
    
    
    `);
  } else {
    if (tipoSangue === "-B" || "+B") {
      console.log(`
        
    `);
    } else {
      if (tipoSangue === "-AB" || "+AB") {
        console.log(`
    
    `);
      }
    }
  }

  menu();
};

const buscarPorData = () => {
  menu();
};
menu();
