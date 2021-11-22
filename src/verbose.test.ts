import { assert } from 'chai';
import { verbose } from './verbose.js';

describe('Testing "./verbose"', () => {
    it('[ "--verbose", "npm", "-v" ] -> true', () => {
        const argv = [ '--verbose', 'npm', '-v' ];
        const resp = verbose(argv);

        assert.isTrue(resp);
        assert.lengthOf(argv, 2);
    });

    it('[ "npm", "-v" ]              -> false', () => {
        const argv = [ 'npm', '-v' ];
        const resp = verbose(argv);

        assert.isFalse(resp);
        assert.lengthOf(argv, 2);
    });
});
