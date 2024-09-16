import { VariantProps, cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef, FC, useMemo } from 'react';

const progressVariants = cva(['hf-circular-progressbar'], {
    variants: {
        variant: {
            indeterminate: ['hf-circular-progressbar-indeterminate'],
            determinate: ['hf-circular-progressbar-determinate'],
        },
        color: {
            inherit: ['hf-progressbar-inherit'],
            primary: ['hf-progressbar-primary'],
            secondary: ['hf-progressbar-secondary'],
            success: ['hf-progressbar-success'],
            danger: ['hf-progressbar-danger'],
            warning: ['hf-progressbar-warning'],
        },
    },
    defaultVariants: {
        variant: 'indeterminate',
        color: 'primary',
    },
});

const CIRCUMFERENCE = 2 * Math.PI * 20.2;

export interface CircularProgressProps
    extends Omit<ComponentPropsWithoutRef<'span'>, 'color'>,
        VariantProps<typeof progressVariants> {
    size?: number;
    value?: number;
    showLabel?: boolean;
}

const CircularProgress: FC<CircularProgressProps> = (props) => {
    const { size = 40, value = 0, showLabel = false, variant = 'indeterminate', color, className, ...rest } = props;

    const offset = useMemo(() => {
        let _value = Math.max(0, value);
        _value = Math.min(_value, 100);

        return CIRCUMFERENCE - (CIRCUMFERENCE * _value) / 100;
    }, [value]);

    const fontSize = useMemo(() => Math.min(size / 4), [size]);

    return (
        <span role="progressbar" {...rest} className={progressVariants({ variant, color, className })}>
            <svg viewBox="22 22 44 44" width={size} height={size}>
                <circle
                    strokeOpacity={0.2}
                    cx={44}
                    cy={44}
                    r={20}
                    fill="none"
                    strokeWidth={4}
                    stroke="currentColor"
                    strokeDasharray={CIRCUMFERENCE}
                />
                <circle
                    className="hf-circular-progressbar-circle"
                    cx={44}
                    cy={44}
                    r={20}
                    fill="none"
                    strokeWidth={4}
                    stroke="currentColor"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {showLabel && variant === 'determinate' && (
                <span className="hf-circular-progressbar-label" style={{ fontSize }}>
                    {value}%
                </span>
            )}
        </span>
    );
};

export default CircularProgress;
