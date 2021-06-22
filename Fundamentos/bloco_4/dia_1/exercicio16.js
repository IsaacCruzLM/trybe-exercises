let salario = 3500.00;
let salarioInss;
let salarioLiq

switch (true){
    case (salario<=1556.94):
        salarioInss = salario - (salario*0.08);
        break;

    case (salario>=1556.95 && salario<=2594.92):
        salarioInss = salario - (salario*0.09);
        break;

    case (salario>=2594.93 && salario<=5189.82):
        salarioInss = salario - (salario*0.11);
        break;

    default:
        salarioInss = salario - 570.88;

}

switch (true){
    case (salarioInss<=1903.98):
        salarioLiq = salarioInss;
        break;

    case (salarioInss>=1903.99 && salarioInss<=2826.65):
        salarioLiq = salarioInss - (salarioInss*0.075) + 142.80;
        break;

    case (salarioInss>=2826.66 && salarioInss<=3751.05):
        salarioLiq = salarioInss - (salarioInss*0.15) + 354.80;
        break;

    case (salarioInss>=3751.06 && salarioInss<=4664.68):
        salarioLiq = salarioInss - (salarioInss*0.225) + 636.13;
        break;

    default:
        salarioLiq = salarioInss - (salarioInss*0.275) + 869.36;
        break;
}


console.log(salarioLiq);