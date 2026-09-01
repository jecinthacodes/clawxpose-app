export type AppPlatform = 'web' | 'mobile';

export const APP_NAME = 'Clawxpose';

export function getWelcomeMessage(platform: AppPlatform): string {
  return `Welcome to ${APP_NAME} (${platform})`;
}
