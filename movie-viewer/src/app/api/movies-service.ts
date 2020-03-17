import { IMovieResponse } from "app/models";

export class MoviesService {
  static url: string = 'http://reactjs-cdp.herokuapp.com';

  static getAll(): Promise<IMovieResponse> {
    return fetch(`${this.url}/movies`)
      .then((data: Response) => data.json())
      .catch((error: Error) => console.error(`${error.name} - ${error.message}`))
  }
}
