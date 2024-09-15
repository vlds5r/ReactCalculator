function Result ({ value }) {
    if (value !== null) {
        return (<div className="Result">Výsledek: {value}</div>);
    } else {
        return (null);
    }
}

export default Result;