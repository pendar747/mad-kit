import { defineProvider } from '../../../lib/node_modules/mad';

class Content {
  private store: Map<string, string> = new Map([]);

  get (key: string) {
    return this.store.get(key);
  }
}

defineProvider('content', ({ settings }) => {
  return new Content();
})