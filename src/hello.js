import React from 'react';
/**
 * Hello component
 * @param {*} props
 * @return {string}
 * It returns h1 or span
 */
export default function Hello(props) {
  if (props.name) {
    return <h1>Hello, {props.name}</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
}
