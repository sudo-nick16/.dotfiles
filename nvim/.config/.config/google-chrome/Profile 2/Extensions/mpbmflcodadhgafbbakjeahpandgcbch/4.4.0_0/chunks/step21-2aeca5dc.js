import { bN as requireStep21 } from '../pages/index.js';

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

var step21Exports = requireStep21();

var step21 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': step21Exports
}, [step21Exports]);

export { step21 as s };
