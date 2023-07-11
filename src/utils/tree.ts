var _ = require('lodash');

/**
 * 合并路由，得到最终的路由
 * @param mainRoutes 主路由，一般是定制化路由
 * @param minorRoutes 辅路由，一般是portal内嵌的路由
 * @returns 合并后的路由
 */
function mergeRoutesDeep(mainRoutes, minorRoutes) {
  const finalRoutes = [];
  _.forEach(minorRoutes, (minorRoute) => {
    let hasSimilar = false;
    _.forEach(mainRoutes, (mainRoute) => {
      if (mainRoute.path === minorRoute.path && mainRoute.redirect === minorRoute.redirect) {
        hasSimilar = true;
        if (mainRoute.routes && minorRoute.routes) {
          const targetRoute = {
            ...mainRoute,
            routes: mergeRoutesDeep(mainRoute.routes, minorRoute.routes),
          };
          finalRoutes.push(targetRoute);
        } else {
          // 定制化路由或者原生路由没有子路由，则按照定制化的路由配置来
          finalRoutes.push(mainRoute);
        }
        // 提前退出当前内循环
        return false;
      }
      return true;
    });
    if (!hasSimilar) {
      finalRoutes.push(minorRoute);
    }
  });
  return finalRoutes;
}

module.exports = mergeRoutesDeep;
