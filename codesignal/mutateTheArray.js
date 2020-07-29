function mutateTheArray(n, a) {
  const b = [];
  for (i = 0; i <= n - 1; i++) {
      b[i] = (a[i - 1] || 0) + (a[i] || 0) + (a[i + 1] || 0);
  }
  
  return b;
}