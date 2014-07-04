var demand = require('must');
var naming = require('../lib/harry-roberts-naming');

describe('harry roberts', function () {
    describe('parse', function () {
        it('must not parse not valid string', function () {
            var obj = naming.parse('(*)-(*)');

            demand(obj).be.undefined();
        });

        it('must have one filed if parse block', function () {
            var obj = naming.parse('block');

            Object.keys(obj).must.have.length(1);
        });

        it('must have three params if parse mod of block', function () {
            var obj = naming.parse('block--mod');

            Object.keys(obj).must.have.length(3);
        });

        it('must have two params if parse elem of block', function () {
            var obj = naming.parse('block-elem');

            Object.keys(obj).must.have.length(2);
        });

        it('must have four params if parse mod of elem', function () {
            var obj = naming.parse('block-elem--mod');

            Object.keys(obj).must.have.length(4);
        });

        it('must parse block', function () {
            var obj = naming.parse('block');

            obj.block.must.equal('block');
        });

        it('must parse mod of block', function () {
            var obj = naming.parse('block--mod--val');

            obj.block.must.equal('block');
            obj.modName.must.equal('mod');
            obj.modVal.must.equal('val');
        });

        it('must parse boolean mod of block', function () {
            var obj = naming.parse('block--mod');

            obj.block.must.equal('block');
            obj.modName.must.equal('mod');
            obj.modVal.must.be.true();
        });

        it('must parse elem', function () {
            var obj = naming.parse('block-elem');

            obj.block.must.equal('block');
            obj.elem.must.equal('elem');
        });

        it('must parse mod of elem', function () {
            var obj = naming.parse('block-elem--mod--val');

            obj.block.must.equal('block');
            obj.elem.must.equal('elem');
            obj.modName.must.equal('mod');
            obj.modVal.must.equal('val');
        });

        it('must parse boolean mod of elem', function () {
            var obj = naming.parse('block-elem--mod');

            obj.block.must.equal('block');
            obj.modName.must.equal('mod');
            obj.elem.must.equal('elem');
            obj.modVal.must.be.true();
        });
    });
});
