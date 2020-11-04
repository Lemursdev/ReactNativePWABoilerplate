import React = require('react');

export default function Home({ number: param1 }) {
    param1 = 5;
    return <h2>{param1}</h2>;
}
