import { Factory, StylesApiProps } from '@mantine/core';
import { RingProgressFactory, RingProgressProps, RingProgressSection } from './RingProgress';
export type RingsProgressStylesNames = 'root' | 'ring';
export type RingsProgressCssVariables = {
    root: '--rings-none';
};
export interface RingsProgressProps extends Omit<RingProgressProps, 'sections' | 'rootColor'>, StylesApiProps<RingProgressFactory> {
    /** List of the rings */
    rings: RingProgressSection[];
    /** Gap between rings */
    gap?: number;
    /** Root color alpha */
    rootColorAlpha?: number;
}
export type RingsProgressFactory = Factory<{
    props: RingsProgressProps;
    ref: HTMLDivElement;
    stylesNames: RingsProgressStylesNames;
    vars: RingsProgressCssVariables;
}>;
export declare const RingsProgress: import("@mantine/core").MantineComponent<{
    props: RingsProgressProps;
    ref: HTMLDivElement;
    stylesNames: RingsProgressStylesNames;
    vars: RingsProgressCssVariables;
}>;
