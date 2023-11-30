let nome = "Cley";
let quantidadeXP = 8002;

switch(true){

  case quantidadeXP < 1000:
    console.log("O Héroi " + nome + " está no nível Ferro");
    break;

  case quantidadeXP >= 1001 && quantidadeXP <= 2000:
    console.log("O Héroi " + nome + " está no nível Bronze");
    break;

  case quantidadeXP >= 2001 && quantidadeXP <= 6000:
    console.log("O Héroi " + nome + " está no nível Prata");
    break;

  case quantidadeXP >= 6001 && quantidadeXP <= 7000:
    console.log("O Héroi " + nome + " está no nível Ouro");
    break;
  
  case quantidadeXP >= 7001 && quantidadeXP <= 8000:
    console.log("O Héroi " + nome + " está no nível Platina");
    break;

  case quantidadeXP >= 8001 && quantidadeXP <= 9000:
    console.log("O Héroi " + nome + " está no nível Ascendente");
    break;

  case quantidadeXP >= 9001 && quantidadeXP <= 10.000:
    console.log("O Héroi " + nome + " está no nível Imortal");
    break;
  
  case quantidadeXP >= 10001:
    console.log("O Héroi " + nome + " está no nível Radiante");
    break;
}
