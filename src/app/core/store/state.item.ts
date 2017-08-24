export class StateItem<T> {
  private data: T = null;
  private status: 'SUCCESS' | 'ERROR' | 'LOADING';
  private error: any;

  getData(): T {
    return this.data;
  }

  setData(data: T) {
    this.status = 'SUCCESS';
    this.data = data;
    return this;
  }

  getError(): any {
    return this.error;
  }

  setError(error: any) {
    this.status = 'ERROR';
    this.data = null;
    this.error = error;
    return this;
  }

  setLoading() {
    this.status = 'LOADING';
    this.error = null;
    this.data = null;
    return this;
  }

  isLoading(): boolean {
    return this.status === 'LOADING';
  }

  isFailure(): boolean {
    return this.status === 'ERROR';
  }

  isSuccess(): boolean {
    return this.status === 'SUCCESS';
  }
}
