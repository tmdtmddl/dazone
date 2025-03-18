// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

// // dayjs 플러그인 확장
// dayjs.extend(relativeTime);

// export const getCreatedAt = () => dayjs().format();

// export const getFromNow = (date: string) => dayjs(date).fromNow();
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const getCreatedAt = () => dayjs().format();

export const getFromNow = (date: string) => dayjs(date).fromNow();
