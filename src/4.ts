class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(this: Key) {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  public getKey(this: Person) {
    return this.key;
  }
}
abstract class House {
  protected door: boolean;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}

  public comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
    this.door = false;
    this.tenants = [];
  }
  public openDoor(key: Key) {
    if (this.key === key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
