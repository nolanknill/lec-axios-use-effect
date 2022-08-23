import { useState, useEffect } from 'react';

function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`useEffect with count dep`);
    }, [count]);

    useEffect(() => {
        console.log(`useEffect on mount only`);
    }, []);

    useEffect(() => {
        console.log("useEffect no dependency");
    });

    const clickHandler = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Home</h1>
            <h2 onClick={clickHandler}>Count: {count}</h2>
            <p>See the console for which useEffect gets triggered when:</p>
            <ul>
                <li>Mounting this component</li>
                <li>Updating state of this component (triggering a re-render)</li>
            </ul>
        </>
    );
}

export default Home;