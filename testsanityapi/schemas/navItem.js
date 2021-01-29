export default {
  name: "navItem",
  type: "object",
  title: "NavItem",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Text"
    },
    {
      name: "navItemUrl",
      type: "link", // references link object
      title: "Nav Item URL"
    }
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "navItemUrl"
    }
  }
};
