export const codesandbox = () => {
  /**
   * @todo do we have a simple canary for this?
   */
  if (typeof process.env.CODESANDBOX_HOST === "undefined") return null;

  return {
    name: "codesandbox-projects-plugin",
    /**
     * @todo maybe merge here instead of returning partial?
     * this works for unconfigured configs, does it also work for configured ones?
     */
    config: () => ({
      server: {
        hmr: {
          clientPort: 443,
        },
      },
    }),
  };
};

export default codesandbox