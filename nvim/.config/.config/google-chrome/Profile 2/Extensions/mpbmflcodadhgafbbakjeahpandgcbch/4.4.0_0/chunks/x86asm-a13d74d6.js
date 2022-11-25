import { c3 as requireX86asm } from '../pages/index.js';

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var x86asmExports = requireX86asm();

var x86asm = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': x86asmExports
}, [x86asmExports]);

export { x86asm as x };
