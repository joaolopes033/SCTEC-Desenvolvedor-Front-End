



  function teste() {
    let nome = 'José';
    //console.log('this.nome', this.nome);

    let obj1 = {
      nome: 'Maria',
      exibirNome: function() {
        console.log('exibirNome', nome);
      },
      exibirNomeThis: function() {
        console.log('exibirNomeThis', this.nome);
      }
    }
    
    obj1.exibirNome();
    obj1.exibirNomeThis();
  }

  let nome = 'João';

  let obj2 = {
    nome: 'Eduardo',
    exibirNome: function() {
      console.log('exibirNome', nome);
    },
    exibirNomeThis: function() {
      console.log('exibirNomeThis', this.nome);
    }
  }
  
   obj2.exibirNome();
   obj2.exibirNomeThis();

  teste();

