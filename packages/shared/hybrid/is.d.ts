export default is;
declare namespace is {
  function defined(val: any): val is any;
  function bool(val: any): val is boolean;
  function number(val: any): val is number;
  function nan(val: any): val is number;
  function string(val: any): val is string;
  function fn(val: any): val is Function;
  function async(val: any): val is Function;
  function promise(val: any): val is Promise<any>;
  function regex(val: any): val is RegExp;
  function set(val: any): val is Set<any>;
  function array(val: any): val is any[];
  function object(val: any): val is any;
  function plainObject(val: any): boolean;
  function between(val: any, min: any, max: any): boolean;
  function empty(val: any): boolean;
  function notEmpty(val: any): boolean;
  function even(val: any): boolean;
  function url(val: any): boolean;
}
