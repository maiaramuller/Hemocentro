const arrayDoadores = [];
const tiposSanguineosValidos = [
  "A+",
  "B+",
  "AB+",
  "O+",
  "A-",
  "B-",
  "AB-",
  "O-",
];

const menu = () => {
  let opcao = Number(
    prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
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
      sair();
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
};

const cadastrarDoador = () => {
  let nome = prompt("Digite seu nome completo:").toUpperCase();
  let idade = Number(prompt("Digite sua idade:"));
  while (isNaN(idade)) {
    alert("A idade deve ser um numero");
    idade = Number(prompt("Digite sua idade:"));
  }

  let peso = Number(prompt("Digite seu peso:"));
  while (isNaN(peso)) {
    alert("O peso deve ser um numero");
    peso = Number(prompt("Digite seu peso:"));
  }

  let tipoSanguineo = prompt("Digite o seu tipo sanguineo").toUpperCase();
  while (!tiposSanguineosValidos.includes(tipoSanguineo)) {
    alert("Tipo sanguíneo inválido, tente novamente");
    tipoSanguineo = prompt("Digite o seu tipo sanguineo").toUpperCase();
  }

  let ultimaDoacao;
  do {
    ultimaDoacao = prompt("Digite a data da sua última doação (dd/mm/aaaa):");
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(ultimaDoacao)) {
      alert("Formato de data inválido. Use o formato dd/mm/aaaa.");
    }
  } while (!/^\d{2}\/\d{2}\/\d{4}$/.test(ultimaDoacao));

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

  prompt(lista);
  menu();
};

const buscarTipoSangue = () => {
  let tipoSangue = prompt("Digite o tipo sanguíneo desejado:").toUpperCase();

  let doadorPorTipo = arrayDoadores.filter(
    (doador) => doador.tipoSanguineo1 === tipoSangue
  );

  let lista = "---------------------\n";
  lista += "RESULTADO DA BUSCA::\n";
  lista += "---------------------\n";
  lista += "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n";
  lista +=
    "-----------------------------------------------------------------\n";
  if (doadorPorTipo.length === 0) {
    console.log("Nenhum doador encontrado com o tipo sanguíneo especificado.");
  } else {
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
  }
  lista +=
    "-----------------------------------------------------------------\n";

  prompt(lista);
  menu();
};

const buscarPorData = () => {
  let dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
  let dataUltimaDoacao = arrayDoadores.filter(
    (doador) => doador.ultimaDoacao1 === dataDesejada
  );

  let lista = "---------------------\n";
  lista += "RESULTADO DA BUSCA::\n";
  lista += "---------------------\n";
  lista += "NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n";
  lista +=
    "-----------------------------------------------------------------\n";
  if (dataUltimaDoacao.length === 0) {
    console.log("Nenhum doador encontrado na data especificada.");
  } else {
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
  }
  lista +=
    "-----------------------------------------------------------------\n";

  prompt(lista);
  menu();
};
const sair = () => {
  alert("Programa encerrado, volte sempre!");
};

menu();
