import React from 'react';

function Greeting({ name }: { name: string }) {
    return <h1>Hello, {name || "world!"}!</h1>
}

export default Greeting;