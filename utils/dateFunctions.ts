import { formatDistanceToNow } from 'date-fns';
// import { en } from 'date-fns/locale'; // To import Spanish language (es)

export const getFormatDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date);

// For Spanish you have to import the language and add the second argument "locale":
  // const fromNowES = formatDistanceToNow(date, {locale: es});

  return `Created: ${fromNow}`;
};
