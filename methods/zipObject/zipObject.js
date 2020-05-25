const zipObject = (props, values) => {
    const obj = {};
    
    props.forEach((el, i) => obj[el] = values[i]);
    
    return obj;
};

module.exports = zipObject;