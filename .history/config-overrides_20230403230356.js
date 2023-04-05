const { override, useBabelRc } = require('customize-cra');

module.export = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);
