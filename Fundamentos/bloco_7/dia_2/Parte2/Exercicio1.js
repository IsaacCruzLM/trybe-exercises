const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const insertKeyInObj = (obj, key, value) => {
    return obj[key] = value;
  };

  insertKeyInObj(lesson2, 'turno', 'manhã');

  const listKeyObj = (obj) => {
    return Object.keys(obj);
  };

  listKeyObj(lesson2);

  const lengthOfObj = (obj) => {
    return Object.values(obj).length;
  };

  lengthOfObj(lesson2);

  const valuesOfObj = (obj) => {
    return Object.values(obj)
  };

  valuesOfObj(lesson2);

  const allLessons = Object.assign({},{lesson1, lesson2, lesson3});

  const allEstudants = (obj) => {
    let allEstudants = 0;
    for (let index in obj){
        allEstudants += obj[index]['numeroEstudantes'];
    }
    return allEstudants;
  } 

  allEstudants(allLessons);

  const getValue = (obj, position) => {
    return Object.values(obj)[position];
  }

  getValue(lesson1, 0);

  const verifyEntrie = (obj, key, value) => {
    return (Object.keys(obj).includes(key) && obj[key] === value) ? true : false;
  }

  verifyEntrie(lesson3, 'turno', 'noite');//true
  verifyEntrie(lesson3, 'materia', 'Maria Clara');//false

  // Exercicios Bônus

  const matEstudants = (obj) => {
    let estudantsNumebr = 0;
    for (let index in obj) {
      if (obj[index]['materia'] === 'Matemática'){
        estudantsNumebr += obj[index]['numeroEstudantes'];
      };
    };
    return estudantsNumebr;
  }

  console.log(matEstudants(allLessons));

  const createRepost = (obj, prof) => {
    const repost = {
      professor: prof,
      aulas: [],
      estudantes: 0
    }
    for(let index in obj) {
      if (obj[index]['professor'] === prof) {
        repost.aulas.push(obj[index]['materia']);
        repost.estudantes += obj[index]['numeroEstudantes']
      }
    }
    return repost;
  }

  console.log(createRepost(allLessons, 'Maria Clara'));
