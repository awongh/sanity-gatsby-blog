export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e676baf7124264d7b5d1e4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jrnjxwxn",
                  apiId: "825b4603-0b5e-49c6-b3b5-009c42790d05",
                },
                {
                  buildHookId: "60e676baacf8546145c36751",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-b35jis8h",
                  apiId: "464f6c54-7e07-4d12-90f0-807f3f8217a7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/awongh/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-b35jis8h.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
