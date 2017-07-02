'use strict';

const describe = require('mocha').describe;
const it = require('mocha').it;

const expect = require('chai').expect;

const simplifyCell = require('../util').simplifyCell;

const parse = require('../../lib/parse');

describe('parse.enb', () => {
    it('should throw error while parsing empty deps property if format not given', () => {
        expect(parse('({ deps: [] })')).to.deep.equal([]);
    });

    it('should parse blocks property with single entity', () => {
        expect(
            parse('({ format: \'enb\', deps: [{ block: \'doesnt-matter\', elems: [\'elem\'] }] })').map(simplifyCell)
        ).to.deep.equal([
            { entity: { block: 'doesnt-matter' }, tech: null },
            { entity: { block: 'doesnt-matter', elem: 'elem' }, tech: null }
        ]);
    });

    it('should parse empty legacy blocks property of object', () => {
        expect(parse({ format: 'enb', deps: [] })).to.deep.equal([]);
    });

    it('should parse blocks property with single entity of object', () => {
        expect(
            parse({ format: 'enb', deps: [{ block: 'doesnt-matter', elems: ['elem'] }] }).map(simplifyCell)
        ).to.deep.equal([
            { entity: { block: 'doesnt-matter' }, tech: null },
            { entity: { block: 'doesnt-matter', elem: 'elem' }, tech: null }
        ]);
    });
});
