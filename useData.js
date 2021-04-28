import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  '<script src="https://gist.github.com/MoonjeongKim01/b99850ac51498b10730616ed9fa5a88c.js"></script>';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.Population = +d['2020'] * 1000;
      return d;
    };
    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10));
    });
  }, []);
  
  return data;
};