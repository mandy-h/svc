import { useState, useEffect } from 'react';
import { testData } from './testData';

/**
 * Returns mock data from the testData object.
 * @param {number} setNumber - Which test data to use
 */
export default function useMockData(setNumber) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(testData[setNumber]);
  }, [setNumber]);

  return { data };
}
