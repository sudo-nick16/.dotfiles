import { as as requireIrpf90 } from '../pages/index.js';

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

var irpf90Exports = requireIrpf90();

var irpf90 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': irpf90Exports
}, [irpf90Exports]);

export { irpf90 as i };
