import { fs as requireRobotframework } from '../pages/index.js';

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

var robotframeworkExports = requireRobotframework();

var robotframework = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': robotframeworkExports
}, [robotframeworkExports]);

export { robotframework as r };
