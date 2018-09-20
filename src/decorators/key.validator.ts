import { getTypeDesign } from '../helpers';

/**
 * A decorator expressly for  
 * @param target
 * @param propertKey
 */
export function Key(target: any, propertKey: string): any {
  return getTypeDesign(target, propertKey);
}
