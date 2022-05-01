import React, { useState, useEffect } from 'react';

function Test() {
  const [result, setResult] = useState('');

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  /*
  useEffect(() => {
    fetch('https://booking-service-kdewilj24a-uc.a.run.app/getallitemgroups')
      .then((res) => res.json())
      .then(
        (res) => {
          setResult(res[0].displayName);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setResult(String(error));
        }
      );
  }, []);*/

  return (
    <>
      <h1>{result}</h1>
    </>
  );
}

export default Test;
