import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'uptime-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

interface ShowConfig {
  header: boolean;
  icon: boolean;
  status: boolean;
  timeline: boolean;
  footer: boolean;
}

interface ColorConfig {
  ok: string;
  ko: string;
  half: string;
  none: string;
}

interface AliasConfig {
  ok?: string;
  ko?: string;
}

interface BarConfig {
  height: number;
  round: number;
  spacing: number;
  amount: number;
}

// Snake case here to respect Yaml home assistant
export interface CardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  icon?: string;
  on?: string;
  off?: string;
  severity: number;
  hours_to_show: number;
  update_interval?: number;
  color: ColorConfig;
  alias: AliasConfig;
  show: ShowConfig;
  bar: BarConfig;
}

export interface Point {
  x: number;
  y: string;
}

export interface ApiPoint {
  last_changed: string;
  last_updated: string;
  state: string;
  entity_id: string;
}

export interface Repartition {
  ok: number;
  ko: number;
  none: number;
}

export interface Period {
  from: number;
  to: number;
}

export interface CacheData {
  points: Point[];
  lastFetched: number;
  lastChanged: number;
  hoursToShow: number;
}