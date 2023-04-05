const { override, useBabelRc } = require('customize-cra');

export default override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);
