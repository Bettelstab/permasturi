const urlMatcher =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export const autoLinkMatchers = [
  (text: string) => {
    const match = urlMatcher.exec(text);

    if (match === null) return null;

    const fullMatch = match[0];

    if (fullMatch === undefined) return null;

    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
      // attributes: { rel: 'noopener', target: '_blank' }, // Optional link attributes
    };
  },
];
