import { Formatter } from '@/type';

const y = 365 * 24 * 60 * 60 * 1000;
const M = 30 * 24 * 60 * 60 * 1000;
const w = 7 * 24 * 60 * 60 * 1000;
const d = 24 * 60 * 60 * 1000;
const h = 60 * 60 * 1000;
const m = 60 * 1000;
const s = 1000;
const ms = 1;

export const parseTime = (
  time: number,
  formatter: Formatter,
  noSpace = false,
): {
  parsedTime: string;
  remainTime: number;
} => {
  let remainTime = time;
  let parsedTime = '';
  if (time < 0) {
    parsedTime += '-';
    remainTime = -time;
  }

  if (formatter.y) {
    const year = Math.floor(remainTime / y);
    if (year > 0) {
      parsedTime += noSpace
        ? `${year}${formatter.y}`
        : `${year} ${formatter.y} `;
      remainTime -= year * y;
    }
  }
  if (formatter.M) {
    const month = Math.floor(remainTime / M);
    if (month > 0) {
      parsedTime += noSpace
        ? `${month}${formatter.M}`
        : `${month} ${formatter.M} `;
      remainTime -= month * M;
    }
  }
  if (formatter.w) {
    const week = Math.floor(remainTime / w);
    if (week > 0) {
      parsedTime += noSpace
        ? `${week}${formatter.w}`
        : `${week} ${formatter.w} `;
      remainTime -= week * w;
    }
  }
  if (formatter.d) {
    const day = Math.floor(remainTime / d);
    if (day > 0) {
      parsedTime += noSpace
        ? `${day}${formatter.d}`
        : `${day} ${formatter.d} `;
      remainTime -= day * d;
    }
  }
  if (formatter.h) {
    const hour = Math.floor(remainTime / h);
    if (hour > 0) {
      parsedTime += noSpace
        ? `${hour}${formatter.h}`
        : `${hour} ${formatter.h} `;
      remainTime -= hour * h;
    }
  }
  if (formatter.m) {
    const minute = Math.floor(remainTime / m);
    if (minute > 0) {
      parsedTime += noSpace
        ? `${minute}${formatter.m}`
        : `${minute} ${formatter.m} `;
      remainTime -= minute * m;
    }
  }
  if (formatter.s) {
    const second = Math.floor(remainTime / s);
    if (second > 0) {
      parsedTime += noSpace
        ? `${second}${formatter.s}`
        : `${second} ${formatter.s} `;
      remainTime -= second * s;
    }
  }
  if (formatter.ms) {
    const millisecond = Math.floor(remainTime / ms);
    if (millisecond > 0) {
      parsedTime += noSpace
        ? `${millisecond}${formatter.ms}`
        : `${millisecond} ${formatter.ms} `;
      remainTime -= millisecond * ms;
    }
  }

  return {
    parsedTime: parsedTime.trim(),
    remainTime,
  };
};
