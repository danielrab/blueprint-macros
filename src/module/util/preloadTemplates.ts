export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/blueprint-macros/templates"
  ];

  return loadTemplates(templatePaths);
}
