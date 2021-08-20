// Monkeypatch to show regex as strings when logging as JSON
// Object.defineProperty(RegExp.prototype, 'toJSON', {
//   value: RegExp.prototype.toString,
// });

const findRuleInConfig = (config) => (regexKeyword) => {
  return config.module.rules.find((rule) => {
    return rule.test?.toString().includes(regexKeyword);
  });
};

exports.onCreateWebpackConfig = ({ getConfig }) => {
  const findRule = findRuleInConfig(getConfig());

  // Rewrite SVG rule
  const svgRule = findRule('svg');

  const svgUse = svgRule.use;
  delete svgRule.use;

  svgRule.oneOf = [
    {
      resourceQuery: /external/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      }],
    },
    {
      use: svgUse,
    },
  ];


  // Rewrite media rule
  const mediaRule = findRule('jpg');

  const mediaUse = mediaRule.use;
  delete mediaRule.use;

  mediaRule.oneOf = [
    {
      resourceQuery: /external/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'static/[name].[ext]',
        },
      }],
    },
    {
      use: mediaUse,
    },
  ];
};
