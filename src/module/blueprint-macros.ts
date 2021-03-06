/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your module.
 */

// Import TypeScript modules
import { registerSettings } from './util/settings';
import { preloadTemplates } from './util/preloadTemplates';
import { BlueprintEditor } from './editor';

declare global {
  const BlueprintMacros: {
    Editor: typeof BlueprintEditor;
  };
  interface Window {
    BlueprintMacros: typeof BlueprintMacros;
  }
}
window.BlueprintMacros = {
  Editor: BlueprintEditor,
};

// Initialize module
Hooks.once('init', async () => {
  console.log('blueprint-macros | Initializing blueprint-macros');

  // Assign custom classes and constants here

  // Register custom module settings
  registerSettings();

  // Preload Handlebars templates
  await preloadTemplates();

  // Register custom sheets (if any)
});

// Setup module
Hooks.once('setup', async () => {
  // Do anything after initialization but before
  // ready
});

// When ready
Hooks.once('ready', async () => {
  // Do anything once the module is ready
});

// Add any additional hooks if necessary
