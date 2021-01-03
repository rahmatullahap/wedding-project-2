const MAX_LENGTH = 50;

export default function SummaryFilter(value: string): any {
  if (!value) {
    return '';
  }
  const length = value.length;

  let summary = value;
  if (length > MAX_LENGTH) {
    summary = value.substr(0, MAX_LENGTH) + ' ...';
  }
  return summary;
}
