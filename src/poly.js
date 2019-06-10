const fER = (a, [k, v]) => {
  a[k] = v;
  return a;
};
Object.fromEntries = entries => entries.reduce(fER, {});
