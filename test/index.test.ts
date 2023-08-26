import { parseTime } from '@/index';

describe('trtime', (): void => {
  describe('parseTime', (): void => {
    it('should return parsedTime and remainTime', (): void => {
      expect(parseTime(1000, { h: 'h' })).toEqual({
        parsedTime: '',
        remainTime: 1000,
      });
    });
    it('should return parsed time when provide all format', (): void => {
      expect(
        parseTime(333333333333, {
          y: 'year',
          M: 'month',
          w: 'week',
          d: 'day',
          h: 'hour',
          m: 'minute',
          s: 'second',
          ms: 'millisecond',
        }),
      ).toEqual({
        parsedTime:
          '10 year 6 month 4 week 35 minute 33 second 333 millisecond',
        remainTime: 0,
      });
    });
  });

  it('should return parsed time with space', (): void => {
    expect(
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
      ),
    ).toEqual({
      parsedTime: '10年6月4週35分33秒',
      remainTime: 333,
    });
  });
});
