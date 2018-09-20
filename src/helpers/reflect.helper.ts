import { VAYPR_KEY } from '../constants';

export class ReflectHelper {
  key: string;

  constructor(key: string, nonVaypr = false) {
    if (typeof key !== 'string') { throw new Error('ReflectHelper constructor error - invalid parameter key') }
    this.key = nonVaypr ? key : `${VAYPR_KEY}:${key}`;
  }
  
  /**
   * 
   * @param target the class
   * @param propertyKey optional - the property of the class
   */
  hasMetadata(target: any, propertyKey?: string): boolean {
    return propertyKey ? Reflect.hasMetadata(this.key, target, propertyKey) : Reflect.hasMetadata(this.key, target);  
  }
  
  /**
   * Get the metadata of a class
   * @param target
   */
  getClassMetadata(target: any): void {
    return Reflect.getMetadata(this.key, target);
  }
  
  /**
   * Get the metadata of a property of a class
   * @param target the target class
   * @param propertyKey the property to get metadata
   */
  getPropertyMetadata(target: any, propertyKey: string): void {
    return Reflect.getMetadata(this.key, target, propertyKey);
  }
  
  /**
   * Create or update property metadata
   * @param target
   * @param propertyKey
   * @param metadata
   */
  setPropertyMetadata(target: any, propertyKey: string, metadata: any): void {
    if (this.hasMetadata(target, propertyKey)) {
      const existingValue = this.getPropertyMetadata(target, propertyKey);
      console.log('existing value', existingValue);
    } else {
      Reflect.defineMetadata(target, propertyKey, metadata);
    }
  }
}
