module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current', // Transpile for the current Node.js version
          },
        },
      ],
    ],
  };
  