import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, FC } from 'react';

declare const progressVariants: (props?: {
    variant?: "indeterminate" | "determinate";
    color?: "inherit" | "primary" | "secondary" | "success" | "danger" | "warning";
} & import('class-variance-authority/types').ClassProp) => string;
export interface CircularProgressProps extends Omit<ComponentPropsWithoutRef<'span'>, 'color'>, VariantProps<typeof progressVariants> {
    size?: number;
    value?: number;
    showLabel?: boolean;
}
declare const CircularProgress: FC<CircularProgressProps>;
export default CircularProgress;
