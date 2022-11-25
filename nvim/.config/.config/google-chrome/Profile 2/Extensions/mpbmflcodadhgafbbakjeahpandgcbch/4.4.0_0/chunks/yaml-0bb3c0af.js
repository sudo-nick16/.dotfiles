import { c7 as requireYaml$1 } from '../pages/index.js';

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

var yamlExports = requireYaml$1();

var yaml = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': yamlExports
}, [yamlExports]);

export { yaml as y };
