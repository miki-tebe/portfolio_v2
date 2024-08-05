import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    blog: collection({
      label: "Blogs",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        date: fields.date({ label: "Date" }),
        draft: fields.checkbox({ label: "Draft" }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        date: fields.date({ label: "Date" }),
        draft: fields.checkbox({ label: "Draft" }),
        demoURL: fields.text({ label: "Demo URL" }),
        repoURL: fields.text({ label: "Repo URL" }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
    work: collection({
      label: "Work",
      slugField: "company",
      path: "src/content/work/*",
      format: { contentField: "content" },
      schema: {
        company: fields.slug({ name: { label: "Company" } }),
        role: fields.text({ label: "Role" }),
        dateStart: fields.date({ label: "Start Date" }),
        dateEnd: fields.conditional(
          fields.checkbox({ label: "Current", defaultValue: true }),
          {
            true: fields.empty(),
            false: fields.date({ label: "End Date" }),
          }
        ),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
