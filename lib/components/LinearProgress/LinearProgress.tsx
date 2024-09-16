import { VariantProps, cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef, FC, useMemo } from 'react';

const progressVariants = cva(['hf-linear-progressbar'], {
    variants: {
        variant: {
            indeterminate: ['hf-linear-progressbar-indeterminate'],
            determinate: ['hf-linear-progressbar-determinate'],
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

export interface LinearProgressProps
    extends Omit<ComponentPropsWithoutRef<'span'>, 'color'>,
        VariantProps<typeof progressVariants> {
    value?: number;
    showLabel?: boolean;
    height?: number;
}

const LinearProgress: FC<LinearProgressProps> = (props) => {
    const { value, showLabel, height = 4, variant = 'indeterminate', color, className, ...rest } = props;

    const offset = useMemo(() => {
        if (variant === 'indeterminate') return 0;

        let _value = Math.max(0, value);
        _value = Math.min(_value, 100);

        return _value;
    }, [value, variant]);

    return (
        <span role="progressbar" {...rest} className={progressVariants({ variant, color, className })}>
            <svg width="100%" height={height} style={{ borderRadius: height / 2 }}>
                <rect
                    fill="currentColor"
                    fillOpacity={0.2}
                    width="100%"
                    height="100%"
                    rx={height / 2}
                    ry={height / 2}
                />

                <rect
                    className="hf-linear-progressbar-line"
                    fill="currentColor"
                    width={`${offset}%`}
                    height="100%"
                    rx={height / 2}
                    ry={height / 2}
                />
            </svg>

            {showLabel && variant === 'determinate' && <span className="hf-linear-progressbar-label">{offset}%</span>}
        </span>
    );
};

export default LinearProgress;
