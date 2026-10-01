import { tokens } from '../../dist/tokens.js';
export function vesperChartStyle(name: keyof typeof tokens.themes = 'paper') {
 const t=tokens.themes[name];
 return { colors:[t['chart-1'],t['chart-2'],t['chart-3']], grid:t['chart-grid'], axis:t['chart-axis'], text:t.text, fontFamily:tokens.base['font-ui'], tooltip:{backgroundColor:t['surface-raised'],borderColor:t['border-strong'],textStyle:{color:t.text,fontFamily:tokens.base['font-ui']}} };
}
// The caller maps stable IDs to these positions; data identity stays in each app.
export const vesperSeriesStyles = [
 {index:0,lineType:'solid',symbol:'circle'},
 {index:1,lineType:'dashed',symbol:'rect'},
 {index:2,lineType:'dotted',symbol:'triangle'},
] as const;
