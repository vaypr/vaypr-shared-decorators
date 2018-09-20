import { TS_DESIGN_TYPE } from '../constants';
import { ReflectHelper } from './reflect.helper';

export const designHelper = new ReflectHelper(TS_DESIGN_TYPE);

export function getTypeDesign(target: any, propertyKey: string): any {
  return designHelper.getPropertyMetadata(target, propertyKey);
}
