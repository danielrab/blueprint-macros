import { MODULE_NAME } from './constants';

export function registerSettings(): void {
  (game as Game).settings.register(MODULE_NAME, 'blueprints', { scope: 'world' });
}
