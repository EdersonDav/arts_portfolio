/* eslint-disable no-param-reassign */
export const slugify = (text: string): string => {
  text = text.replace(/^\s+|\s+$/g, '');
  text = text.toLowerCase();

  const from = 'àáãäâèéëêìíïîòóöôõùúüûñç·/_,:;';
  const to = 'aaaaaeeeeiiiiooooouuuunc------';

  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = from.length; i < l; i++) {
    text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  text = text
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return text;
};
