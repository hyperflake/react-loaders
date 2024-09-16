import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, FC } from 'react';

declare const progressVariants: (props?: {
    variant?: "indeterminate" | "determinate";
    color?: "inherit" | "primary" | "secondary" | "success" | "danger" | "warning";
} & import('class-variance-authority/types').ClassProp) => string;
export interface LinearProgressProps extends Omit<ComponentPropsWithoutRef<'span'>, 'color'>, VariantProps<typeof progressVariants> {
    value?: number;
    showLabel?: boolean;
    height?: number;
}
declare const LinearProgress: FC<LinearProgressProps>;
export default LinearProgress;
