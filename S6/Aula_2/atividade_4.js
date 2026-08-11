function contagemRegressiva(n) {
  console.log(n);
  if (n == 0) {
    return; 
  }

  contagemRegressiva(n-1);
}

contagemRegressiva(10);