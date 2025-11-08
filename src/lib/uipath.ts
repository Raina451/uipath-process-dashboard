import { UiPath } from '@uipath/uipath-typescript';

/**
 * Initialized UiPath SDK client
 */
export const uipath = new UiPath({
    baseUrl: 'https://staging.uipath.com/',
    orgName: 'devcon25',
    tenantName: 'Default',
    secret: 'rt_A19EA4F9C01066E82538D396C7580C844BEDBA704D4B9714494D4310602E00D5-1'
});

export type { UiPath } from '@uipath/uipath-typescript';