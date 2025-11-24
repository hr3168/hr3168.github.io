/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// 控制滚动行为：后退时恢复滚动位置，前进时滚动到顶部
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  // 如果是通过浏览器后退/前进按钮导航
  const currentPosition = getSavedScrollPosition(location);

  // 如果有保存的滚动位置（说明是后退操作），恢复到该位置
  if (currentPosition) {
    window.setTimeout(() => {
      window.scrollTo(...currentPosition);
    }, 0);
    return false;
  }

  // 否则滚动到顶部（前进到新页面）
  return true;
};
