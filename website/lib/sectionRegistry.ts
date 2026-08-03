export const SECTION_IDS = {
hero: 'hero',
architecture: 'architecture',
platform: 'platform',
technology: 'technology',
topology: 'topology',
economics: 'economics',
command: 'command',
reliability: 'reliability',
final: 'final',
} as const;

export type SectionId =
(typeof SECTION_IDS)[keyof typeof SECTION_IDS];
