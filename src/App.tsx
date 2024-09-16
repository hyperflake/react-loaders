import { CircularProgress, LinearProgress } from 'lib/index';
import 'lib/style.scss';
import { useEffect, useState } from 'react';

const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'inherit'] as const;
const sizes = [12, 24, 32, 48, 56, 64];

function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((prevValue) => {
                if (prevValue >= 100) {
                    return 0;
                }
                return prevValue + 10;
            });
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold">Progress Loaders</h1>
            <p className="text-gray-800 leading-7 mt-4">
                Progress indicators are key UI elements that inform users about the status of ongoing processes, like
                loading or saving. There are two main types of progress indicators:
                <ul>
                    <li>
                        <b>Determinate Indicators:</b> These indicators show the progress of an operation with a
                        specific end.
                    </li>
                    <li>
                        <b>Indeterminate Indicators:</b> These indicators signal ongoing activity without specifying how
                        long it will take.
                    </li>
                </ul>
            </p>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Circular</h2>

                <div className="space-y-6 mt-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Default CircularProgress by Color</h3>
                        <div className="flex gap-6 border border-black/10 rounded-lg p-6">
                            {colors.map((color) => (
                                <div key={color}>
                                    <div className="text-sm text-medium mb-2">
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </div>
                                    <CircularProgress color={color} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Determinate CircularProgress by Color</h3>
                        <div className="flex gap-6 border border-black/10 rounded-lg p-6">
                            {colors.map((color) => (
                                <div key={color}>
                                    <div className="text-sm text-medium mb-2">
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </div>
                                    <CircularProgress variant="determinate" color={color} value={value} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Determinate CircularProgress with Label</h3>
                        <div className="flex gap-6 border border-black/10 rounded-lg p-6">
                            {colors.map((color) => (
                                <div key={color}>
                                    <div className="text-sm text-medium mb-2">
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </div>
                                    <CircularProgress variant="determinate" color={color} value={value} showLabel />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Default CircularProgress by Size</h3>
                        <div className="flex gap-10 border border-black/10 rounded-lg p-6">
                            {sizes.map((size) => (
                                <div key={size}>
                                    <div className="text-sm text-medium mb-2">Size {size}</div>
                                    <CircularProgress size={size} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Determinate CircularProgress by Size</h3>
                        <div className="flex gap-10 border border-black/10 rounded-lg p-6">
                            {sizes.map((size) => (
                                <div key={size}>
                                    <div className="text-sm text-medium mb-2">Size {size}</div>
                                    <CircularProgress variant="determinate" value={value} size={size} showLabel />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold">Linear </h2>
                <div className="space-y-6 mt-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Default LinearProgress by Color</h3>
                        <div className="flex flex-col gap-6 border border-black/10 rounded-lg p-6">
                            {colors.map((color) => (
                                <div key={color}>
                                    <div className="text-sm text-medium mb-2">
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </div>
                                    <LinearProgress color={color} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Determinate LinearProgress by Color</h3>
                        <div className="flex flex-col gap-6 border border-black/10 rounded-lg p-6">
                            {colors.map((color) => (
                                <div key={color}>
                                    <div className="text-sm text-medium mb-2">
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </div>
                                    <LinearProgress variant="determinate" value={value} color={color} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Determinate LinearProgress with Label</h3>
                        <div className="flex flex-col gap-6 border border-black/10 rounded-lg p-6">
                            {colors.map((color) => (
                                <div key={color}>
                                    <div className="text-sm text-medium mb-2">
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </div>
                                    <LinearProgress variant="determinate" value={value} color={color} showLabel />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
