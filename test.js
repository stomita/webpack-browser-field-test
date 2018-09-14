const targets = ['web', 'electron-renderer'];

for (const target of targets) {
  const getMessage = require(`./index.${target}.bundle`).getMessage;
  console.log('----------')
  console.log(`target = ${target}`);
  console.log(getMessage());
}
