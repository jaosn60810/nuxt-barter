export function useUtilities() {
  function toTitleCase(str: string | string[]) {
    return [...str]
      .join('')
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  return { toTitleCase };
}
