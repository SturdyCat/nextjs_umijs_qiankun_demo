export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('应用加载之前', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('应用 render 之前触发', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('应用卸载之后触发', props);
  },
};