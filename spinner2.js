process.stdout.write('hello from spinner2.js... \rheyyy\n');
["|","/","-","\\","+","◜","◝","◞","◟","◠","◡","○",""].forEach((x, index, self) =>
  setTimeout(() => process.stdout.write(`${index !== self.length - 1 && `\r${x}   ` || "\rAll done!\n"}`), 100 + (200 * index)));

