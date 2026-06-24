import { SERIES, type SeriesMeta } from '../config';

export function getSeries(slug: string): SeriesMeta {
  return SERIES[slug] ?? SERIES.standalone;
}

export function getSeriesLabel(slug: string): string {
  return SERIES[slug]?.label ?? '';
}

export function getSeriesColor(slug: string): string {
  return SERIES[slug]?.color ?? '#888';
}
