## trtime

treate time.
It only has the ability to convert numbers to strings.For now.

```ts
parseTime(
  333333333333,
  {
    y: '年',
    M: '月',
    w: '週',
    d: '日',
    h: '時間',
    m: '分',
    s: '秒',
  },
  true,
);
/**
 * {
 *   parsedTime: '10年6月4週35分33秒',
 *   remainTime: 333,
 * }
 */
```
